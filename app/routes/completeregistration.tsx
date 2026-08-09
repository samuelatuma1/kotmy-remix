import { Form, Link, useActionData, useNavigate, useNavigation, useSearchParams } from "@remix-run/react";
import { icons } from "~/assets/icons";
import { adminAvatar } from "~/assets/images";
import FormControl from "~/components/reusables/FormControl";
import Cta from "~/components/reusables/Cta";
import Svg from "~/components/reusables/Svg";
import { ActionFunctionArgs, json, LoaderFunctionArgs } from "@remix-run/node";
import { useEffect, useRef, useState } from "react";
import { useUserManager } from "~/lib/store/store_managers/tokenManager";
import { useToast } from "~/components/reusables/use-toast";
import { authServer } from "~/services/auth/auth.server";
import { setAuthSession } from "~/lib/session.server";

const RESEND_LOCK_KEY = "kotmy_resend_lock";
const RESEND_LOCK_DURATION = 60; // seconds

export async function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "resend") {
    const email = formData.get("email") as string;
    const { error } = await authServer.resend_complete_registration_token(email);
    if (error) {
      return json({
        error: error.detail?.toString() || "An error occurred while resending the token.",
        data: null,
        intent: "resend",
      });
    }
    return json({ data: { resent: true }, error: null, intent: "resend" });
  }

  const user_id = formData.get("user_id") as string;
  const token = formData.get("token") as string;

  if (!user_id || !token) {
    return json({
      error: "User ID and verification token are required.",
      data: null,
      intent: "verify",
    });
  }

  const { data, error } = await authServer.complete_registration({ user_id, token });

  if (error) {
    return json({
      error: error.detail?.toString() || "An error occurred during verification.",
      data: null,
      intent: "verify",
    });
  }

  if (!data?.token) {
    return json(
      {
        error: "Verification succeeded but no token was returned.",
        data: null,
        intent: "verify",
      },
      { status: 500 }
    );
  }

  const { headers } = await setAuthSession(request, data.token);
  return json({ data, error: null, intent: "verify" }, { headers });
}

function getResendLockRemaining(): number {
  if (typeof window === "undefined") return 0;
  const stored = localStorage.getItem(RESEND_LOCK_KEY);
  if (!stored) return 0;
  const lockUntil = parseInt(stored, 10);
  const remaining = Math.max(0, Math.ceil((lockUntil - Date.now()) / 1000));
  if (remaining === 0) localStorage.removeItem(RESEND_LOCK_KEY);
  return remaining;
}

function useCompleteRegistrationController() {
  const actionData = useActionData<typeof action>();
  const [searchQuery] = useSearchParams();
  const { setUserStoreManager } = useUserManager();
  const { toast } = useToast();
  const navigate = useNavigate();

  const user_id = searchQuery.get("user_id") ?? "";
  const email = searchQuery.get("email") ?? "";
  const prefilledToken = searchQuery.get("token") ?? "";

  const [resendCountdown, setResendCountdown] = useState(0);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialize countdown from localStorage on mount
  useEffect(() => {
    const remaining = getResendLockRemaining();
    if (remaining > 0) {
      setResendCountdown(remaining);
    }
  }, []);

  // Manage countdown interval
  useEffect(() => {
    if (resendCountdown <= 0) {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
      localStorage.removeItem(RESEND_LOCK_KEY);
      return;
    }

    if (!countdownRef.current) {
      countdownRef.current = setInterval(() => {
        setResendCountdown((prev) => {
          const next = Math.max(0, prev - 1);
          if (next === 0) {
            localStorage.removeItem(RESEND_LOCK_KEY);
          }
          return next;
        });
      }, 1000);
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
        countdownRef.current = null;
      }
    };
  }, [resendCountdown]);

  // Handle action responses
  useEffect(() => {
    if (!actionData) return;

    if (actionData.error) {
      toast({
        variant: "destructive",
        title: actionData.intent === "resend" ? "Resend Failed" : "Verification Failed",
        description: actionData.error,
      });
      return;
    }

    if (actionData.intent === "resend" && actionData.data) {
      toast({
        variant: "default",
        title: "Token Resent",
        description: "A verification token has been sent to your email.",
      });
      const lockUntil = Date.now() + RESEND_LOCK_DURATION * 1000;
      localStorage.setItem(RESEND_LOCK_KEY, String(lockUntil));
      setResendCountdown(RESEND_LOCK_DURATION);
      return;
    }

    if (actionData.intent === "verify" && actionData.data && "token" in actionData.data) {
      toast({
        variant: "default",
        title: "Account Verified",
        description: "Your account has been verified successfully. Welcome!",
      });
      setUserStoreManager(actionData.data, true);
      navigate(searchQuery.get("redirectTo") || "/user/profile");
    }
  }, [actionData]);

  return { user_id, email, prefilledToken, resendCountdown };
}

