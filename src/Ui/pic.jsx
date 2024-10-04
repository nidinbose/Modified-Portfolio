import React from "react";
import { motion } from "framer-motion";

const Pic = () => {
  return (
    <div className="relative flex justify-center items-center mb-20">
      <motion.div className="photo relative z-15 mb-12">
        <img 
          src="./images/b.png" 
          alt="Responsive Image" 
          className="object-contain mix-blend-screen w-auto h-64 sm:h-80 md:h-96 xl:h-112 mb-12 xl:ml-[150px] xl:mr-[30px] "

        />
      </motion.div>

      <motion.svg 
        className="absolute w-[200px] sm:w-[250px] md:w-[300px] xl:w-[406px] h-[200px] sm:h-[250px] md:h-[300px] xl:h-[406px] right-0"
        fill="transparent" 
        viewBox="0 0 506 506" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#00ff99"
          fill="transparent"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}

export default Pic;
