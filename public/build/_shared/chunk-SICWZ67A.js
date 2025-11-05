import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";

// app/lib/dates.utils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/dates.utils.ts"
  );
  import.meta.hot.lastModified = "1757765166870.972";
}
function parseDateForInput(date = (/* @__PURE__ */ new Date()).toISOString()) {
  return date.split("T")[0];
}
function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat("en-NG", options).format(date);
}

export {
  parseDateForInput,
  formatDate
};
//# sourceMappingURL=/build/_shared/chunk-SICWZ67A.js.map
