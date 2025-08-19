import { motion } from "motion/react";
import { useState } from "react";
const HamburgerMenus = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [activated, setActivated] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isTurned, setIsTurned] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className="flex max-md:flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] gap-8 p-8 rounded-md">
      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <motion.span
          initial={{ y: -8, opacity: 1, rotate: 0 }}
          animate={{
            y: active ? 0 : -8,
            rotate: active ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
        <motion.span
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: active ? 0 : 0,
            opacity: active ? 0 : 1,
            rotate: active ? 0 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
        <motion.span
          initial={{ y: 8, opacity: 1, rotate: 0 }}
          animate={{
            y: active ? 0 : 8,
            rotate: active ? -45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        <motion.span
          initial={{ y: -4, opacity: 1, rotate: 0 }}
          animate={{
            y: isActive ? 0 : -4,
            rotate: isActive ? 45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
        <motion.span
          initial={{ y: 4, opacity: 1, rotate: 0 }}
          animate={{
            y: isActive ? 0 : 4,
            rotate: isActive ? -45 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <motion.span
          initial={{ y: -8, opacity: 1 }}
          animate={{
            y: isOpen ? 0 : -8,
            opacity: isOpen ? 0 : 1,
            x: 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-0 h-[4px] w-4 bg-secondary rounded-[2px] -translate-y-1/2 origin-center"
        ></motion.span>

        <motion.span
          initial={{ y: 0, opacity: 1, rotate: 0, x: 0 }}
          animate={{
            y: 0,
            opacity: isOpen ? 1 : 1,
            rotate: isOpen ? 45 : 0,
            x: isOpen ? 0 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.1,
          }}
          className="absolute top-1/2 left-0 h-[4px] w-8 bg-secondary rounded-[2px] -translate-y-1/2 origin-center"
        ></motion.span>

        <motion.span
          initial={{ y: 8, opacity: 1, rotate: 0, width: 24 }}
          animate={{
            y: isOpen ? 0 : 8,
            opacity: isOpen ? 1 : 1,
            rotate: isOpen ? -45 : 0,
            x: 0,
            width: isOpen ? 32 : 24,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-0 h-[4px] w-6 bg-secondary rounded-[2px] -translate-y-1/2 origin-center"
        ></motion.span>
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setActivated(true)}
        onMouseLeave={() => setActivated(false)}
      >
        <motion.span
          initial={{ rotate: 0, x: 0, y: -8 }}
          animate={{
            rotate: activated ? 45 : 0,
            x: activated ? 8 : 0,
            y: activated ? -10 : -8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-0 h-[4px] w-4 bg-secondary rounded-[2px] -translate-y-1/2 origin-left"
        />

        <motion.span
          initial={{ y: 0, rotate: 0, x: 0 }}
          animate={{
            y: activated ? 12 : 0,
            rotate: activated ? -45 : 0,
            x: activated ? 8 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-0 h-[4px] w-8 bg-secondary rounded-[2px] -translate-y-1/2 origin-left"
        />

        <motion.span
          initial={{ rotate: 0, x: 0, y: 8, width: 24 }}
          animate={{
            rotate: activated ? 45 : 0,
            x: activated ? 20 : 0,
            y: activated ? 1 : 8,
            width: activated ? 16 : 24,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="absolute top-1/2 left-0 h-[4px] w-6 bg-secondary rounded-[2px] -translate-y-1/2 origin-left"
        />
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsOpened(true)}
        onMouseLeave={() => setIsOpened(false)}
      >
        {/* Top bar */}
        <motion.span
          initial={{ y: -8, opacity: 1, rotate: 0 }}
          animate={{
            y: isOpened ? 0 : -8, // se rapproche de la middle
            rotate: isOpened ? 45 : 0, // rotation X
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 20 },
            rotate: {
              delay: 0.15,
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />

        {/* Middle bar */}
        <motion.span
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: 0,
            opacity: isOpened ? 0 : 1, // disparaît après contact
          }}
          transition={{
            opacity: { delay: 0.15, duration: 0.2 },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />

        {/* Bottom bar */}
        <motion.span
          initial={{ y: 8, opacity: 1, rotate: 0 }}
          animate={{
            y: isOpened ? 0 : 8, // se rapproche de la middle
            rotate: isOpened ? -45 : 0, // rotation X
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 20 },
            rotate: {
              delay: 0.15,
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsTurned(true)}
        onMouseLeave={() => setIsTurned(false)}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isTurned ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <motion.span
          initial={{ y: -8, opacity: 1, rotate: 0 }}
          animate={{
            y: isTurned ? 0 : -8,
            rotate: isTurned ? 45 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
        <motion.span
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: isTurned ? 0 : 0,
            opacity: isTurned ? 0 : 1,
            rotate: isTurned ? 0 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
        <motion.span
          initial={{ y: 8, opacity: 1, rotate: 0 }}
          animate={{
            y: isTurned ? 0 : 8,
            rotate: isTurned ? -45 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: 0.5,
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        ></motion.span>
      </motion.div>

      <motion.div
        className="relative w-10 h-10"
        onMouseEnter={() => setIsRotated(true)}
        onMouseLeave={() => setIsRotated(false)}
        initial={{ rotate: 0 }}
        animate={{ rotate: isRotated ? 360 : 0 }}
        transition={{ duration: 0.15, ease: "easeInOut" }}
      >
        {/* Top bar */}
        <motion.span
          initial={{ y: -8, opacity: 1, rotate: 0 }}
          animate={{
            y: isRotated ? 0 : -8, // se rapproche de la middle
            rotate: isRotated ? 45 : 0, // rotation X
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 20 },
            rotate: {
              delay: 0.18,
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />

        {/* Middle bar */}
        <motion.span
          initial={{ y: 0, opacity: 1, rotate: 0 }}
          animate={{
            y: 0,
            opacity: isRotated ? 0 : 1, // disparaît après contact
          }}
          transition={{
            opacity: { delay: 0.15, duration: 0.2 },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />

        {/* Bottom bar */}
        <motion.span
          initial={{ y: 8, opacity: 1, rotate: 0 }}
          animate={{
            y: isRotated ? 0 : 8, // se rapproche de la middle
            rotate: isRotated ? -45 : 0, // rotation X
          }}
          transition={{
            y: { type: "spring", stiffness: 300, damping: 20 },
            rotate: {
              delay: 0.18,
              type: "spring",
              stiffness: 300,
              damping: 20,
            },
          }}
          className="absolute top-1/2 left-1/2 h-[4px] w-8 bg-secondary rounded-[2px] -translate-x-1/2 -translate-y-1/2 origin-center"
        />
      </motion.div>
    </div>
  );
};
export default HamburgerMenus;
