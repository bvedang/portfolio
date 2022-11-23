import React from 'react';

export default function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-10">
      <h1 className="text-4xl md:text-7xl mb-2 md:mb-4 font-bold">
        Vedang Barhate
      </h1>
      <p className="text-base md:text-xl mb-4 font-medium">
        Wannabe Software Enginner & Grad-Student
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Your bio
        <br/>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."{' '}
        <a
          href="https://github.com/bvedang"
          target="_blank"
          className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          Vedang Barhate
        </a>
      </p>
    </div>
  );
}
