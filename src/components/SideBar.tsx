import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  const closeSideBar = () => setIsOpen(false);

  const beginners_animations = [
    { name: "ButtonAnimation", title: "Button Animations" },
    { name: "HamburgerMenus", title: "Hamburger Menus" },
    { name: "CardFlip", title: "Card Flip animation" },
    { name: "SocialShare", title: "Social Share" },
    { name: "SearchAnimation", title: "Search Animation" },
    { name: "SwipeCard", title: "Swipe card" },
  ];
  return (
    <div className="bg-white relative  h-full">
      <button
        className="md:hidden flex justify-end w-full p-2"
        onClick={toggleSideBar}
      >
        <Menu />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0006] opacity-30 z-40 md:hidden"
          onClick={closeSideBar}
        ></div>
      )}
      <nav
        className={`${
          isOpen ? "max-md:translate-x-0" : "max-md:translate-x-full"
        } 
          fixed md:static 
          top-0 right-0 max-md:w-2/3 w-80 h-full 
          bg-red-500 z-50 max-md:shadow-lg pt-8 transition-transform delay-75 duration-300 ease-linear`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <h1 className="text-primary border-b-2 border-[#e8e8e8] px-4 pb-8 text-lg font-monospace">
          Animations Portfolio
        </h1> */}
        <div className="px-4 pt-8">
          <ul className="text-secondary text-lg pt-4 space-y-2 cursor-pointer">
            {beginners_animations.map((animation) => (
              <li key={animation.name}>
                <Link key={animation.name} to={`/animation/${animation.name}`}>
                  {animation.title}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default SideBar;
