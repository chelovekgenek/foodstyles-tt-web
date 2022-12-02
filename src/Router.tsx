import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SignUp } from "./scenes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
    index: true,
  },
]);

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
