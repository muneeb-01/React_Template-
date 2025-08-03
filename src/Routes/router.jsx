import { createBrowserRouter } from "react-router-dom";
import { Home, About } from "@/Routes";
import { Layout, NoLayoutPage } from "@/components";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/no-layout",
    element: <NoLayoutPage />,
  },
]);

export default router;
