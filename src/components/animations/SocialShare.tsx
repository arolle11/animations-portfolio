import { motion } from "motion/react";
import { useState } from "react";

const SocialShare = () => {
  const cardData = [
    {
      id: 1,
      title: "Citation Generator",
      desc: "Generate accurate citations instantly.",
    },
    {
      id: 2,
      title: "Grammar Checker",
      desc: "Fix grammar and clarity automatically.",
    },
    {
      id: 3,
      title: "Paraphraser",
      desc: "Restate ideas in better words.",
    },
  ];
  const [stack, setStack] = useState(cardData);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    await new Promise((r) => setTimeout(r, 600));

    // Reorder the stack
    const updatedStack = [...stack.slice(1), stack[0]];
    setStack(updatedStack);
    setIsAnimating(false);
  };
  // const [isClick, setIsClick] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   setIsClick(true);
  //   setTimeout(() => setIsClick(false), 200);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   setIsClick(false);
  // };
  return (
    // <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#daf9ff]  text-white gap-8 p-8 rounded-md">
    //   <motion.button
    //     onClick={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //     initial={{
    //       width: 120,
    //       borderRadius: "0.375rem",
    //       scale: 1,
    //       fontSize: "1rem",
    //       padding: "16px 32px",
    //       backgroundColor: "white",
    //     }}
    //     animate={{
    //       width: isHovered ? 48 : 120,
    //       borderRadius: isHovered ? "100%" : "0.375rem",
    //       scale: isClick ? 1.1 : 1,
    //       padding: isHovered ? "16px" : "16px 32px",
    //       backgroundColor: isHovered ? "#d6e1e3" : "white",
    //     }}
    //     className="bg-white text-[#6fc5ea] flex justify-center items-center"
    //   >
    //     {isHovered ? (
    //       <div className="flex flex-col">
    //         {/* <button className="bg-white rounded-full p-4 "></button> */}
    //         <motion.span className="text-sm">
    //           <X className="w-4 h-4" color="white" />
    //         </motion.span>
    //       </div>
    //     ) : (
    //       <motion.span className="text-sm">Share</motion.span>
    //     )}
    //   </motion.button>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div
        className="relative w-[400px] h-[180px]"
        style={{
          perspective: "1200px",
        }}
      >
        {stack
          .map((card, i) => {
            const isTop = i === 0;
            return (
              <motion.div
                key={card.id}
                className="absolute w-full p-5 bg-white rounded-2xl shadow-xl cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  zIndex: stack.length - i,
                }}
                animate={
                  isTop
                    ? isAnimating
                      ? {
                          y: -20,
                          scale: 1.05,
                          rotateX: 15,
                          z: -100,
                          opacity: 0.5,
                        }
                      : {
                          y: 0,
                          scale: 1,
                          rotateX: 0,
                          z: 0,
                          opacity: 1,
                        }
                    : {
                        y: i * 5,
                        scale: 1 - i * 0.015,
                        opacity: 1,
                      }
                }
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                onClick={isTop ? handleCardClick : undefined}
              >
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    💬
                  </div>
                  <div>
                    <h3 className="text-blue-600 font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })
          .reverse()}
      </div>
    </div>
  );
};
export default SocialShare;
