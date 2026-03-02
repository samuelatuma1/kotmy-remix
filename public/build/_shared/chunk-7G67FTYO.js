import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";

// app/lib/numbers.utils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/numbers.utils.ts"
  );
  import.meta.hot.lastModified = "1757765166871.147";
}
function numberSlang(value) {
  if (value >= 1e9)
    return `${value / 1e9}b`;
  else if (value >= 1e6)
    return `${value / 1e6}m`;
  else if (value >= 1e3)
    return `${value / 1e3}k`;
  else
    return value;
}
function numberFormatter(number, options = {}) {
  return new Intl.NumberFormat("en-NG", options).format(number);
}

export {
  numberSlang,
  numberFormatter
};
//# sourceMappingURL=/build/_shared/chunk-7G67FTYO.js.map
