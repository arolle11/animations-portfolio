import { Check } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const PlayfulChips = () => {
  const fruits = [
    "Mango",
    "Apple",
    "Bananas",
    "Pineaple",
    "Orange",
    "Stawberry",
    "Grapes",
    "Blueberry",
    "Watermelon",
    "Peach",
  ];
  const [darkMode, setDarkMode] = useState(false);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);

  const toggleSelect = (index: number) => {
    if (multiSelect) {
      if (selectedIndices.includes(index)) {
        setSelectedIndices(selectedIndices.filter((i) => i !== index));
      } else {
        setSelectedIndices([...selectedIndices, index]);
      }
    } else {
      setSelectedIndices(selectedIndices[0] === index ? [] : [index]);
    }
  };

  const clearAll = () => setSelectedIndices([]);

  return (
    <div
      className={`flex flex-col md:min-w-[500px] min-w-[300px] min-h-[500px] gap-8 p-8 rounded-md transition-all duration-300 ${
        darkMode ? "bg-[#040406] text-white" : "bg-[#f1f1f1] text-black"
      }`}
    >
      <div className="flex justify-end">
        <motion.div className="flex items-center gap-2 border border-gray-300 rounded-lg p-2">
          <label htmlFor="dark-theme">Dark Theme</label>
          <input
            type="checkbox"
            id="dark-theme"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </motion.div>
      </div>
      <div className="flex-1 flex-col items-center text-black max-w-[400px] mt-8">
        <div className="flex flex-wrap gap-2">
          {fruits.map((fruit, index) => {
            const isSelected = selectedIndices.includes(index);
            return (
              <motion.button
                key={index}
                className={`flex items-center bg-gray-[#e4e6e7] border border-[#d7d9da] rounded-full py-2 px-4 cursor-pointer gap-2 ${
                  isSelected
                    ? `${
                        darkMode
                          ? "border-[#54d69b] text-[#54d69b] bg-[#0e3720]"
                          : "border-[#03914d] text-[#03914d] bg-[#e7f0ec]"
                      }`
                    : `${
                        darkMode
                          ? "border-[#d7d9da] text-white bg-[#2e3032]"
                          : "border-[#d7d9da] text-black bg-[#e4e6e7]"
                      }`
                }`}
                onClick={() => toggleSelect(index)}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {fruit}
                {isSelected && (
                  <motion.span
                    className={`rounded-full w-4 h-4 flex justify-center items-center ${
                      darkMode ? "bg-[#54d59a]" : "bg-[#03914d] "
                    }`}
                  >
                    {" "}
                    <Check
                      size={12}
                      color={` ${darkMode ? "#0e3720" : "#e7f0ec"}`}
                    />
                  </motion.span>
                )}
              </motion.button>
            );
          })}
        </div>

        <motion.div
          className={`flex items-center gap-2 p-2 justify-center mt-8 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <label htmlFor="multi-select">Mutiple Select</label>
          <input
            type="checkbox"
            id="multi-select"
            className="mt-[1px]"
            checked={multiSelect}
            onChange={() => setMultiSelect(!multiSelect)}
          />
        </motion.div>
        <motion.div className="flex justify-center">
          <button
            className="bg-primary text-white rounded-lg px-4 py-2 mt-4"
            onClick={clearAll}
          >
            Clear All
          </button>
        </motion.div>
      </div>
    </div>
  );
};
export default PlayfulChips;
