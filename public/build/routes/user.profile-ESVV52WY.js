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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/user.profile.tsx"
  );
  import.meta.hot.lastModified = "1785916636900.726";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-white text-brand-navy", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 lg:grid-cols-[360px_minmax(0,1fr)]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy px-6 py-8 text-white sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-white/80", children: "Account" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 136,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-3 text-3xl font-black leading-tight sm:text-4xl", children: "Profile settings" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 max-w-sm text-sm leading-6 text-white/80", children: "Update your status here. Friends and family love to check your status." }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-8 sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-secondary shadow-[0_10px_30px_rgba(14,42,77,0.12)]", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full w-full animate-pulse bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 147,
              columnNumber: 34
            }, this) : imagePreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagePreview, alt: "Profile", className: "h-full w-full object-cover" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 147,
              columnNumber: 112
            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "h-full w-full" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 147,
              columnNumber: 194
            }, this) }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute -right-1 bottom-2 h-5 w-5 rounded-full border-2 border-white bg-brand-gold" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 149,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-8 w-44 animate-pulse rounded-full bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 154,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto h-4 w-56 animate-pulse rounded-full bg-secondary" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 155,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 153,
            columnNumber: 32
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-black tracking-tight text-brand-navy", children: [
              profile?.first_name,
              " ",
              profile?.last_name
            ] }, void 0, true, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-brand-slate", children: email }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 160,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 156,
            columnNumber: 30
          }, this) }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 152,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 grid gap-3 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoChip, { label: "Referral code", value: referralCode || "Unavailable" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InfoChip, { label: "Status", value: profile?.status || "Active" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 167,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 165,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 143,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "overflow-hidden rounded-[2rem] border border-brand-grey bg-white shadow-[0_18px_60px_rgba(14,42,77,0.08)]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-brand-grey px-6 py-6 sm:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.24em] text-brand-slate", children: "Details" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 176,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-2 text-2xl font-black tracking-tight text-brand-navy", children: "Edit profile" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 177,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 max-w-2xl text-sm leading-6 text-brand-slate" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 178,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 175,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-6 sm:px-8 sm:py-8", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProfileSkeleton, {}, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 184,
        columnNumber: 28
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "grid gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", defaultValue: profile?.first_name, icon: icons.avatarIcon, required: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 186,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", defaultValue: profile?.last_name, icon: icons.avatarIcon, required: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 187,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 185,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", defaultValue: email, icon: icons.avatarIcon, required: true, readOnly: true }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 191,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "status", name: "status", labelText: "Status", defaultValue: profile?.status, icon: icons.avatarIcon }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 192,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 190,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "", name: "", labelText: "Referral code", defaultValue: referralCode, icon: icons.lockIcon, required: true, readOnly: true }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 195,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2 text-sm font-semibold text-brand-navy", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "h-4 w-4" }, void 0, false, {
              fileName: "app/routes/user.profile.tsx",
              lineNumber: 199,
              columnNumber: 23
            }, this),
            "Profile Image"
          ] }, void 0, true, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 198,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm leading-6 text-brand-slate", children: "Upload display picture" }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 202,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Upload Image", multiple: false, required: false }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 206,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/user.profile.tsx",
            lineNumber: 205,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 197,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "min-w-[180px] rounded-full px-6 py-3 text-sm font-semibold shadow-[0_12px_30px_rgba(237,60,90,0.2)]", children: "Update Profile" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 211,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 210,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 184,
        columnNumber: 50
      }, this) }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 174,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 133,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 132,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 131,
    columnNumber: 10
  }, this);
}
_s2(UserProfilePage, "16Gx9KQpPRg/wxPmlDh0hZ9oHJc=", false, function() {
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
      lineNumber: 231,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 break-words text-sm font-semibold text-brand-navy ", children: value }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 232,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 230,
    columnNumber: 10
  }, this);
}
_c2 = InfoChip;
function ProfileSkeleton() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 240,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 241,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 239,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 244,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 245,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 243,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 238,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 251,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 252,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 250,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-24 rounded-full bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 255,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-14 rounded-2xl bg-secondary" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 256,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 254,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 249,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-3 w-28 rounded-full bg-secondary" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-[1.5rem] border border-dashed border-brand-grey bg-secondary p-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-4 w-40 rounded-full bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 263,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3 h-4 w-3/4 rounded-full bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 264,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-5 h-12 rounded-2xl bg-white/80" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 265,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 262,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 260,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 w-44 rounded-full bg-secondary" }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 270,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 237,
    columnNumber: 10
  }, this);
}
_c3 = ProfileSkeleton;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "UserProfilePage");
$RefreshReg$(_c2, "InfoChip");
$RefreshReg$(_c3, "ProfileSkeleton");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserProfilePage as default
};
//# sourceMappingURL=/build/routes/user.profile-ESVV52WY.js.map
