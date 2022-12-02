export interface User {
  id: string;
  name: string;
  email: string;
}

export enum StorageKey {
  TOKEN = "app_access-token",
}

export interface AuthPayload {
  accessToken: string;
}

export type CreateUserPayload = Pick<User, "name" | "email"> & {
  password: string;
};

export type LoginPayload = Pick<CreateUserPayload, "email" | "password">;
