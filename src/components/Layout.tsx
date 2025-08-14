import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <div className="max-md:flex-col flex w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;
