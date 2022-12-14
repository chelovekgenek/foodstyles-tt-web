import { createSlice } from "@reduxjs/toolkit";
import { createUser, login, logout, rehydrate } from "./auth.thunk";

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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.authenticated = true;
        state.accessToken = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
      });

    builder.addCase(logout.fulfilled, (state) => {
      state.status = initialState.status;
      state.authenticated = initialState.authenticated;
      state.accessToken = initialState.accessToken;
    });

    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state) => {
        state.status = "idle";
      })
      .addCase(createUser.rejected, (state) => {
        state.status = "failed";
      });

    builder.addCase(rehydrate.fulfilled, (state, action) => {
      if (action.payload) {
        state.authenticated = true;
        state.accessToken = action.payload;
      }
    });
  },
});

// export const {} = authSlice.actions;
export {};

export default authSlice.reducer;
