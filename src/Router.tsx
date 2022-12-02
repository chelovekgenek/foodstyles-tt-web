import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LogIn, SignUp } from "./scenes";

export enum RoutePath {
  LOG_IN = "/log-in",
  SIGN_UP = "/sign-up",
}

const router = createBrowserRouter([
  {
    path: RoutePath.LOG_IN,
    element: <LogIn />,
    index: true,
  },
  {
    path: RoutePath.SIGN_UP,
    element: <SignUp />,
    index: true,
  },
]);

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
