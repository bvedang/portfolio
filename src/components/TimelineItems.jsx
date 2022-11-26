import React from 'react';

export default function TimelineItems({ year, title, duration, details }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-400 dark:border-stone-500 ">
      <li className="mb-10 ml-4">
        <div className="absolute w-4 h-4 bg-black rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-300 dark:bg-stone-300" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-700 bg-black dark:bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {title}
          </h3>
          <div className="my-1 text-sm font-normal leading-none text-slate-400 dark:text-stone-400">
            {duration}
          </div>
        </div>
        <p className="my-2 text-base font-normal text-black dark:text-stone-400">
          {details}
        </p>
      </li>
    </ol>
  );
}
