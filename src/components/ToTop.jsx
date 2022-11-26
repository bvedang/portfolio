import React from 'react';

export default function ToTop() {
  return (
    <footer className="sticky bottom-5 w-full cursor-pointer">
      <div className="flex items-center justify-end mr-5">
        <div className="flex items-center justify-center w-10 h-10 bg-stone-300 text-stone-600 hover:bg-stone-700 hover:text-stone-100 dark:hover:bg-stone-700 dark:hover:text-stone-100 dark:bg-stone-600 dark:text-stone-300 rounded-full">
          <a href="#hero" className=" ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
