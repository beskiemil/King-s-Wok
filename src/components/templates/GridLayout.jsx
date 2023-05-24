import { Outlet } from "react-router-dom";

const GridLayout = () => (
  <div className="mt-20 grid w-full grid-cols-5">
    <Outlet />
  </div>
);

export default GridLayout;
