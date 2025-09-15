import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const TodoList = () => {
  const datas = [
    "Wake up at 7am and do a short morning stretch",
    "Take a refreshing bath and get ready",
    "Spend at least 30 minutes reading a book",
    "Have a healthy breakfast with fruits",
  ];

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(datas.length).fill(false)
  );

  const toggleCheck = (index: number) => {
    setCheckedItems((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-w-[500px] min-h-[500px] p-8 cursor-pointer">
      <div className="flex flex-col gap-4">
        {datas.map((d, index) => {
          const isCheck = checkedItems[index];

          return (
            <motion.div
              key={index}
              className="flex items-center gap-2 bg-[#f9fafe] p-4 rounded-xl cursor-pointer"
              onClick={() => toggleCheck(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Checkbox cercle animé */}
              <motion.div
                className="w-6 h-6 rounded-full border flex items-center justify-center"
                animate={{
                  backgroundColor: isCheck ? "#6ce0a0" : "#ffffff",
                  borderColor: isCheck ? "#6ce0a0" : "#40555f",
                  scale: isCheck ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatePresence>
                  {isCheck && (
                    <motion.div
                      key="check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={16} className="text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Label avec strikethrough animé */}
              <motion.span
                className="relative text-base"
                animate={{ color: isCheck ? "#9ca3af" : "#111827" }}
                transition={{ duration: 0.3 }}
              >
                {d}
                {/* Strikethrough progressif */}
                <motion.span
                  className="absolute left-0 top-1/2 h-[2px] bg-red-300"
                  initial={{ width: 0 }}
                  animate={{ width: isCheck ? "100%" : 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
