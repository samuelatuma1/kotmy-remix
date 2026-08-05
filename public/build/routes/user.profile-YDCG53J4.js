import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  DragnDrop
} from "/build/_shared/chunk-4KHNCWYH.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  FormControl
} from "/build/_shared/chunk-HDTHGJZ5.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  useToast
} from "/build/_shared/chunk-LRNROA4B.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-WF5NNSAN.js";
import {
  Cta_default
} from "/build/_shared/chunk-VCQR46EC.js";
import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-NO4YTAWP.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/user.profile.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/user.profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.profile.tsx"
  );
  import.meta.hot.lastModified = "1785971689310.6992";
}
function useUserProfileController() {
  _s();
  const {
    toast
  } = useToast();
  const loaderData = useLoaderData();
  const actionData = useActionData();
  const navigate = useNavigate();
  const [profile, setProfile] = (0, import_react2.useState)(loaderData?.data?.user_profile || null);
  const [email, setEmail] = (0, import_react2.useState)(loaderData?.data?.email || "");
  const [referralCode, setReferralCode] = (0, import_react2.useState)(loaderData?.data?.referral_code || "");
  const [imagePreview, setImagePreview] = (0, import_react2.useState)(profile?.image_url);
  const fileInputRef = (0, import_react2.useRef)(null);
  (0, import_react2.useEffect)(() => {
    if (actionData?.error) {
      toast({
        variant: "destructive",
        title: "Update Failed",
        description: actionData.error?.detail?.toString() || actionData.error?.toString() || "Could not update profile."
      });
    }
    if (actionData?.data) {
      toast({
        variant: "default",
        title: "Profile Updated",
        description: "Your profile has been updated successfully."
      });
      setProfile(actionData.data.user_profile || null);
      setEmail(actionData.data.email || "");
      setReferralCode(actionData.data.referral_code || "");
      setImagePreview(actionData.data.user_profile?.image_url);
    }
  }, [actionData]);
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };
  return {
    profile,
    email,
    imagePreview,
    fileInputRef,
    handleImageChange,
    referralCode
  };
}
_s(useUserProfileController, "NvfEwCRvdAJLiPMLJrXVTy3bCKs=", false, function() {
  return [useToast, useLoaderData, useActionData, useNavigate];
});
function UserProfilePage() {
  _s2();
  const {
    profile,
    email,
    imagePreview,
    fileInputRef,
    handleImageChange,
    referralCode
  } = useUserProfileController();
  const isLoading = !profile && !email;
  const [signupReferralLink, setSignupReferralLink] = (0, import_react2.useState)("");
  const [partnerReferralLink, setPartnerReferralLink] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    const origin = window.location.origin;
    const referralParam = encodeURIComponent(referralCode || "");
    setSignupReferralLink(`${origin}/signup?referred_by_code=${referralParam}`);
    setPartnerReferralLink(`${origin}/partner/partner?referred_by_code=${referralParam}`);
  }, [referralCode]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white text-brand-navy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy px-6 py-8 text-white sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: "Account" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 text-3xl font-black leading-tight sm:text-4xl", children: "Profile settings" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 146,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 max-w-sm text-sm leading-6 text-white/80", children: "Update your status here. Friends and family love to check your status." }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 144,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-8 sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-secondary shadow-[0_10px_30px_rgba(14,42,77,0.12)]", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full animate-pulse bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 156,
              columnNumber: 34
            }, this) : imagePreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagePreview, alt: "Profile", className: "h-full w-full object-cover" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 156,
              columnNumber: 112
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "h-full w-full" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 156,
              columnNumber: 194
            }, this) }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 155,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -right-1 bottom-2 h-5 w-5 rounded-full border-2 border-white bg-brand-gold" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 158,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-8 w-44 animate-pulse rounded-full bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 163,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-4 w-56 animate-pulse rounded-full bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 164,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 162,
            columnNumber: 32
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black tracking-tight text-brand-navy", children: [
              profile?.first_name,
              " ",
              profile?.last_name
            ] }, void 0, true, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 166,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-brand-slate", children: email }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 169,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 165,
            columnNumber: 30
          }, this) }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid gap-3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoChip, { label: "Referral code", value: referralCode || "Unavailable" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 175,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoChip, { label: "Status", value: profile?.status || "Active" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReferralShareCard, { label: "Refer users with your referral code", description: "Share your signup link with friends and family.", link: signupReferralLink, whatsappText: `Join me on KOTMY using my referral link: ${signupReferralLink}` }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ReferralShareCard, { label: "Refer partner with your referral code", description: "Invite businesses to join the partner onboarding flow.", link: partnerReferralLink, whatsappText: `Join KOTMY as a partner using my referral link: ${partnerReferralLink}` }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 181,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 179,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 143,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-brand-grey px-6 py-6 sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate", children: "Details" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 190,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-brand-navy", children: "Edit profile" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 max-w-2xl text-sm leading-6 text-brand-slate" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 189,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-6 sm:px-8 sm:py-8", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileSkeleton, {}, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 198,
        columnNumber: 28
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", defaultValue: profile?.first_name, icon: icons.avatarIcon, required: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 200,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", defaultValue: profile?.last_name, icon: icons.avatarIcon, required: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 201,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 199,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", defaultValue: email, icon: icons.avatarIcon, required: true, readOnly: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 205,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "status", name: "status", labelText: "Status", defaultValue: profile?.status, icon: icons.avatarIcon }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 206,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 204,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "", name: "", labelText: "Referral code", defaultValue: referralCode, icon: icons.lockIcon, required: true, readOnly: true }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 209,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-semibold text-brand-navy", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 213,
              columnNumber: 23
            }, this),
            "Profile Image"
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-brand-slate", children: "Upload display picture" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 216,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Upload Image", multiple: false, required: false }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 220,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 219,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 211,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "min-w-[180px] rounded-full px-6 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(237,60,90,0.2)]", children: "Update Profile" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 225,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 224,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 198,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 197,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 188,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 142,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 141,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 140,
    columnNumber: 10
  }, this);
}
_s2(UserProfilePage, "ryHARRMQmONy+0fYL266lWHBMk0=", false, function() {
  return [useUserProfileController];
});
_c = UserProfilePage;
function InfoChip({
  label,
  value
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-brand-grey bg-white px-4 py-3 shadow-[0_6px_20px_rgba(14,42,77,0.04)] ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-slate ", children: label }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 break-words text-sm font-semibold text-brand-navy ", children: value }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 244,
    columnNumber: 10
  }, this);
}
_c2 = InfoChip;
function ReferralShareCard({
  label,
  description,
  link,
  whatsappText
}) {
  _s3();
  const {
    toast
  } = useToast();
  const handleCopy = async () => {
    if (!link) {
      return;
    }
    await navigator.clipboard.writeText(link);
    toast({
      title: "Link Copied",
      description: `${label} copied to clipboard.`
    });
  };
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappText)}`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-brand-grey bg-secondary p-5 shadow-[0_6px_20px_rgba(14,42,77,0.04)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-brand-slate", children: label }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 272,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-brand-slate", children: description }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 273,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 flex flex-col gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "break-all rounded-2xl border border-brand-grey bg-white px-4 py-3 text-sm font-medium text-brand-navy", children: link || "Referral link unavailable" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 275,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handleCopy, disabled: !link, className: "inline-flex items-center justify-center rounded-full border border-brand-navy px-4 py-3 text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-50", children: "Copy link" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 279,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: whatsappUrl, target: "_blank", rel: "noreferrer", className: `inline-flex items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-white transition ${link ? "bg-green-600 hover:bg-green-500" : "pointer-events-none bg-green-600/50"}`, children: "Share on WhatsApp" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 282,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 274,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 271,
    columnNumber: 10
  }, this);
}
_s3(ReferralShareCard, "XbQoRqPDPo6PJEzRId7w4FMisDk=", false, function() {
  return [useToast];
});
_c3 = ReferralShareCard;
function ProfileSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 297,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 296,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 300,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 295,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 308,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 309,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 307,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 312,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 313,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 311,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 306,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-28 rounded-full bg-secondary" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 318,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-40 rounded-full bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 320,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-3/4 rounded-full bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 321,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 h-12 rounded-2xl bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 322,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 319,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-44 rounded-full bg-secondary" }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 327,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 326,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 294,
    columnNumber: 10
  }, this);
}
_c4 = ProfileSkeleton;
var _c;
var _c2;
var _c3;
var _c4;
$RefreshReg$(_c, "UserProfilePage");
$RefreshReg$(_c2, "InfoChip");
$RefreshReg$(_c3, "ReferralShareCard");
$RefreshReg$(_c4, "ProfileSkeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserProfilePage as default
};
//# sourceMappingURL=/build/routes/user.profile-YDCG53J4.js.map
