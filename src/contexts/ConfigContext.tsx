import { createContext } from "react";

interface ConfigContextProps {
  env?: "stg" | "prod";
  isNewHomePageAvailable?: boolean;
}

export const ConfigContext = createContext<ConfigContextProps>({});
