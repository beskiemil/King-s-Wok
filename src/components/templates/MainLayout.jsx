import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div>
    <main className="mx-auto flex max-w-screen-xl flex-col items-center py-12">
      <Outlet />
    </main>
  </div>
);

export default MainLayout;
