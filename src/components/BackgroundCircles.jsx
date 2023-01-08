import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* Modify borderCirles for the light background as well */}
      <div className="absolute border dark:border-[#333333] border-black rounded-full sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="absolute border dark:border-stone-900 border-white rounded-full sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px] mt-52" />
      <div className="absolute border dark:border-stone-900 border-white rounded-full sm:h-[450px] sm:w-[450px] md:h-[500px] md:w-[500px] mt-52" />
      <div className="absolute border dark:border-[#F7AB0A] border-slate-500 rounded-full sm:h-[600px] sm:w-[600px] md:h-[650px] md:w-[650px] opacity-20 mt-52 animate-pulse" />
      <div className="absolute border dark:border-stone-900 border-white rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}
