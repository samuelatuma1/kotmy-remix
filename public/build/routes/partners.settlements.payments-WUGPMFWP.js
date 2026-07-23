import {
  require_session
} from "/build/_shared/chunk-EV32D4DT.js";
import {
  require_node
} from "/build/_shared/chunk-G7CHZRZX.js";
import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/partners.settlements.payments.tsx
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/partners.settlements.payments.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/partners.settlements.payments.tsx"
  );
  import.meta.hot.lastModified = "1783283183996.8086";
}
function PartnerSettlementPaymentsRedirect() {
  return null;
}
_c = PartnerSettlementPaymentsRedirect;
var _c;
$RefreshReg$(_c, "PartnerSettlementPaymentsRedirect");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  PartnerSettlementPaymentsRedirect as default
};
//# sourceMappingURL=/build/routes/partners.settlements.payments-WUGPMFWP.js.map
