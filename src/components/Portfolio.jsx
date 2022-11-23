import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItems from './PortfolioItems';

export default function Portfolio() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
