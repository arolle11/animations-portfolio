import { FileSearch, Languages, MessageCircleMore } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const SwipeCard = () => {
  const cardData = [
    {
      id: 1,
      title: "Citation Generator",
      desc: "Instantly generate accurate citations - save time, ensure proper attribution, and elevate your research.",
      color: "#4170ef",
      icon: MessageCircleMore,
      iconBg: "#d8e2fc",
    },
    {
      id: 2,
      title: "Plagiarism checker",
      desc: "Ensure originality and integrity, detect duplicate content and maintaining academic honesty.",
      color: "#6565ae",
      icon: FileSearch,
      iconBg: "#dfe0ee",
    },
    {
      id: 3,
      title: "Translator",
      desc: "With our state-of-the-art AI Translator, connecting with people from different cultures and languages",
      color: "#31a39f",
      icon: Languages,
      iconBg: "#c7e6e7",
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
  return (
    <div className="flex items-center justify-center bg-gray-100  min-w-[500px] min-h-[500px] p-8">
      <div
        className="relative w-[400px] h-[180px]"
        style={{
          perspective: "1200px",
        }}
      >
        {stack
          .map((card, i) => {
            const isTop = i === 0;
            const Icon = card.icon;
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
                          y: -150,
                          scale: 1.05,
                          rotateX: 15,
                          z: -100,
                        }
                      : {
                          y: 0,
                          scale: 1,
                          rotateX: 0,
                          z: 0,
                        }
                    : {
                        y: i * 5,
                        scale: 1 - i * 0.015,
                      }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                onClick={isTop ? handleCardClick : undefined}
              >
                <div className="flex gap-3">
                  <div
                    className=" rounded-full flex justify-center h-1/2 p-2"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <Icon size={20} style={{ color: card.color }} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3
                      style={{ color: card.color }}
                      className="text-blue-600 font-semibold"
                    >
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-xs">{card.desc}</p>
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
export default SwipeCard;
