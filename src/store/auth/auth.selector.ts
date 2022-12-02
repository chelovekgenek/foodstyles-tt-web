import { RootState } from "../app";

export const getStatus = (state: RootState) => state.auth.status;
