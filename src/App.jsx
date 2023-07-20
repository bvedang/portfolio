import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ToTop from "./components/ToTop";
import Project from "./components/Project";
import Skills from "./components/Skills";
import styles from "./app.module.css";

function App() {
  const [theme, setTheme] = useState(null);
  const { ref: projectRef, inView: projectVisible } = useInView();
  const { ref: timeLineRef, inView: timeLineVisible } = useInView();
  const { ref: contactRef, inView: contactVisible } = useInView();
  const { ref: skillsref, inView: skillsVisible } = useInView();

  const dark = "dark";
  const light = "light";
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === dark ? light : dark);
  };
  useEffect(() => {
    if (theme === dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="bg-white dark:bg-[#191715] duration-500 text-stone-900 dark:text-stone-300 min-h-screen font-inter z-0">
        <div>
          <Header
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
            dark={dark}
          />
          <section className="my-10" id="hero">
            <Hero theme={theme} dark={dark} />
          </section>
          <section id="about">
            <Intro />
          </section>
          <section
            ref={projectRef}
            id="projects"
            className={`${styles.hidden} ${projectVisible ? styles.show : ""}`}
          >
            <Project />
          </section>
          <section
            ref={timeLineRef}
            className={`${styles.hidden} ${timeLineVisible ? styles.show : ""}`}
          >
            <Timeline />
          </section>

          <section
            ref={skillsref}
            className={`${styles.hidden} ${skillsVisible ? styles.show : ""}`}
            id="skills"
          >
            <Skills />
          </section>

          <section
            ref={contactRef}
            id="contact"
            className={`${styles.hidden} ${contactVisible ? styles.show : ""}`}
          >
            <Contact />
          </section>

          <Footer />
        </div>
        <ToTop />
      </div>
    </>
  );
}

export default App;
