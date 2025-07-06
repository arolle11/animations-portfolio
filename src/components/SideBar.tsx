import { useState } from "react";
import { Menu } from "lucide-react";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const closeSideBar = () => setIsOpen(false);
  return (
    <div className="bg-white relative ">
      <button
        className="md:hidden flex justify-end w-full p-2"
        onClick={toggleSideBar}
      >
        <Menu />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0006] backdrop-blur-[2px] z-40"
          onClick={closeSideBar}
        ></div>
      )}
      <nav
        className={`${isOpen ? "block" : "hidden "} 
          md:block 
          fixed md:static 
          top-0 right-0 w-2/3 max-w-xs h-full 
          bg-white shadow-xs z-50 px-4 pt-8`}
        onClick={(e) => e.stopPropagation()}
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};
export default SideBar;
