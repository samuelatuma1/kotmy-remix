import {
  require_auth
} from "/build/_shared/chunk-YG2WIZWF.js";
import {
  DragnDrop
} from "/build/_shared/chunk-G62RSI5Z.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import {
  FormControl
} from "/build/_shared/chunk-P6IR6DKG.js";
import "/build/_shared/chunk-65Q6VMM7.js";
import {
  useToast
} from "/build/_shared/chunk-R6F4DP54.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-ZTZJB4DO.js";
import {
  Cta_default
} from "/build/_shared/chunk-55Q66HLJ.js";
import "/build/_shared/chunk-JUDIPLC6.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-QORMC3GD.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/user.profile.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_auth = __toESM(require_auth(), 1);
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
  import.meta.hot.lastModified = "1770457399191.5789";
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen text-gray-900 bg-secondary flex flex-col items-center pt-24 pb-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-2xl w-full px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center mb-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-200 mb-4", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full bg-gray-200 animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 138,
        columnNumber: 26
      }, this) : imagePreview ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imagePreview, alt: "Profile", className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 138,
        columnNumber: 103
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "w-full h-full" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 138,
        columnNumber: 185
      }, this) }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, this),
      isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-8 w-40 bg-gray-200 rounded animate-pulse mb-2" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-5 w-56 bg-gray-200 rounded animate-pulse" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 140,
        columnNumber: 24
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-gray-900", children: [
          profile?.first_name,
          " ",
          profile?.last_name
        ] }, void 0, true, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 144,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg text-gray-600", children: email }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 145,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 143,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 136,
      columnNumber: 9
    }, this),
    isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white border rounded-3xl p-8 flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-10 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 153,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-12 bg-gray-200 rounded animate-pulse" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 148,
      columnNumber: 22
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "POST", encType: "multipart/form-data", className: "bg-white border rounded-3xl p-8 flex flex-col gap-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "first_name", name: "first_name", labelText: "First Name", defaultValue: profile?.first_name, icon: icons.avatarIcon, required: true }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 156,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "last_name", name: "last_name", labelText: "Last Name", defaultValue: profile?.last_name, icon: icons.avatarIcon, required: true }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "email", name: "email", labelText: "Email", defaultValue: email, icon: icons.avatarIcon, required: true, readOnly: true }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 158,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "status", name: "status", labelText: "Status", defaultValue: profile?.status, icon: icons.avatarIcon }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 162,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormControl, { as: "input", id: "", name: "", labelText: "Referral code", defaultValue: referralCode, icon: icons.lockIcon, required: true, readOnly: true }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "image", className: "flex items-center gap-2 text-sm font-medium text-gray-700", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.avatarIcon, className: "w-4 h-4" }, void 0, false, {
          fileName: "app/routes/user.profile.tsx",
          lineNumber: 166,
          columnNumber: 15
        }, this),
        "Profile Image"
      ] }, void 0, true, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 165,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DragnDrop, { name: "image", labelText: "Upload Image", multiple: false, required: false }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Cta_default, { element: "button", type: "submit", className: "rounded-lg p-3", children: "Update Profile" }, void 0, false, {
        fileName: "app/routes/user.profile.tsx",
        lineNumber: 171,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/user.profile.tsx",
      lineNumber: 155,
      columnNumber: 20
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 135,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/user.profile.tsx",
    lineNumber: 134,
    columnNumber: 10
  }, this);
}
_s2(UserProfilePage, "16Gx9KQpPRg/wxPmlDh0hZ9oHJc=", false, function() {
  return [useUserProfileController];
});
_c = UserProfilePage;
var _c;
$RefreshReg$(_c, "UserProfilePage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  UserProfilePage as default
};
//# sourceMappingURL=/build/routes/user.profile-ESNWEGII.js.map
