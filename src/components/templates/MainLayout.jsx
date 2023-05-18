import { Outlet } from "react-router-dom";

import Footer from "components/organisms/Footer";
import Navbar from "components/organisms/Navbar";

const MainLayout = () => (
  <div>
    <Navbar />
    <main className="mb-20 w-full">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
