import { Plus, Search } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useEffect, useState } from "react";

const SearchAnimation = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const sampleData = [
    "React",
    "TypeScript",
    "JavaScript",
    "Framer Motion",
    "Tailwind CSS",
  ];
  const [filteredResults, setFilteredResults] = useState<string[]>([]);
  useEffect(() => {
    let active = true;

    const sequence = async () => {
      if (!isHovered || !active) return;

      // 1. Décalage vers la gauche
      await controls.start({
        x: -40,
        justifyContent: "center",
        width: 72,
        backgroundColor: "#000000",
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        },
      });

      if (!isHovered || !active) return;

      // 2. Agrandissement en largeur pendant qu’il est toujours décalé
      await controls.start({
        width: 350,
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        transition: {
          type: "spring",
          stiffness: 250,
          damping: 25,
          duration: 0.4,
        },
      });

      if (!isHovered || !active) return;

      // 3. Recentrer (x à 0) tout en gardant la largeur
      await controls.start({
        x: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: 0.3,
        },
      });
    };

    if (isHovered) {
      sequence();
    } else {
      setInputValue("");
      controls.start({
        x: 0,
        width: 72,
        justifyContent: "center",
        backgroundColor: "#000000",
        transition: { duration: 0.3 },
      });
    }

    return () => {
      active = false;
    };
  }, [isHovered, controls]);

  useEffect(() => {
    if (inputValue.length > 0) {
      const results = sampleData.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredResults(results);
      controls.start({
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        },
      });
    } else {
      setFilteredResults([]);
      controls.start({
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20,
          duration: 0.3,
        },
      });
    }
  }, [inputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClear = () => {
    setInputValue("");
  };
  return (
    <div className=" cursor-pointer flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-white gap-8 p-8 rounded-md">
      <AnimatePresence>
        <motion.div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="p-6 rounded-3xl flex flex-col  items-center shadow-gray-300 shadow-md relative"
          animate={controls}
          initial={{
            x: 0,
            width: 72,
            justifyContent: "center",
            backgroundColor: "#000000",
          }}
          style={{ display: "flex", overflow: "hidden" }}
        >
          <div className="flex items-center gap-2">
            <motion.span
              initial={{ color: "#ffffff" }}
              animate={{
                color: isHovered ? "#000000" : "#ffffff",
                transition: { duration: 0.3 },
              }}
            >
              <Search size={24} />
            </motion.span>

            {isHovered && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="ml-2"
              >
                <input
                  type="text"
                  placeholder="search..."
                  className="border-none outline-none text-lg placeholder-gray-400 text-black"
                  value={inputValue}
                  onChange={handleChange}
                />
              </motion.span>
            )}
            {isHovered && inputValue && (
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{
                  opacity: 1,
                  rotate: 45,
                  transition: { delay: 0.8, duration: 0.3 },
                }}
                className="ml-2"
                onClick={handleClear}
                whileTap={{
                  scale: 0.8,
                  transition: {
                    type: "spring",
                    damping: 10,
                    stiffness: 400,
                  },
                }}
              >
                <Plus size={28} color="black" />
              </motion.div>
            )}
          </div>
          <AnimatePresence>
            {inputValue.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: { duration: 0.2 },
                }}
                className="w-full overflow-y-auto"
              >
                <div className="border-t border-gray-200 pt-2">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                      <motion.div
                        key={index}
                        className=" text-gray-500 flex flex-col mt-2 gap-2"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.2, delay: index * 0.05 },
                        }}
                      >
                        {item}
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      className="p-3 text-gray-500 text-left"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      No results for "{inputValue}"
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SearchAnimation;
