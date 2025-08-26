// src/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import AboutMePage from "./pages/AboutMePage";
import AboutProjectPage from "./pages/AboutProjectPage";
import AnimationPage from "./pages/AnimationPage";
import Home from "./pages/Home";
import SettingPage from "./pages/SettingPage";
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
      {
        path: "settings",
        element: <SettingPage />,
      },
      {
        path: "aboutMe",
        element: <AboutMePage />,
      },
      {
        path: "aboutProject",
        element: <AboutProjectPage />,
      },
    ],
  },
]);
