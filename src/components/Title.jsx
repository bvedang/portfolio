import React from 'react';

export default function Title({ children, id }) {
  return (
    <div>
      <h1
        id={id && id}
        className="text-2xl  mb-5 text-stone-900 dark:text-white uppercase tracking-[20px] text-black"
      >
        {children}
      </h1>
    </div>
  );
}
