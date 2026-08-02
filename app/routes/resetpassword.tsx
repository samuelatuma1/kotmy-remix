import { ActionFunctionArgs, LoaderFunctionArgs, json } from "@remix-run/node";
import { Link, useActionData, useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import Cta from "~/components/reusables/Cta";
import FormControl from "~/components/reusables/FormControl";
import { useToast } from "~/components/reusables/use-toast";
import { authServer } from "~/services/auth/auth.server";
import type { IResetPasswordDTO } from "~/services/auth/types/auth.dtos";

type ActionData = {
  error?: string;
  message?: string;
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  return json({
    email: url.searchParams.get("email") ?? "",
    token: url.searchParams.get("token") ?? "",
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const dto: IResetPasswordDTO = {
    email: String(formData.get("email") ?? ""),
    token: String(formData.get("token") ?? ""),
    password: String(formData.get("password") ?? ""),
    confirm_password: String(formData.get("confirm_password") ?? ""),
  };

  const { error, data } = await authServer.resetPassword(dto);

  if (error) {
    return json<ActionData>(
      {
        error: error.detail?.toString() || "Could not reset password.",
      },
      { status: 400 }
    );
  }

  return json<ActionData>({
    message: typeof data === "string" ? data : "Password reset successfully.",
  });
}

export default function ResetPassword() {
  const { email, token } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const navigate = useNavigate();
  const { toast: pushToast } = useToast();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirecting, setRedirecting] = useState(false);

  const decodedEmail = useMemo(() => {
    try {
      return decodeURIComponent(email);
    } catch {
      return email;
    }
  }, [email]);

  const isSubmitting = navigation.state !== "idle" || redirecting;
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const canSubmit = Boolean(decodedEmail && token && passwordsMatch && password.length >= 6);

  useEffect(() => {
    if (actionData?.error) {
      pushToast({
        variant: "destructive",
        title: "Reset failed",
        description: actionData.error,
      });
    }

    if (actionData?.message) {
      pushToast({
        title: "Password updated",
        description: actionData.message,
      });
      setRedirecting(true);
      const timer = window.setTimeout(() => {
        navigate("/login");
      }, 4000);
      return () => window.clearTimeout(timer);
    }
  }, [actionData, navigate, pushToast]);

  return (
    <main className="min-h-dvh bg-secondary p-4 flex flex-col">
      <section className="grow flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border bg-white p-5 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <h1 className="text-2xl font-satoshi-bold">Reset password</h1>
            <Link to="/login" className="text-sm font-medium text-primary underline">
              Back to login
            </Link>
          </div>

          <form method="post" className="mt-6 flex flex-col gap-4">
            <input type="hidden" name="token" value={token} />

            <FormControl
              as="input"
              id="email"
              name="email"
              labelText="Email"
              type="email"
              value={decodedEmail}
              readOnly
              required
            />

            <FormControl
              as="input"
              id="password"
              name="password"
              labelText="New password"
              type="password"
              placeholder="Enter new password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              required
            />

            <FormControl
              as="input"
              id="confirm_password"
              name="confirm_password"
              labelText="Confirm password"
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.currentTarget.value)}
              required
              error={confirmPassword && !passwordsMatch ? "Passwords do not match" : undefined}
            />

            <Cta
              element="button"
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="rounded-xl p-3 font-medium transition-transform duration-200 hover:scale-[1.01]"
            >
              {isSubmitting ? "Updating..." : "Reset password"}
            </Cta>
          </form>
        </div>
      </section>
    </main>
  );
}
