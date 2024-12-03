import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import App from "./App";
import Login from "./pages/login";
import Signup from "./pages/signup";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default router;
