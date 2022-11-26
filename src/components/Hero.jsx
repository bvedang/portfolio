import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero({ theme, dark }) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, My Name is Vedang Barhate',
      'Guy who loves to play Valorant',
      '<ButLovesToCodeMore/>',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  const cursor =
    theme === dark ? (
      <Cursor cursorColor="white" />
    ) : (
      <Cursor cursorColor="black" />
    );
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/assets/IMG-0271.jpg"
        alt=""
        className="mx-auto relative rounded-full h-32 w-32 object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-stone-400 pb-2 tracking-[12-x">
          Aspiring Software Engineer
        </h2>
        <h1 className="text-3xl md:text-4xl dark:text-white font-semibold px-10">
          <span className="mr-3 text-black dark:text-white">{text}</span>
          {cursor}
        </h1>
        <div className="pt-5">
          <button className="heroNav">
            <a href="#about">About</a>
          </button>
          <button className="heroNav">
            <a href="#projects">Projects</a>
          </button>
          <button className="heroNav">
            <a href="#skills">Skills</a>
          </button>
        </div>
      </div>
    </div>
  );
}