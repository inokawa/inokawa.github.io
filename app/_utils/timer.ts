export const debounce = (fn: () => void, interval: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, interval);
  };
};

export const throttle = (fn: () => void, interval: number) => {
  let lastTime = Date.now() - interval;
  return () => {
    if (lastTime + interval < Date.now()) {
      lastTime = Date.now();
      fn();
    }
  };
};
