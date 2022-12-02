import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.feature";
import todoReducer from "./todo/todo.feature";
import routerReducer from "./router/router.feature";

export const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer,
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
