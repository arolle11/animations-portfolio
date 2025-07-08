// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import AnimationPage from "./pages/AnimationPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "animation/:name",
        element: <AnimationPage />,
      },
    ],
  },
]);
