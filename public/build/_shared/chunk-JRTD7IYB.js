import {
  require_react
} from "/build/_shared/chunk-TVZC3ZTX.js";
import {
  createHotContext
} from "/build/_shared/chunk-JAFVEBEK.js";
import {
  __toESM
} from "/build/_shared/chunk-RODUX5XG.js";

// app/hooks/useFilePreview.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/hooks/useFilePreview.ts"
  );
  import.meta.hot.lastModified = "1757765166868.7185";
}
function useFilePreview(fileList) {
  const [filePreview, setFilePreview] = (0, import_react.useState)(null);
  const fileName = (0, import_react.useRef)("");
  (0, import_react.useEffect)(() => {
    if (fileList && fileList[0]) {
      fileName.current = fileList[0].name;
      const newUrl = URL.createObjectURL(fileList[0]);
      if (newUrl !== filePreview)
        setFilePreview(newUrl);
    }
  }, [fileList]);
  function clearFilePreview() {
    setFilePreview(null);
    fileName.current = "";
  }
  return { filePreview, clearFilePreview, fileName: fileName.current };
}

export {
  useFilePreview
};
//# sourceMappingURL=/build/_shared/chunk-JRTD7IYB.js.map
