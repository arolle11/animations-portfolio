// import { Link } from "react-router-dom";

const Home = () => {
  // const animations = [
  //   { name: "ButtonAnimation", title: "Button Animation" },
  //   { name: "HamburgerMenus", title: "Hamburger Menus" },
  // ];
  return (
    <div className="grid max:md-grid-flow-col md:grid-cols-4 h-screen min-h-screen bg-white overflow-scroll pb-10">
      {/* {animations.map((animation) => (
        <Link key={animation.name} to={`/animation/${animation.name}`}>
          <div className="flex flex-col items-center justify-center p-4 m-2  hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-semibold text-primary">
              {animation.title}
            </h2>
            <p className="text-secondary">Click to view</p>
          </div>
        </Link>
      ))} */}
    </div>
  );
};

export default Home;
