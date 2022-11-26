import React from 'react';
import Title from './Title';

export default function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto w-9/12">
      <div className="flex justify-center items-center">
        
        <form
          action="https://getform.io/f/481a67ec-317c-4b76-adb0-9568f9bbbd64"
          method="POST"
          className="p-4 flex flex-col w-full md:w-9/12"
        >
          <Title> Contact </Title>
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
            type="button"
            className="text-centerinline-block px-8 py-3 text-base font-medium rounded-md text-black border border-black  
            hover:text-white hover:bg-black hover:border-transparent dark:text-white dark:bg-stone-700 dark:hover:bg-white dark:hover:text-black"
          >
            Contact ME!
          </button>
        </form>
      </div>
    </div>
  );
}
