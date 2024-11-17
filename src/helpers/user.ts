import { SimpleUser, User } from "./example";

const user: User = {
  name: "Tomek",
  age: 40,
  type: "regular",
  address: {
    city: "Warsaw",
    street: "Poznanska",
  },
  skills: ["php"],
  addresses: [{ city: "x" }, { city: "y", street: "xxx" }],
};

const simpleUser: SimpleUser = {
  name: "Adam",
  age: 50,
  type: "regular",
};
