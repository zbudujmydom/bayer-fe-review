import { useEffect, useState } from "react";

export const useOnInteraction = (): boolean => {
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (interacted) {
      return;
    }

    const listener = (): void => {
      setInteracted(true);
    };

    window.addEventListener("mousemove", listener);
    window.addEventListener("touchstart", listener);

    return () => {
      window.removeEventListener("mousemove", listener);
      window.removeEventListener("touchstart", listener);
    };
  }, [interacted]);

  return interacted;
};
