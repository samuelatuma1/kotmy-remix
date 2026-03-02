import {
  Toggletip
} from "/build/_shared/chunk-ZTMOBMG6.js";
import {
  RoundCta_default
} from "/build/_shared/chunk-3ULBCPB3.js";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "/build/_shared/chunk-PFWQNT33.js";
import {
  no_image_default
} from "/build/_shared/chunk-DGIR3IGL.js";
import {
  cn
} from "/build/_shared/chunk-LOUTNZN4.js";
import {
  Svg,
  icons
} from "/build/_shared/chunk-OU5XO7XO.js";
import {
  Link2 as Link,
  useFetcher
} from "/build/_shared/chunk-RJTUOXH3.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-JKUASME7.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/components/admin/tournament/DeleteTournamentDialog.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/DeleteTournamentDialog.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/DeleteTournamentDialog.tsx"
  );
  import.meta.hot.lastModified = "1760080481935.6382";
}
function DeleteTournamentDialog({
  tournament,
  disabled
}) {
  _s();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTrigger, { disabled, title: "Delete tournament", className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Delete Tournament" }, void 0, false, {
      fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: "bg-secondary p-0 gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "p-4 flex gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "size-11 rounded-full bg-orange-100 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Svg, { src: icons.questionIcon }, void 0, false, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 40,
            columnNumber: 29
          }, this) }, void 0, false, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 39,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block", children: "Delete tournament" }, void 0, false, {
              fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
              lineNumber: 43,
              columnNumber: 29
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-normal text-base text-admin-pry", children: "Confirm the deletion of this tournament" }, void 0, false, {
              fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
              lineNumber: 44,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 42,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 38,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "border-y p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-primary mb-2 block", children: [
            "Are you sure you want to delete ",
            tournament.name,
            " tournament?"
          ] }, void 0, true, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 48,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-admin-pry", children: "This action is irreversible and will permanently delete this tournament." }, void 0, false, {
            fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
            lineNumber: 49,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 47,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "flex justify-end gap-6 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, { method: "post", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "tournamentId", value: tournament._id }, void 0, false, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 54,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogClose, { type: "submit", name: "intent", value: "delete", className: "bg-red-500 px-10 py-2 rounded-md font-bold min-w-[90px] text-white", children: "Proceed" }, void 0, false, {
          fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
          lineNumber: 55,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
        lineNumber: 52,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/DeleteTournamentDialog.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
}
_s(DeleteTournamentDialog, "2WHaGQTcUOgkXDaibwUgjUp1MBY=", false, function() {
  return [useFetcher];
});
_c = DeleteTournamentDialog;
var _c;
$RefreshReg$(_c, "DeleteTournamentDialog");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/reusables/LayeredImages.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/reusables/LayeredImages.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/reusables/LayeredImages.tsx"
  );
  import.meta.hot.lastModified = "1757765166866.876";
}
function LayeredImages({
  images,
  length = 5
}) {
  const remaining = images.length - length;
  const lastLayer = remaining > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-8 aspect-square inline-flex justify-center items-center -ml-2 rounded-full ring-2 ring-white bg-tertiary text-accent font-semibold text-sm", children: [
    "+",
    remaining
  ] }, void 0, true, {
    fileName: "app/components/reusables/LayeredImages.tsx",
    lineNumber: 27,
    columnNumber: 37
  }, this) : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
    images.slice(0, length).map((image, index) => {
      if (typeof image === "string") {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index, false, {
          fileName: "app/components/reusables/LayeredImages.tsx",
          lineNumber: 31,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: image?.image || no_image_default, alt: "people smiling", className: "w-8 aspect-square inline-block -ml-2 first:ml-0 rounded-full object-cover ring-2 ring-white" }, index, false, {
        fileName: "app/components/reusables/LayeredImages.tsx",
        lineNumber: 33,
        columnNumber: 14
      }, this);
    }),
    lastLayer
  ] }, void 0, true, {
    fileName: "app/components/reusables/LayeredImages.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
}
_c2 = LayeredImages;
var _c2;
$RefreshReg$(_c2, "LayeredImages");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/tournament/TournamentCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/components/admin/tournament/TournamentCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/components/admin/tournament/TournamentCard.tsx"
  );
  import.meta.hot.lastModified = "1760080481936.418";
}
function TournamentCard({
  tournament,
  className
}) {
  const mainComponent = /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(RoundCta_default, { icon: icons.optionsIcon, className: "border-transparent hover:border-disabled" }, void 0, false, {
    fileName: "app/components/admin/tournament/TournamentCard.tsx",
    lineNumber: 34,
    columnNumber: 25
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("aside", { className: cn("p-6 border border-disabled rounded-xl bg-white shadow overflow-hidden", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex gap-3 items-start justify-between max-xs:flex-wrap", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: tournament.image || no_image_default, alt: "children smiling", className: "w-24 aspect-square rounded-md object-cover" }, void 0, false, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 37,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "self-center grow max-xs:order-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h3", { className: "text-primary font-satoshi-black uppercase line-clamp-1", children: tournament.name }, void 0, false, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 39,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "font-medium text-xs line-clamp-2", children: tournament.description }, void 0, false, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 40,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 38,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Toggletip, { mainComponent, childContainerClass: "top-[110%] right-0 bg-tertiary p-2 border border-disabled text-xs whitespace-nowrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/admin/tournaments/${tournament.id}/edit`, className: "p-2 flex items-center gap-2 hover:bg-[#EEF0FF] rounded-lg font-satoshi-medium", children: "Edit Tournament" }, void 0, false, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 43,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteTournamentDialog, { tournament }, void 0, false, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 44,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 36,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("hr", { className: "mt-4 mb-1" }, void 0, false, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 47,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-primary text-sm font-satoshi-bold mb-3", children: [
      tournament.contests.length,
      " contests created"
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 48,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid gap-2 xs:flex justify-between items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(LayeredImages, { images: tournament.contests }, void 0, false, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: `/admin/tournaments/${tournament.id}`, className: "flex gap-2 items-center font-semibold hover:text-accent", children: [
        "View Contests ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Svg, { src: icons.arrowNextIcon }, void 0, false, {
          fileName: "app/components/admin/tournament/TournamentCard.tsx",
          lineNumber: 51,
          columnNumber: 148
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/tournament/TournamentCard.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/tournament/TournamentCard.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/tournament/TournamentCard.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_c3 = TournamentCard;
var _c3;
$RefreshReg$(_c3, "TournamentCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TournamentCard
};
//# sourceMappingURL=/build/_shared/chunk-K6ILIU5X.js.map
