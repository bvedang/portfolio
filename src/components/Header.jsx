import { motion } from 'framer-motion';
import React from 'react';
import EmailIcon from './EmailIcon';
import SocialIcons from './SocialIcons';

function Header({ theme, handleThemeSwitch, dark }) {
  const sun = (
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
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const moon = (
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
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );
  return (
    // {/*Add shadow to the bottom of the header*/}
    <header className="sticky top-0 p-4 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-white dark:bg-[#191715]">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center"
      >
        <a
          className="flex items-center justify-center h-[3.125rem] w-[3.125rem]"
          href="#"
        >
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
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>

        <SocialIcons
          theme={theme}
          dark={dark}
          url="https://github.com/bvedang"
        />
        <SocialIcons
          theme={theme}
          dark={dark}
          url="https://www.instagram.com/vedang_barhate/"
        />
        <SocialIcons
          theme={theme}
          dark={dark}
          url="https://www.linkedin.com/in/vedang-barhate17/"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-row items-center text-white cursor-pointer"
      >
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="dark:bg-orange-300 bg-violet-300 text-lg p-1 rounded-lg"
        >
          {theme === dark ? sun : moon}
        </button>
        <EmailIcon theme={theme} dark={dark} />
        <p className="uppercase hidden md:inline-flex text-sm text-black dark:text-white">
          <a href="#contact">Get in Touch</a>
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
