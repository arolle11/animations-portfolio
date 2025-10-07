import {
  ArrowRight,
  Check,
  Cherry,
  Heart,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "motion/react";
import { useState } from "react";
import facebook from "../../assets/images/facebook.png";
import pinterest from "../../assets/images/pinterest.png";
import twitter from "../../assets/images/twitter.png";

type SocialPlatform = "twitter" | "facebook" | "pinterest";

const ButtonAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isReversed, setIsReversed] = useState(false);
  const [isGlideOver, setIsGlideOver] = useState(false);
  const [isBlurLift, setIsBlurLift] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [selected, setSelected] = useState<SocialPlatform | null>(null);
  const controls = useAnimation();
  const [iconPos, setIconPos] = useState({ x: 0 });
  const [isClicked2, setIsClicked2] = useState(false);
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const socialColors: Record<SocialPlatform, string> = {
    twitter: "#189cf1",
    facebook: "#0792f4",
    pinterest: "#be0519",
  };
  const iconList: { name: SocialPlatform; src: string }[] = [
    { name: "twitter", src: twitter },
    { name: "facebook", src: facebook },
    { name: "pinterest", src: pinterest },
  ];

  const handleSelect = (
    platform: SocialPlatform,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const buttonRect = e.currentTarget.parentElement?.getBoundingClientRect();
    const iconRect = e.currentTarget.getBoundingClientRect();

    if (buttonRect) {
      const offsetX =
        iconRect.left +
        iconRect.width / 2 -
        (buttonRect.left + buttonRect.width / 2);
      setIconPos({ x: offsetX });
      setSelected(platform);
    }
  };

  const otherContainerVariants = {
    visible: {
      transition: { staggerChildren: 0.2 },
    },
    hidden: {},
  };

  const iconVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };
  const handleClick2 = () => {
    setIsClicked2(true);
    setTimeout(() => setIsClicked2(false), 2000);
  };
  return (
    <div className="grid max:sm-grid-flow-col sm:grid-cols-3 gap-12 mt-4">
      {/* simple button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-primary text-white rounded-full w-44 h-12"
      >
        Hover Button
      </motion.button>

      <motion.div
        className="flex justify-center items-center"
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          initial={{ width: 175, borderRadius: "1.5rem", scale: 1 }}
          animate={{
            width: isHovered ? 45 : 175,
            borderRadius: isHovered ? "50%" : "1.5rem",
            scale: isClicked ? 1.1 : 1,
          }}
          transition={{
            width: { duration: 0.2, ease: "easeInOut" },
            borderRadius: { duration: 0.2, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 500, damping: 15 },
          }}
          className="h-12 bg-primary text-white flex items-center justify-center overflow-hidden"
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
                  className="px-2
                  "
                >
                  Click button
                </motion.span>
              )
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <motion.button
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        className="relative overflow-hidden px-4 py-2 rounded-full flex items-center justify-center shadow-md transition-colors duration-300 bg-gray-100/50 w-44 h-12"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: isHovered2 ? 2 : 0 }}
          transition={{
            duration: isHovered2 ? 0.5 : 0,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-red-500 rounded-full z-0"
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
            color={isHovered2 ? "#ffffff" : "red"}
            fill={isHovered2 ? "#ffffff" : "red"}
          />
        </motion.div>
      </motion.button>
      {/* simple button */}

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
        className="px-4 py-2 bg-[#2b2f44] text-white rounded-full w-44 h-12"
      >
        <motion.span
          animate={controls}
          className="flex items-center justify-center gap-2"
        >
          Follow {showIcon && <Plus size={20} />}
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setShowSocial(true)}
        onMouseLeave={() => setShowSocial(false)}
        initial={{ background: "#2b2f44", color: "white" }}
        whileHover={{
          background: "#f9f9fa",
          color: "#2b2f44",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        }}
        className="relative px-6 py-4 bg-[#2b2f44] text-white rounded-full overflow-hidden w-44 h-12"
      >
        {/* Texte Follow centré */}
        <AnimatePresence>
          {!showSocial && (
            <motion.span
              className="absolute inset-0 flex justify-center items-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              Follow
            </motion.span>
          )}
        </AnimatePresence>

        {/* Icônes + followers */}
        {showSocial && (
          <motion.div
            className="absolute inset-0 flex justify-center items-center gap-6"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex flex-col items-center gap-1"
              variants={containerVariants}
            >
              <motion.span variants={itemVariants}>
                <img src={twitter} alt="twitter" className="w-3 h-3" />
              </motion.span>
              <motion.span variants={itemVariants} className="text-xs">
                17k
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-1"
              variants={containerVariants}
            >
              <motion.span variants={itemVariants}>
                <img src={facebook} alt="facebook" className="w-3 h-3" />
              </motion.span>
              <motion.span variants={itemVariants} className="text-xs">
                25k
              </motion.span>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-1"
              variants={containerVariants}
            >
              <motion.span variants={itemVariants}>
                <img src={pinterest} alt="pinterest" className="w-3 h-3" />
              </motion.span>
              <motion.span variants={itemVariants} className="text-xs">
                03k
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </motion.button>

      <motion.button
        onMouseEnter={() => setShowIcons(true)}
        onMouseLeave={() => {
          setShowIcons(false);
          setSelected(null);
          setIconPos({ x: 0 });
        }}
        animate={{
          backgroundColor: selected ? socialColors[selected] : "#2b2f44",
        }}
        transition={{ duration: 0.4 }}
        className="relative px-6 py-3 text-white rounded-full overflow-hidden w-44 h-12 flex justify-center items-center"
      >
        {/* Texte Follow */}
        <AnimatePresence>
          {!showIcons && !selected && (
            <motion.span
              key="follow-text"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              Follow
            </motion.span>
          )}
        </AnimatePresence>

        {/* Icônes */}
        <AnimatePresence>
          {showIcons && !selected && (
            <motion.div
              key="icons"
              className="flex gap-5"
              variants={otherContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {iconList.map((icon) => (
                <motion.div
                  key={icon.name}
                  variants={iconVariants}
                  className="relative cursor-pointer"
                  onClick={(e) => handleSelect(icon.name, e)}
                >
                  <img src={icon.src} alt={icon.name} className="w-5 h-5" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Icône se déplaçant vers le centre puis remplacée par Check */}
          {selected && (
            <motion.div
              key="center-icon"
              initial={{ x: iconPos.x, scale: 1, opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute"
            >
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 0, 1.2, 1] }}
                transition={{
                  duration: 0.6,
                  times: [0, 0.3, 0.7, 1],
                  ease: "easeOut",
                }}
                className="flex items-center justify-center"
              >
                <Check size={24} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      {/* Follow Buttons */}

      {/* reverse button */}
      <motion.button
        onMouseEnter={() => setIsBlurLift(true)}
        onMouseLeave={() => setIsBlurLift(false)}
        className="px-4 py-2 bg-black/80 text-white rounded-full relative overflow-hidden  flex items-center justify-center w-44 h-12"
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
          Lift
        </motion.span>

        {/* Texte Call */}
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
        className="relative overflow-hidden px-6 py-2 bg-black/80 text-white rounded-full flex items-center gap-2 w-44 h-12"
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
        className="px-4 py-2 bg-black/80 text-white rounded-full flex items-center justify-center gap-2 w-44 h-12"
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
        className="px-4 py-2 bg-[#362a89] text-white rounded-full w-44 h-12"
      >
        <motion.span
          className="relative z-10 block"
          animate={isHover ? { y: [0, 8, 0] } : { y: 0 }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
        >
          Simple
        </motion.span>
      </motion.button>

      <motion.button
        onMouseEnter={() => setIsHover3(true)}
        onMouseLeave={() => setIsHover3(false)}
        className="relative px-6 py-3 bg-[#362a89] rounded-full overflow-hidden text-white font-semibold w-44 h-12"
      >
        {/* Background fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full bg-black/80 rounded-full"
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
        onClick={handleClick2}
        className="px-4 py-2 bg-[#362a89] text-white rounded-full w-44 h-12 overflow-hidden relative"
        whileTap={!isClicked2 ? { scale: 0.95 } : {}}
      >
        <AnimatePresence mode="wait">
          {!isClicked2 ? (
            // État initial
            <motion.span
              key="initial"
              className="flex items-center justify-center gap-2 w-full"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </motion.span>
          ) : (
            // Séquence d'animation après clic
            <>
              {/* Étape 1: Check qui tombe dans le panier (centré) */}
              <motion.div
                key="check-fall"
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="flex items-center justify-center relative"
                  initial={{ x: 0 }}
                  animate={{ x: "500%" }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <ShoppingCart size={20} />
                  <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="absolute"
                  >
                    <Cherry size={12} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* État initial qui revient après 5s (invisible pendant l'animation) */}
              <motion.span
                key="return"
                className="flex items-center justify-center gap-2 w-full absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 1 }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </motion.span>
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Playful button hovers */}
    </div>
  );
};
export default ButtonAnimation;
