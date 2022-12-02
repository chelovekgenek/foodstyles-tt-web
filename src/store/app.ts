import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.feature";
import todoReducer from "./todo/todo.feature";
import routerReducer from "./router/router.feature";
import * as authFeature from "./auth";

export const store = configureStore({
  reducer: {
    router: routerReducer,
    auth: authReducer,
    todo: todoReducer,
  },
});

store.dispatch(authFeature.action.rehydrate());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
