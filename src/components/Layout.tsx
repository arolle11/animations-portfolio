import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
const Layout = () => {
  return (
    <div className="max-md:flex-col flex w-screen h-screen overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <div className="flex flex-col">
          <h1 className="bg-red-500">ma nav</h1>
          <div className="bg-red-500 overflow-scroll p-6">
            <main className="border-2 border-amber-500 p-4 bg-white rounded-lg">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
