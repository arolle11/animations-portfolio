import { motion } from "motion/react";
import { useState } from "react";

const TabSwitcher = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const items = ["Movies", "Series", "Games"];

  return (
    <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-secondary gap-8 p-8 rounded-md">
      <motion.div className="flex items-center gap-2 md:gap-8 bg-white shadow-md shadow-gray-300 rounded-xl">
        {items.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative flex flex-col items-center cursor-pointer px-4 md:px-8 py-6 overflow-hidden"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-xs md:text-lg font-medium z-10">{item}</span>

            {/* wrapper pour la barre teal */}
            <div className="absolute bottom-[3px] left-0 w-full flex justify-center overflow-visible">
              <motion.span
                className="h-2 w-12 md:w-16 rounded-t-full bg-teal-400"
                initial={{ opacity: 0, y: "100%" }}
                animate={
                  hoveredIndex === index
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: "100%" }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default TabSwitcher;
