import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function SubmitButton() {
  const [state, setState] = useState("initial"); // initial, colored, narrow, loading, success
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    if (state === "loading") {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setState("success");
            return 0;
          }
          return prev + 0.5;
        });
      }, 10);
    }
    return () => clearInterval(progressInterval);
  }, [state]);

  const handleClick = () => {
    // 1. Background devient bleu
    setState("colored");

    // 2. Après 2s, réduit la largeur et commence le chargement
    setTimeout(() => {
      setState("narrow");
      setTimeout(() => {
        setState("loading");
      }, 300);
    }, 500);

    // 3. État succès avec check
    setTimeout(() => {
      setState("success");
    }, 5000);

    // 4. Retour à l'état initial
    setTimeout(() => {
      setState("initial");
      setProgress(0);
    }, 5000);
  };

  return (
    <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-white gap-8 p-8 rounded-md cursor-pointer">
      <div className="relative" style={{ padding: "4px" }}>
        {state === "loading" && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(#31c3f8 ${progress}%, #b4e2f5 ${progress}%, #b4e2f5 100%)`,
              padding: "4px",
            }}
          />
        )}
        <motion.button
          className="relative flex justify-center items-center py-4 rounded-full"
          style={{
            borderWidth: state === "loading" ? "0px" : "4px",
            borderStyle: "solid",
            borderColor: "#31c3f8",
            zIndex: 1,
          }}
          animate={{
            width:
              state === "initial" || state === "colored" ? "160px" : "60px",
            backgroundColor:
              state === "initial"
                ? "white"
                : state === "colored" || state === "success"
                ? "#31c3f8"
                : "#f1f1f1",
          }}
          onClick={handleClick}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <motion.span
            className={`text-base ${
              state === "initial" ? "text-[#31c3f8]" : "text-white"
            }`}
            animate={{
              opacity: state === "initial" || state === "colored" ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.span>
          {state === "success" && (
            <motion.svg
              className="absolute"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
            >
              <polyline points="20 6 9 17 4 12" />
            </motion.svg>
          )}
        </motion.button>
      </div>
    </div>
  );
}
