import { useEffect } from "react";
import { UpdatedNavigator } from "../@types/Navigator";

type PageType = "home" | "article";

export const useSendPageViewEvent = (page: PageType): void => {
  useEffect(() => {
    const event = {
      page: page,
      screenWidth: window.innerWidth,
      connection: (window.navigator as UpdatedNavigator).connection?.effectiveType,
    };
    console.log(event);
  }, [page]);
};
