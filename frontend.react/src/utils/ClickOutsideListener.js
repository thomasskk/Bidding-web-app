import { useEffect, useState } from "react";

export const ClickOutsideListener = (ref, initialState,callback=()=>{}) => {

  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {

    const onClick = e => {
      if (ref.current !== null && !ref.current.contains(e.target)) {
        callback()
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [callback, isActive, ref]);

  return [isActive, setIsActive];
};
 