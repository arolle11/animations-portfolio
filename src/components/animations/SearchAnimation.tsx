import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const SearchAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex max-md:flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1]  text-white gap-8 p-8 rounded-md">
      <AnimatePresence>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-black p-6 rounded-3xl flex items-center justify-center"
          initial={{
            x: 0,
            width: 72,
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
          animate={{
            x: isHovered ? -40 : 0,
            width: isHovered ? 250 : 72,
            justifyContent: isHovered ? "space-between" : "center",
            backgroundColor: isHovered ? "#ffffff" : "#000000",
          }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center gap-2">
            <Search size={24} color="white" />
            {isHovered && <span className="text-white ml-2">Rechercher</span>}
          </div>

          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <X size={24} color="white" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SearchAnimation;
