import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";

// app/lib/dates.utils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/dates.utils.ts"
  );
  import.meta.hot.lastModified = "1763317422637.2478";
}
function parseDateForInput(date = (/* @__PURE__ */ new Date()).toISOString()) {
  let d = date.split("T")[0];
  return d;
}
function parseDateTimeForInput(_date = (/* @__PURE__ */ new Date()).toISOString()) {
  let date = new Date(_date);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
function formatDate(date, options = {}) {
  return new Intl.DateTimeFormat("en-NG", options).format(date);
}

export {
  parseDateForInput,
  parseDateTimeForInput,
  formatDate
};
//# sourceMappingURL=/build/_shared/chunk-577Q6RJD.js.map
