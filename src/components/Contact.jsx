import React from 'react';
import Title from './Title';

export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto sm:w-9/12 max-w-6xl mt-20">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/481a67ec-317c-4b76-adb0-9568f9bbbd64"
          method="POST"
          className="p-4 flex flex-col w-full"
        >
          <div className="flex items-center justify-center">
            <Title> Contact </Title>
          </div>

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            rows="10"
            className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
          />

          <button
            type="submit"
            className="text-center inline-block px-8 py-3 text-base font-medium rounded-md text-black border border-stone-400 transtition-all duration-500 
            hover:text-white hover:bg-stone-900  dark:text-stone-300 dark:bg-stone-600 dark:hover:bg-white dark:hover:text-black"
          >
            Contact ME!
          </button>
        </form>
      </div>
    </div>
  );
}
