import { createAsyncThunk } from "@reduxjs/toolkit";
import gqlClient, { setAuthToken } from "../../gql-client";
import { RoutePath } from "../../Router";
import * as routerFeature from "../router";
import { CREATE_USER, LOGIN } from "./auth.query";
import {
  AuthPayload,
  CreateUserPayload,
  LoginPayload,
  StorageKey,
  User,
} from "./auth.type";

export const login = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, { dispatch }): Promise<string | null> => {
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
      localStorage.setItem(StorageKey.TOKEN, data.loginUser.accessToken);
      dispatch(routerFeature.action.redirect(RoutePath.TODOS));
      setAuthToken(data.loginUser.accessToken);
      return data.loginUser.accessToken;
    }

    return null;
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (payload: CreateUserPayload, { dispatch }): Promise<void> => {
    const { errors } = await gqlClient.mutate<{ createUser: User }>({
      mutation: CREATE_USER,
      variables: payload,
    });
    if (errors) {
      throw new Error("Validation failed");
    }

    dispatch(routerFeature.action.redirect(RoutePath.LOG_IN));
  }
);

export const rehydrate = createAsyncThunk(
  "auth/rehydrate",
  async (_, { dispatch }): Promise<string | null> => {
    const token = localStorage.getItem(StorageKey.TOKEN);
    if (token) {
      setAuthToken(token);
      setTimeout(() => {
        dispatch(routerFeature.action.redirect(RoutePath.TODOS));
      }, 0);
      return token;
    }

    return null;
  }
);
