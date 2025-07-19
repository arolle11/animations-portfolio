import { ArrowRight, Check, Heart, Plus } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useState } from "react";
const ButtonAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [isGlideOver, setIsGlideOver] = useState(false);
  const [isBlurLift, setIsBlurLift] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const controls = useAnimation();
  const handleHover = () => {
    controls.start({
      x: [0, -6, 0],
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    });
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="grid max:sm-grid-flow-col sm:grid-cols-3 gap-12 mt-4">
      {/* simple button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-primary text-white rounded-md"
      >
        Simple Button
      </motion.button>

      <motion.div
        className="flex justify-center items-center"
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          initial={{ width: 164, borderRadius: "1.5rem", scale: 1 }}
          animate={{
            width: isHovered ? 40 : 164,
            borderRadius: isHovered ? "50%" : "1.5rem",
            scale: isClicked ? 1.1 : 1,
          }}
          transition={{
            width: { duration: 0.2, ease: "easeInOut" },
            borderRadius: { duration: 0.2, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 500, damping: 15 },
          }}
          className="h-10 bg-[#d35ffa] text-white flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence>
            {isHovered ? (
              <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                }}
              >
                <Check size={20} />
              </motion.div>
            ) : (
              !isHovered && (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="px-2 fixed
                  "
                >
                  Simple Button
                </motion.span>
              )
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <motion.button
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        className="relative overflow-hidden px-4 py-2 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 bg-gray-100/50"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: isHovered2 ? 2 : 0 }}
          transition={{
            duration: isHovered2 ? 0.5 : 0,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[#ff5a45] rounded-full z-0"
        />
        <motion.div
          animate={{ scale: isHovered2 ? 1.2 : 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
          }}
          className="z-10"
        >
          <Heart
            size={20}
            color={isHovered2 ? "#ffffff" : "#ff5a45"}
            fill={isHovered2 ? "#ffffff" : "#ff5a45"}
          />
        </motion.div>
      </motion.button>
      {/* simple button */}

      {/* reverse button */}
      <motion.button
        onMouseEnter={() => setIsBlurLift(true)}
        onMouseLeave={() => setIsBlurLift(false)}
        className="px-4 py-2 bg-black/80 text-white rounded-full relative overflow-hidden  flex items-center justify-center"
      >
        {/* Texte Blur-Lift */}
        <motion.span
          initial={false}
          animate={{
            y: isBlurLift ? -40 : 0,
            opacity: isBlurLift ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute"
        >
          Blur-Lift
        </motion.span>

        {/* Texte Call 🤙🏼 */}
        <motion.span
          initial={false}
          animate={{
            y: isBlurLift ? 0 : 40,
            opacity: isBlurLift ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute flex items-center gap-2"
        >
          Call <span>🤙🏼</span>
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setIsGlideOver(true)}
        onMouseLeave={() => setIsGlideOver(false)}
        className="relative overflow-hidden px-6 py-2 bg-black/80 text-white rounded-full flex items-center gap-2"
      >
        <motion.span
          initial={{ x: -40, opacity: 0 }}
          animate={{
            x: isGlideOver ? 0 : -40,
            opacity: isGlideOver ? 1 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute left-4"
        >
          <ArrowRight size={20} />
        </motion.span>

        <motion.span
          initial={{ x: 0 }}
          animate={{
            x: isGlideOver ? 20 : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          Glide-Over
        </motion.span>

        <motion.span
          initial={{ x: 0, opacity: 1 }}
          animate={{
            x: isGlideOver ? 40 : 0,
            opacity: isGlideOver ? 0 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute right-4"
        >
          <ArrowRight size={20} />
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setIsReversed(true)}
        onMouseLeave={() => setIsReversed(false)}
        whileHover={{ scale: 1.1 }}
        className="px-4 py-2 bg-black/80 text-white rounded-full flex items-center justify-center gap-2"
      >
        <motion.span
          className="inline-block origin-center p-[3px] rounded-full h-4  bg-white"
          initial={{ rotate: 0 }}
          animate={{ rotate: isReversed ? 360 : 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
        ></motion.span>
        Vortex-Blur
      </motion.button>
      {/* reverse button */}

      {/* Playful button hovers */}
      <motion.button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative px-6 py-3 bg-[#362a89] rounded-full overflow-hidden text-white font-semibold"
      >
        {/* Background fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-primary rounded-full"
          initial={{ height: "0%" }}
          animate={{ height: isHover ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ zIndex: 0 }}
        />

        {/* Text with pull-down bounce */}
        <motion.span
          className="relative z-10 block"
          animate={isHover ? { y: [0, 0, 8, 0, 0] } : { y: [0, 0, -8, 0, 0] }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          Button
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setIsHover3(true)}
        onMouseLeave={() => setIsHover3(false)}
        className="relative px-6 py-3 bg-[#362a89] rounded-full overflow-hidden text-white font-semibold"
      >
        {/* Background fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-gray-100/50 rounded-full"
          initial={{ height: "0%" }}
          animate={{ height: isHover3 ? "100%" : "0%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{ zIndex: 0 }}
        />

        {/* Text with pull-down bounce */}
        <motion.span
          className="relative z-10 block"
          animate={isHover3 ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          Playful hover
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setIsHover2(true)}
        onMouseLeave={() => setIsHover2(false)}
        className="px-4 py-2 bg-[#362a89] text-white rounded-full"
      >
        <motion.span
          className="relative z-10 block"
          animate={isHover2 ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          Simple
        </motion.span>
      </motion.button>
      {/* Playful button hovers */}

      {/* Follow Buttons */}
      <motion.button
        onMouseEnter={() => {
          setShowIcon(true);
          handleHover();
        }}
        onMouseLeave={() => {
          setShowIcon(false);
          handleHover();
        }}
        className="px-4 py-2 bg-[#2b2f44] text-white rounded-full"
      >
        <motion.span
          animate={controls}
          className="flex items-center justify-center gap-2"
        >
          Follow {showIcon && <Plus size={20} />}
        </motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#2b2f44] text-white rounded-full ">
        <motion.span>Follow</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#2b2f44] text-white rounded-full ">
        <motion.span>Follow</motion.span>
      </motion.button>
      {/* Follow Buttons */}

      {/* Add to Cart */}
      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span className="flex items-center justify-center gap-2">
          Add to Cart <Plus size={20} />
        </motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span>Add to Cart</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span>Add to Cart</motion.span>
      </motion.button>
      {/* Add to Cart */}
    </div>
  );
};
export default ButtonAnimation;
