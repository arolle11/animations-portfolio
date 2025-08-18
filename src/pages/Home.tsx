import { ChevronRight } from "lucide-react";
const Home = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <h1 className="text-4xl text-center">Explore Animations with Bold</h1>
      <div className="max-sm:flex-col flex pt-8 gap-4 justify-center">
        <span className="rounded-xl border border-gray-400 px-4">Lorem</span>
        <span className="rounded-xl border border-gray-400 px-4">Lorem</span>
        <span className="rounded-xl border border-gray-400 px-4">Lorem</span>
        <span className="rounded-xl border border-gray-400 px-4">Lorem</span>
        <span className="rounded-xl border border-gray-400 px-4">Lorem</span>
      </div>
      <div>
        <div className="w-full flex justify-between items-center pt-16">
          <p>
            <h1>lorem ipsum</h1>{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </p>
          <p className="flex items-center gap-2">
            Browse All <ChevronRight size={16} />
          </p>
        </div>
      </div>
      <div className="grid max:md-grid-flow-col md:grid-cols-4 gap-4 pt-16">
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
