import React from "react";

export default function Intro() {
  return (
    <div className="flex items-center justify-center relative flex-col p-6 justify-evenly h-screen ">
      <h3 className="absolute top-20 uppercase tracking-[20px] dark:text-white text-black text-2xl">
        About
      </h3>
      <p className="text-sm max-w-2xl mb-6 font-bold">
        "I am an experienced Full Stack Developer with expertise in Java and
        Python (Django/Flask). Proficient in HTML, CSS, and JavaScript, I have a
        strong understanding of OOP, SDLC, and agile methodologies. I excel in
        Django, Flask, and REST API frameworks, and have hands-on experience
        with React, PostgreSQL, Docker, and AWS. With strong problem-solving and
        collaboration skills, I am committed to delivering high-quality
        solutions."{" "}
      </p>
    </div>
  );
}
