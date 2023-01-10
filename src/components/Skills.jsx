import React from 'react';
import JavaScriptIcon from './techIcons/JavaScriptIcon';
import ReactIcon from './techIcons/ReactIcon';
import CSSIcon from './techIcons/CSSIcon';
import BootstrapIcon from './techIcons/BootstrapIcon';
import TailwindIcon from './techIcons/TailwindIcon';
import FigmaIcon from './techIcons/FigmaIcon';
import ReduxIcon from './techIcons/ReduxIcon';
import MaterialUiIcon from './techIcons/MaterialUiIcon';
import PythonIcon from './techIcons/PythonIcon';
import PostmanIcon from './techIcons/PostmanIcon';
import PostgreSQLIcon from './techIcons/PostgreSQLIcon';
import GitIcon from './techIcons/GitIcon';
import GithubIcon from './techIcons/GithubIcon';
import FlaskIcon from './techIcons/FlaskIcon';
import FirebaseIcon from './techIcons/FirebaseIcon';
import CplusplusIcon from './techIcons/CplusplusIcon';
import Title from './Title';

function Skills() {
  return (
    <article className="max-w-6xl mx-auto p-6 md:h-screen my-20  gap-1">
      <div className="flex items-end justify-center md:mt-32 sm:mt-20 mt-16">
        <Title> Skills</Title>
      </div>

      <div className="grid md:grid-cols-10 grid-cols-1 mb-5">
        <div className="col-span-7 border dark:border-stone-300 border-stone-700 border-b-8 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 mb-16">
        <h3 className="text-lg">FrontEnd</h3>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <ReactIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>React Js</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <JavaScriptIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <ReduxIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Redux</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <BootstrapIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Bootstrap</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <TailwindIcon height="2.5rem" width="2.5rem" />
            </div>
            <span className="text-center">Tailwind CSS</span>
          </div>

          <div className="flex flex-col justify-center items-center md:col-start-3 md:col-end-3">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <MaterialUiIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Material Ui</span>
          </div>
          <div className="flex flex-col justify-center items-center md:col-start-4 md:col-end-4 sm:col-start-2 sm:col-end-auto">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <CSSIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>CSS</span>
          </div>
          <div className="flex flex-col justify-center items-center md:col-start-auto md:col-end-auto sm:col-start-3 sm:col-end-auto">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <FigmaIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Figma</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <h3 className="text-lg">BackEnd</h3>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <PythonIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Python</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <FlaskIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Flask</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <CplusplusIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>C++</span>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <PostgreSQLIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Postgre SQL</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <FirebaseIcon height="2.5rem" width="2.5rem" />
            </div>
            <span className="text-center">FireBase</span>
          </div>

          <div className="flex flex-col justify-center items-center md:col-start-3 md:col-end-3">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <GitIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Git</span>
          </div>
          <div className="flex flex-col justify-center items-center md:col-start-4 md:col-end-4 sm:col-start-2 sm:col-end-auto">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <GithubIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Github</span>
          </div>
          <div className="flex flex-col justify-center items-center md:col-start-auto md:col-end-auto sm:col-start-3 sm:col-end-auto">
            <div className="border dark:border-stone-300 border-stone-700 rounded-full p-3">
              <PostmanIcon height="2.5rem" width="2.5rem" />
            </div>
            <span>Postman</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Skills;
