import React from 'react';

export default function PortfolioItems({ title, imageUrl, techStack, link }) {
  return (
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
      <img
        src={imageUrl}
        alt="portfolio"
        className="w-full h-40 md:h-50 object-cover cursor-pointer"
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-x mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-3 flex-row items-center justify-start text-xs md:text-sm">
          {techStack.map((item) => (
            <span className='inline-block px-3 py-1 font-semibold border-2 rounded-lg border-stone-900' key={item}>{item}</span>
          ))}
        </p>
      </div>
    </div>
  );
}
