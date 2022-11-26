import { motion } from 'framer-motion';
import React from 'react';

export default function PortfolioItems({ title, imageUrl, techStack, link }) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#f5f5f4] dark:bg-stone-800
    p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden "
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="/assets/812.jpg"
        alt=""
      />
      <div className="px-4 md:p-10">
        <h4 className="text-4xl">{title}</h4>
        <p className="font=bold text-2xl mt-1">Domain</p>
        <div>{/* Capsules of Tech */}</div>
        <p className="uppercase py-5 text-slate-900 dark:text-stone-400">
          Dates
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
    // <a
    //   href={link}
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
    // >
    //   <img
    //     src={imageUrl}
    //     alt="portfolio"
    //     className="w-full h-40 md:h-50 object-cover cursor-pointer"
    //   />
    //   <div className="w-full p-4">
    //     <h3 className="text-lg md:text-x mb-2 md:mb-3 font-semibold dark:text-white">
    //       {title}
    //     </h3>
    //     <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
    //       {techStack.map((item) => (
    //         <span
    //           className="inline-block px-3 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-lg"
    //           key={item}
    //         >
    //           {item}
    //         </span>
    //       ))}
    //     </p>
    //   </div>
    // </a>
  );
}
