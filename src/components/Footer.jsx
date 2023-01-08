import React from 'react';

export default function Footer() {
  return (
    <footer
      key={'footer'}
      className="py-5 text-sm flex flex-col justify-center items-center"
    >
      <h3 className="uppercase">Inspired by:</h3>
      <ul className="flex p-3 text-xs gap-3">
        <li className="p-3 hover:rounded-full hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-500">
          <a href="https://www.youtube.com/@fknight/featured" target="_blank">
            {' '}
            ForestKnight
          </a>
        </li>
        <li className="p-3 hover:rounded-full hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-500">
          <a href="https://www.youtube.com/@SonnySangha" target="_blank">
            Sonny Sangha
          </a>
        </li>
        <li className="p-3 hover:rounded-full hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-500">
          <a href="https://brittanychiang.com/" target="_blank">
            Britney Chiang
          </a>
        </li>
      </ul>
      <h3 className="uppercase text-xs p-3 hover:rounded-full hover:bg-stone-900 hover:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900 transition-all duration-500">
        <a href="https://github.com/bvedang">Built by Vedang Barhate</a>
      </h3>
    </footer>
  );
}
