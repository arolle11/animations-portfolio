import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <div className="max-md:flex-col flex w-screen h-screen bg-[#f4f4f4] relative">
      <div className="hidden md:block w-72">
        <SideBar />
      </div>
      <div className="md:hidden">
        <SideBar />
      </div>
      <main className="flex-1 relative">
        <div className="absolute inset-4 md:inset-6 bg-white rounded-2xl p-6 shadow-md overflow-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default Layout;
