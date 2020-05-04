import React from "react";

export const useScrollSpy = (ids: string[]): string => {
  const [section, setSection] = React.useState<string>("");

  // TODO debounce
  const spyScroll = React.useCallback(() => {
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
  }, [ids]);

  React.useEffect(() => {
    window.addEventListener("scroll", spyScroll);
    return () => {
      window.removeEventListener("scroll", spyScroll);
    };
  }, []);

  return section;
};
