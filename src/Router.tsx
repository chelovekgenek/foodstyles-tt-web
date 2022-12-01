import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./scenes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    index: true,
  },
]);

export const Router = (): JSX.Element => {
  return <RouterProvider router={router} />;
};
