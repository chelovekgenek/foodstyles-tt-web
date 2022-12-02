import { createSlice } from "@reduxjs/toolkit";
import { createUser, login } from "./auth.thunk";

export type AuthState = {
  authenticated: boolean;
  accessToken: string | null;
  status: "idle" | "loading" | "failed";
};

const initialState: AuthState = {
  authenticated: false,
  accessToken: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state = {
          status: "idle",
          authenticated: true,
          accessToken: action.payload,
        };
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(createUser.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;