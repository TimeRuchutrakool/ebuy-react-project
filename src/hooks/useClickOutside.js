import { useEffect, useRef } from "react";

export default function useClickOutside(callbackFn) {
  const domNodeRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (!domNodeRef.current?.contains(e.target)) callbackFn();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [callbackFn]);

  return domNodeRef
}
