"use client";

import { useLayoutEffect, useState } from "react";

export default function useWindowSize() {
  const [size, setSize] = useState({ innerWidth: 0, innerHeight: 0 });

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        innerWidth: window.innerWidth,
        innerHeight: window.innerHeight,
      });
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);
  return size;
}
