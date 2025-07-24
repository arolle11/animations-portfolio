import { motion } from "framer-motion";
import { useState } from "react";
const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#154b62] gap-8 p-8 rounded-md">
      <div className="w-[200px] h-[300px] perspective-1000 rounded-md">
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="absolute w-full h-full backface-hidden flex justify-end bg-royal-blue rounded-lg overflow-hidden">
            <div className="flex flex-col items-center justify-center vertical-rl">
              <p>CVC/CVV</p>
              <p>123</p>
            </div>
            <div className="h-full w-6 bg-black p-6 mr-6"></div>
          </div>

          <div className="absolute w-full h-full backface-hidden flex flex-col items-center justify-center rounded-lg rotate-y-180 p-4 bg-white">
            <h3>Arolle Fona</h3>
            <p>Frontend Developer</p>
            <p>follow me on: </p>
            <div className="flex gap-2"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
