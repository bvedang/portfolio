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
      <div className="absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-stone-900 rounded-full h-[300px] w-[300px] mt-52" />
      <div className="absolute border border-stone-900 rounded-full h-[500px] w-[500px] mt-52" />
      <div className="absolute border border-[#F7AB0A] rounded-full h-[650px] w-[650px] opacity-20 mt-52 animate-pulse" />
      <div className="absolute border border-stone-900 rounded-full h-[800px] w-[800px] mt-52" />
    </motion.div>
  );
}
