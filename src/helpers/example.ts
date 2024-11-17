export interface UserAddress {
  city: string;
  street?: string;
}

type UserType = "regular" | "agency" | "developer";

export interface User {
  name: string;
  age: number;
  email?: string;
  address: UserAddress;
  type: UserType;
  skills: string[]; // Array<string>
  addresses?: UserAddress[];
}

export type SimpleUser = Pick<User, "name" | "age" | "type">;

export interface Reposene {
  data: {
    currentUser: User;
    totalUsers: number;
  };
}
