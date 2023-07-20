import React from "react";
import timeline from "../data/timeline";
import TimelineItems from "./TimelineItems";
import Title from "./Title";

export default function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center my-20 md:min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <Title>Timeline</Title>
        </div>

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
