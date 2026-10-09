import { useState, useEffect, RefObject } from "react";

export function useNavHeight(ref: RefObject<HTMLElement>) {
  const [height, setHeight] = useState(72); // default fallback

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [ref]);

  return height;
}
