import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar2 />
      <Outlet />
      {location.pathname !== "/students" && <Footer />}
    </>
  );
};

export default MainLayout;
