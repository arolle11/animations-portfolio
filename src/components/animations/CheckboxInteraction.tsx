import { Check, Minus, Pencil, Trash } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function CheckboxInteraction() {
  const items = [
    "Dresses",
    "Jumpsuits",
    "Coat & jacket",
    "Beachwear",
    "Acessories",
  ];
  const [checkItem, setCheckItem] = useState<boolean[]>(
    Array(items.length).fill(false)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleCheck = (index: number) => {
    setCheckItem((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const selectedCount = checkItem.filter(Boolean).length;
  const hasSelectedItems = selectedCount > 0;

  const deleteAllSelected = () => {
    setCheckItem(Array(items.length).fill(false));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Fermer le dropdown quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f3f4f6] gap-8 p-8 rounded-md">
      <div className="flex gap-2 items-center border-b border-b-gray-400 pb-4 w-full">
        <motion.button
          className={`rounded-sm border w-6 h-6 flex items-center justify-center transition-colors ${
            hasSelectedItems
              ? "border-primary bg-blue-50 hover:bg-blue-100"
              : "border-gray-400 bg-white"
          }`}
          onClick={deleteAllSelected}
          disabled={!hasSelectedItems}
          whileHover={hasSelectedItems ? { scale: 1.1 } : {}}
          whileTap={hasSelectedItems ? { scale: 0.95 } : {}}
        >
          <AnimatePresence>
            {hasSelectedItems && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Minus size={14} className="text-primary" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>

        <div className="relative">
          <motion.div
            className="flex items-center"
            layout
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.4,
            }}
          >
            {hasSelectedItems ? (
              <button
                onClick={toggleDropdown}
                className="text-primary bg-transparent focus:outline-none font-medium text-base px-5 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                {selectedCount} Selected{" "}
                <motion.svg
                  className="w-2.5 h-2.5 ms-3"
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </motion.svg>
              </button>
            ) : (
              <motion.p
                className="font-bold text-base"
                layout
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.4,
                }}
              >
                Collections
              </motion.p>
            )}
          </motion.div>

          {/* Bordure bleue animée */}
          <motion.div
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{
              width: hasSelectedItems ? "100%" : "0%",
              opacity: hasSelectedItems ? 1 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          />

          {/* Dropdown avec animation progressive */}
          <AnimatePresence>
            {isDropdownOpen && hasSelectedItems && (
              <motion.div
                ref={dropdownRef}
                initial={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  scale: 0.95,
                  height: 0,
                }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 top-full mt-1 overflow-hidden"
              >
                <motion.ul
                  className="py-2 text-sm text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.2 }}
                  >
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        console.log("Enable selected");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Enable selected
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.2 }}
                  >
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                      onClick={() => {
                        console.log("Disable selected");
                        setIsDropdownOpen(false);
                      }}
                    >
                      Disable selected
                    </button>
                  </motion.li>
                  <motion.li
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                  >
                    <button
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 transition-colors"
                      onClick={() => {
                        deleteAllSelected();
                        setIsDropdownOpen(false);
                      }}
                    >
                      Delete collection
                    </button>
                  </motion.li>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {items.map((item, index) => {
        const isCheck = checkItem[index];
        return (
          <div
            key={index}
            className="flex items-center justify-between border-b border-b-gray-400 pb-4 w-full"
            onClick={() => toggleCheck(index)}
          >
            <div className="flex gap-2">
              <motion.span
                className="flex justify-center items-center rounded-sm border border-gray-400 w-6 h-6"
                animate={{
                  backgroundColor: isCheck ? "#049ef4" : "#ffffff",
                  borderColor: isCheck ? "#049ef4" : "#40555f",
                  scale: isCheck ? 1.25 : 1,
                  borderRadius: isCheck ? "1rem" : "0.25rem",
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 20,
                  duration: 0.3,
                }}
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
              </motion.span>
              <p className="text-base">{item}</p>
            </div>
            <div className="flex gap-2">
              <Pencil size={16} color="gray" />
              <Trash size={16} color="gray" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
