import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/authContext.jsx";
import { RouterProvider } from "react-router-dom"; // Corrected import
import router from "./router.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        {" "}
        {/* Ensure 'router' is valid */}
        <App />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
