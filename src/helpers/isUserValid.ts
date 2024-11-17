import { User } from "./example";

export const isUserValid = (user?: User): boolean => {
  if (!user) {
    return false;
  }

  const { type, age } = user;

  return type === "regular" && age > 18;
};
