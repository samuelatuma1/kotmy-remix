import {
  createHotContext
} from "/build/_shared/chunk-2KT7MY3L.js";

// app/lib/numbers.utils.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/lib/numbers.utils.ts"
  );
  import.meta.hot.lastModified = "1786806131007.512";
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
function toOrdinal(n) {
  const num = Math.abs(Math.trunc(n));
  const mod100 = num % 100;
  const mod10 = num % 10;
  const suffix = mod100 >= 11 && mod100 <= 13 ? "th" : ["th", "st", "nd", "rd"][mod10] || "th";
  return `${n}${suffix}`;
}

export {
  numberSlang,
  numberFormatter,
  toOrdinal
};
//# sourceMappingURL=/build/_shared/chunk-O2MGZLIP.js.map
