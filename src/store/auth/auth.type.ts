export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthPayload {
  accessToken: string;
}

export type CreateUserPayload = Pick<User, "name" | "email"> & {
  password: string;
};

export type LoginPayload = Pick<CreateUserPayload, "email" | "password">;
