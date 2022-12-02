import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RouterState = {
  redirectTo?: string;
};

const initialState: RouterState = {
  redirectTo: undefined,
};

export const routerSlice = createSlice({
  name: "router",
  initialState,
  reducers: {
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectTo = action.payload;
    },
    reset: (state) => {
      state.redirectTo = undefined;
    },
  },
});

export const { redirect, reset } = routerSlice.actions;

export default routerSlice.reducer;
