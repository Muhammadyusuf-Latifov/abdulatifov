import { lazy, memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";

import MainLoading from "../layout/MainLoading";

const Home = lazy(() => import("../features/home/page/Home"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const Program = lazy(() => import("../features/program/pages/Program"));
const About = lazy(() => import("../features/about/page/About"));

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "program",
          element: <Program />,
        },
      ],
    },
  ]);
  return <Suspense fallback={<MainLoading />}>{routes}</Suspense>;
};

export default memo(AppRoutes);
