import { Cursor, useTypewriter } from 'react-simple-typewriter';

interface TypewriterProps {
  isDark: boolean;
}

export default function Typewriter({ isDark }: TypewriterProps) {
  const [text] = useTypewriter({
    words: [
      'Full-Stack Software Engineer',
      'Backend & Distributed Systems',
      'React • Java • AWS',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <span>
      <span className="mr-3 text-black dark:text-white">{text}</span>
      <Cursor cursorColor={isDark ? 'white' : 'black'} />
    </span>
  );
}
