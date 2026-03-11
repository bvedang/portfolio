import { Cursor, useTypewriter } from 'react-simple-typewriter';

interface TypewriterProps {
  isDark: boolean;
}

export default function Typewriter({ isDark }: TypewriterProps) {
  const [text] = useTypewriter({
    words: [
      'Software Engineer',
      'Backend • Retrieval • Distributed Systems',
      'Java • Python • AWS',
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
