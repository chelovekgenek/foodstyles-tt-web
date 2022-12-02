import { RootState } from "../app";

export const getRedirectTo = (state: RootState) => state.router.redirectTo;
