import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Outlet />
      {children}
    </div>
  );
}

export default Layout;
