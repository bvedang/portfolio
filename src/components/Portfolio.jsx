import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItems from './PortfolioItems';

export default function Portfolio() {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full p-10 justify-evenly mx-auto items-center">
      
      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
        {portfolio.map(project => (
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
