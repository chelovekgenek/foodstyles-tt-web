import { createAsyncThunk } from "@reduxjs/toolkit";
import gqlClient, { setAuthToken } from "../../gql-client";
import { LOGIN } from "./auth.query";
import { AuthPayload, CreateUserPayload, LoginPayload } from "./auth.type";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload): Promise<string | null> => {
    const { data, errors } = await gqlClient.mutate<{ loginUser: AuthPayload }>(
      {
        mutation: LOGIN,
        variables: payload,
      }
    );
    if (errors) {
      throw new Error("Unauthorized");
    }
    if (data) {
      setAuthToken(data.loginUser.accessToken);
      return data.loginUser.accessToken;
    }

    return null;
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (payload: CreateUserPayload) => {
    // const { data } = await gqlClient.mutate({
    //   mutation: CREATE_USER,
    //   variables: payload,
    // });
    console.log("createUser", payload);
  }
);
