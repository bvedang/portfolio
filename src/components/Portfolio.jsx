import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItems from './PortfolioItems';

export default function Portfolio() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col md:flex-row max-w-full p-10 justify-evenly mx-auto items-center w-9/12">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-2xl dark:text-white text-black">
       Projects
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#00acc1]/80">
        {portfolio.map((project) => (
          <PortfolioItems
            key={project.title}
            imageUrl={project.imageUrl}
            title={project.title}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
