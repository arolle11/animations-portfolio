import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
const ButtonAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="grid max:sm-grid-flow-col sm:grid-cols-4 gap-8">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-primary text-white rounded-full"
      >
        Hover and Click Me
      </motion.button>
      <motion.button
        drag
        whileDrag={{ scale: 1.2 }}
        className="px-4 py-2 bg-green-400 text-white rounded-full"
      >
        Hover and Click Me
      </motion.button>
      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{ duration: 1 }}
        className="relative overflow-hidden px-4 py-2 border border-purple-400 rounded-full text-purple-400 group"
      >
        <span
          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 -translate-x-full group-hover:-translate-x-0 transition-transform duration-500 ease-in-out"
          aria-hidden="true"
        />

        <span className="relative flex items-center justify-center transition-colors duration-300 group-hover:text-white">
          {isHovered ? (
            <motion.div
              animate={{
                x: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <ArrowRight size={20} />
            </motion.div>
          ) : (
            "Hover and Click Me"
          )}
        </span>
      </motion.button>

      <motion.button
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative overflow-hidden px-6 py-3 border border-black rounded-full text-black bg-white group"
      >
        <motion.span
          initial={{ scale: 0, borderRadius: "50%", x: "50%", y: "50%" }}
          animate={
            isHovered
              ? { scale: 3, borderRadius: "0.75rem" }
              : { scale: 0, borderRadius: "50%", x: "50%", y: "50%" }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full bg-gradient-to-r from-black to-black"
        />

        <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
          {isHovered ? (
            <motion.div
              animate={{
                x: [0, -5, 0, 5, 0],
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              Hover and Click Me
            </motion.div>
          ) : (
            "Hover and Click Me"
          )}
        </span>
      </motion.button>
      {/* <motion.button
        whileHover={{ backgroundColor: "#4caf50" }}
        className="px-4 py-2 bg-[#535afa] text-white rounded-full"
      >
        <p className="flex items-center justify-center gap-2">
          <span className="hover:rotate-60 ">
            <Send size={20} />
          </span>{" "}
          Hover Me
        </p>
      </motion.button> */}
    </div>
  );
};
export default ButtonAnimation;
