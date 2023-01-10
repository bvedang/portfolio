import React from 'react';

export default function Intro() {
  return (
    <div className="flex items-center justify-center relative flex-col p-6 justify-evenly h-screen ">
      <h3 className="absolute top-20 uppercase tracking-[20px] dark:text-white text-black text-2xl">
        About
      </h3>
      <p className="text-sm max-w-2xl mb-6 font-bold">
        "I am an Aspiring Software Engineer currently pursuing Masters in
        Computer Science at Illinois Institute of Technology. My fascination in
        Web Development began in 2019 when i first came across flask micro-web
        development framework, used to develop websites. I was trying to build
        full E-commerce website in one go just to learn how website are actually
        developed but I was unable to develop a fully functional website using
        flask but it taught me a lot about Frontend(HTML CSS, JavaScript and
        Ajax) and Backend(Python , Flask and API) technology. Additionally, it
        sparked my interest in pursuing a profession in web development."{' '}
      </p>
    </div>
  );
}
