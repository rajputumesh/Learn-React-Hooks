import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const routes = [
    {
      key: 1,
      path: "/",
      component: <Home />,
    },
    {
      key: 1,
      path: "about",
      component: <About />,
    },
    {
      key: 1,
      path: "*",
      component: <NotFound />,
    },
    {
      key: 1,
      path: "*",
      component: <NotFound />,
    },
  ];