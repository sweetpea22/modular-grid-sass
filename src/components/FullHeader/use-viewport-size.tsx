import { useState, useEffect } from "react";

export interface IViewportSize {
  width?: number | undefined;
  height?: number | undefined;
}

export const useViewportSize = (debounceTime = 250) => {
  const [viewportSize, setViewportSize] = useState<IViewportSize>({
    width: undefined,
    height: undefined
  });

  const debounce = (fn: Function, ms: number) => {
    let timer: number | null;
    return () => {
      if (timer !== null) clearTimeout(timer);
      timer = window.setTimeout(() => {
        timer = null;
        fn();
      }, ms);
    };
  };

  useEffect(() => {
    const debouncedHandleResize = debounce(() => {
      setViewportSize({
        width: window.innerWidth, //document.documentElement.clientWidth - doesn't work
        height: window.innerHeight //document.documentElement.clientHeight - doesn't work
      });
    }, debounceTime);

    window.addEventListener("resize", debouncedHandleResize);

    debouncedHandleResize();

    return () => window.removeEventListener("resize", debouncedHandleResize);
  });

  return viewportSize;
};
