import { Send, Plus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function MessagingAppInput() {
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div className="cursor-pointer flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-secondary gap-8 p-8 rounded-md">
      <motion.div
        className="flex items-center w-full border-2 border-[#c7cbd9] rounded-full px-4"
        onMouseEnter={() => setIsTyping(true)}
        onMouseLeave={() => setIsTyping(false)}
      >
        <motion.span
          className="rounded-full border-2 border-gray-500 p-1 inline-block text-gray-500"
          initial={{
            rotate: 0,
            color: "#6b7280",
            backgroundColor: "transparent",
          }}
          animate={{
            rotate: isTyping ? 45 : 0,
            color: isTyping ? "#ffffff" : "#6b7280",
            backgroundColor: isTyping ? "#6b7280" : "transparent",
            transition: { duration: 0.2, ease: "easeOut" },
          }}
        >
          <Plus size={18} />
        </motion.span>

        <div className="relative overflow-hidden flex items-center justify-between flex-grow border-l-2 ml-4 border-[#c7cbd9] h-full py-4">
          <motion.input
            type="text"
            placeholder="Type your message..."
            className="ml-4 flex-grow bg-transparent outline-none placeholder:text-gray-500"
            initial={false}
            animate={{
              y: isTyping ? 40 : 0,
              opacity: isTyping ? 0 : 1,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
          <motion.span
            initial={false}
            animate={{
              y: isTyping ? 0 : -40,
              opacity: isTyping ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute left-4"
          >
            loading...
          </motion.span>

          <motion.span
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: isTyping ? 40 : 0,
              opacity: isTyping ? 0 : 1,
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute right-4"
          >
            <Send color="gray" />
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
