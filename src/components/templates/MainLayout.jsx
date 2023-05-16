import { Outlet } from "react-router-dom";

import Footer from "components/organisms/Footer";
import Navbar from "components/organisms/Navbar";

const MainLayout = () => (
  <div>
    <Navbar />
    <main className="w-full">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
