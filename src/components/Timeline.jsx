import React from 'react';
import timeline from '../data/timeline';
import TimelineItems from './TimelineItems';
import Title from './Title';

export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20 p-6">
      <div className="max-w-6xl mx-auto">
        <Title>Timeline</Title>
        {timeline.map((item) => (
          <TimelineItems
            key={item.year}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  );
}
