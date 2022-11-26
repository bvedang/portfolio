import { useEffect, useState } from 'react';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [theme, setTheme] = useState(null);
  const dark = 'dark';
  const light = 'light';
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === dark ? light : dark);
  };

  useEffect(() => {
    if (theme === dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return (
    <>
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter snap-y snap-mandatory z-0">
        <div>
          <Header
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
            dark={dark}
          />
          <section id="hero" className="snap-start">
            <Hero theme={theme} dark={dark} />
          </section>
          <section id="about" className="snap-center">
            <Intro />
          </section>

          <section id="projects" className="snap-center">
            <Portfolio />
          </section>
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
