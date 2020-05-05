import React from "react";
import { throttle } from "../utils/timer";

export const useScrollSpy = (ids: string[]): string => {
  const [section, setSection] = React.useState<string>("");

  const spyScroll = React.useCallback(
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

  React.useEffect(() => {
    window.addEventListener("scroll", spyScroll);
    return () => {
      window.removeEventListener("scroll", spyScroll);
    };
  }, []);

  return section;
};
