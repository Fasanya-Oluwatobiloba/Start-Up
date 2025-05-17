import { useState, useEffect } from 'react';

const TypingDeletingText = ({ texts, typingSpeed = 100, deletingSpeed = 50, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const currentText = texts[loopNum % texts.length];
    
    const handleTyping = () => {
      setDisplayedText(currentText.substring(0, displayedText.length + 1));
      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pause]);

  return <span>{displayedText}</span>;
};

export default TypingDeletingText