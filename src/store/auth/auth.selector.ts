import { RootState } from "../app";

export const getStatus = (state: RootState) => state.auth.status;

export const getAuthenticated = (state: RootState) => state.auth.authenticated;
