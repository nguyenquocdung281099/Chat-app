import { useEffect, useRef } from "react";

export const useClickOutSide = (handleClickOutSide: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // @ts-ignore
    document.addEventListener("click", handleClick);
  }, []);

  const handleClick = (event: { target: HTMLInputElement }) => {
    if (ref.current && !ref.current?.contains(event.target)) {
      handleClickOutSide();
    }
  };

  return {
    ref,
  };
};