export default function CompleteRegistration() {
  const { user_id, email, prefilledToken, resendCountdown } = useCompleteRegistrationController();
  const [searchQuery] = useSearchParams();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const hasToken = Boolean(searchQuery.get("token"));

  if (!user_id) {
    return (
      <main className="bg-secondary p-4 flex flex-col min-h-dvh">
        <Link to={"/"} aria-label="home">
          <Svg src={icons.logoIcon} className="w-14 h-14 sm:w-16 sm:h-16" />
        </Link>
        <section className="grow flex flex-col justify-center items-center">
          <div className="w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3 text-center">
            <h1 className="text-2xl font-satoshi-bold">Invalid Link</h1>
            <p className="text-sm text-gray-600">
              This verification link is invalid or incomplete. Please sign up again to receive a new verification token.
            </p>
            <Cta element="link" to="/signup" className="rounded-lg p-3">Go to Sign Up</Cta>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-secondary p-4 flex flex-col min-h-dvh">
      <Link to={"/"} aria-label="home">
        <Svg src={icons.logoIcon} className="w-14 h-14 sm:w-16 sm:h-16" />
      </Link>
      <section className="grow flex flex-col justify-center items-center">
        <Form method="POST" className="w-full max-w-md p-4 sm:p-8 bg-white border rounded-3xl flex flex-col gap-3">
          <div className="w-max mx-auto p-4 border border-disabled rounded-full bg-gradient-to-b from-slate-200 to-white">
            <div className="w-max p-4 border border-disabled rounded-full bg-white">
              <img src={adminAvatar} alt="person silhouette" width={24} height={24} />
            </div>
          </div>
          <h1 className="text-2xl font-satoshi-bold text-center">Complete your registration</h1>
          <hr />
          <p className="text-center text-sm text-gray-600">
            {hasToken
              ? "Enter the 6-digit verification token sent to your email to activate your account."
              : `We've sent a 6-digit verification token to ${email || "your email"}. Enter it below to activate your account.`}
          </p>
          <div className="my-2 flex flex-col gap-3">
            <input type="hidden" name="user_id" value={user_id} />
            <input type="hidden" name="email" value={email} />
            <FormControl
              as="input"
              id="token"
              name="token"
              placeholder="Enter 6-digit token"
              labelText="Verification Token"
              icon={icons.lockIcon}
              defaultValue={prefilledToken}
              
              maxLength={6}
              inputMode="numeric"
              autoComplete="one-time-code"
              autoFocus={!hasToken}
            />
          </div>
          <Cta element="button" type="submit" name="intent" value="verify" disabled={isSubmitting} className="rounded-lg p-3">
            {isSubmitting ? "Verifying..." : "Verify Account"}
          </Cta>
          <div className="flex items-center justify-center gap-2 text-sm">
            <span className="text-gray-600">Didn't receive the token?</span>
            {resendCountdown > 0 ? (
              <span className="text-primary font-medium tabular-nums">
                Resend in {resendCountdown}s
              </span>
            ) : (
              <button
                type="submit"
                name="intent"
                value="resend"
                disabled={isSubmitting}
                className="text-primary underline font-medium disabled:opacity-50"
              >
                Resend Token
              </button>
            )}
          </div>
        </Form>
      </section>
    </main>
  );
}