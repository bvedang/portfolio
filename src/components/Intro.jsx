import React from 'react';

export default function Intro() {
  return (
    <div className="flex items-center justify-center h-screen relative flex-col text-center justify-evenly">
      <h3 className="absolute top-24 uppercase tracking-[20px] dark:text-white text-black text-2xl">About</h3>
      <p className="text-sm max-w-xl mb-6 font-bold">
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
