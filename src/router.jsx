import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import App from "./App";
import Login from "./pages/login";
import Signup from "./pages/signup";
import NotFound from "./pages/pageNotFound";
import Settings from "./pages/settings";
import RequireAuth from "./components/requireAuth";

const router = createBrowserRouter([
  {
    element: <RequireAuth />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/settings",
        errorElement: <NotFound />,
        element: <Settings />,
      },
    ],
  },

  {
    path: "",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        errorElement: <NotFound />,
        element: <App />,
      },
    ],
  },
  {
    path: "login",
    errorElement: <NotFound />,
    element: <Login />,
  },
  {
    path: "signup",
    errorElement: <NotFound />,
    element: <Signup />,
  },
]);

export default router;
