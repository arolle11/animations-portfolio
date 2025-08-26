import {
  ChevronRight,
  CircleArrowUp,
  Menu,
  Search,
  Square,
  SquareChartGantt,
} from "lucide-react";

const Home = () => {
  const items = [
    { icon: <CircleArrowUp size={12} />, label: "Buttons" },
    { icon: <SquareChartGantt size={12} />, label: "Landing Pages" },
    { icon: <Search size={12} />, label: "Search Bar" },
    { icon: <Menu size={12} />, label: "Hamburger animations" },
    { icon: <Square size={12} />, label: "Cards animations" },
  ];
  return (
    <div className="flex flex-col justify-center w-full min-h-screen px-4">
      <h1 className="text-4xl text-center">Explore Animations with Bold</h1>

      {/* Responsive loop */}
      <div className="flex flex-col sm:flex-row pt-8 gap-4 justify-center items-center">
        {items.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-2 rounded-xl border border-gray-400 px-4 py-2 hover:bg-gray-100 transition-transform transform hover:scale-105 cursor-pointer"
          >
            {item.icon} {item.label}
          </span>
        ))}
      </div>

      {/* Section en bas */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-center pt-16 px-6 text-center sm:text-left gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">
            Let your interfaces speak for themselves
          </h1>
          <span className="text-gray-600">
            Every interaction is an opportunity to captivate users.
          </span>
        </div>
        <p className="flex items-center gap-2 cursor-pointer hover:underline">
          Browse All <ChevronRight size={16} />
        </p>
      </div>

      {/* animations */}
      <div className="grid max:md-grid-flow-col md:grid-cols-4 gap-4 pt-16 px-6">
        <div className=" border border-amber-200 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat
          architecto placeat quis exercitationem, cupiditate, suscipit officiis
          dicta consequuntur adipisci impedit error temporibus hic optio! Ad
          dolores expedita magnam consequatur.
        </div>
        <div className=" border border-amber-200 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat
          architecto placeat quis exercitationem, cupiditate, suscipit officiis
          dicta consequuntur adipisci impedit error temporibus hic optio! Ad
          dolores expedita magnam consequatur.
        </div>
        <div className=" border border-amber-200 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat
          architecto placeat quis exercitationem, cupiditate, suscipit officiis
          dicta consequuntur adipisci impedit error temporibus hic optio! Ad
          dolores expedita magnam consequatur.
        </div>
        <div className=" border border-amber-200 rounded-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fugiat
          architecto placeat quis exercitationem, cupiditate, suscipit officiis
          dicta consequuntur adipisci impedit error temporibus hic optio! Ad
          dolores expedita magnam consequatur.
        </div>
      </div>
    </div>
  );
};

export default Home;
