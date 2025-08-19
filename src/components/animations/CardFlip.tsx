import { motion } from "motion/react";
import { useState } from "react";
const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardColor, setCardColor] = useState("#5b7e9e");
  const [selectedColor, setSelectedColor] = useState("#5b7e9e");
  const colors = [
    { name: "tomato", value: "#ff6347" },
    { name: "green", value: "#56a37d" },
    { name: "blue", value: "#5b7e9e" },
    { name: "pink", value: "#cb9e9c" },
  ];
  const handleColorChange = (colorValue: string) => {
    setCardColor(colorValue);
    setSelectedColor(colorValue);
  };
  return (
    <div className="flex flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] gap-8 p-8 rounded-md">
      <div className="w-[200px] h-[300px] perspective-1000 rounded-lg">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div
            className="absolute w-full h-full backface-hidden flex justify-end rounded-lg overflow-hidden"
            style={{ backgroundColor: cardColor }}
          >
            <div className="flex flex-col flex-1 vertical-rl items-end justify-end p-6">
              <p className="text-white/50">CVC/CVV</p>
              <p className="text-white">123</p>
            </div>
            <div className="h-full w-6 bg-black p-5 mr-6"></div>
          </div>

          <div
            className="absolute w-full h-full backface-hidden flex flex-col rounded-lg rotate-y-180 p-6 text-white"
            style={{ backgroundColor: cardColor }}
          >
            <div className="vertical-rl-2 h-full flex flex-col justify-between">
              <p className="flex justify-between h-full">
                <span className="text-xl font-bold">Visa</span>
                <span className="border border-white px-[2px] text-xs rounded-sm flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    className="rotate-90"
                    fill="white"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Pay
                </span>
              </p>
              <p className="flex justify-between h-full font-bold">
                <span>1234</span>
                <span>5678</span>
                <span>9012</span>
                <span>3456</span>
              </p>
              <div className="flex justify-between h-full">
                <p className="flex flex-col">
                  <span className="text-white/50">Card Holder</span>
                  <span className="font-bold">Mr Card Holder</span>
                </p>
                <p className="flex flex-col">
                  <span className="text-white/50">Expires</span>
                  <span className="text-end font-bold">00/00</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex gap-2 mt-4">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`rounded-full w-8 h-8 hover:border-2 hover:border-white transition-all ${
              selectedColor === color.value ? "border-2 border-white" : ""
            }`}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorChange(color.value)}
            aria-label={`Change to ${color.name} color`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardFlip;
