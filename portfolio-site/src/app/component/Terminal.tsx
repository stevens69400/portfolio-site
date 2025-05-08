'use client';

import React, { useEffect, useState } from 'react';
import styles from './Terminal.module.css'; // We'll create this CSS module next

const techStack: string[] = [
  'Welcome to my Portfolio!',
  'Here is my tech stack:',
  '',
  '- JavaScript | TypeScript | React | Next.js | MySQL',
];

const Terminal: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [lineIndex, setLineIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);

  useEffect(() => {
    if (lineIndex < techStack.length) {
      const currentLine = techStack[lineIndex];
      if (charIndex <= currentLine.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + currentLine.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, 40);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + '\n');
          setLineIndex(prev => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, lineIndex]);

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <span className={`${styles.dot} ${styles.red}`} />
        <span className={`${styles.dot} ${styles.yellow}`} />
        <span className={`${styles.dot} ${styles.green}`} />
      </div>
      <pre className={styles.body}>
        {displayedText}
        {lineIndex < techStack.length && <span className={styles.cursor}>&nbsp;</span>}
      </pre>
    </div>
  );
};

export default Terminal;
