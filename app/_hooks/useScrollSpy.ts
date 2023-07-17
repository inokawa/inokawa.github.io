import { useCallback, useEffect, useState } from "react";
import { throttle } from "../_utils/timer";

export const useScrollSpy = (ids: string[]): string => {
  const [section, setSection] = useState<string>("");

  const spyScroll = useCallback(
    throttle(() => {
      ids.some((id, i) => {
        const elem = document.getElementById(id);
        const nextElem = document.getElementById(ids[i + 1]);
        if (!elem) {
          return false;
        }
        if (
          window.scrollY > elem.offsetTop &&
          (!nextElem || window.scrollY < nextElem.offsetTop)
        ) {
          setSection(id);
          return true;
        }
      });
    }, 50),
    [ids]
  );

  useEffect(() => {
    window.addEventListener("scroll", spyScroll);
    return () => {
      window.removeEventListener("scroll", spyScroll);
    };
  }, []);

  return section;
};
