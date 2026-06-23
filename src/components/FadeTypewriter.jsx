import { useEffect, useState } from "react";

export default function FadeTypewriter({
  words = [],
  delay = 2500,
  fadeDuration = 400
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // some

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // aparece
      }, fadeDuration);
    }, delay);

    return () => clearInterval(interval);
  }, [words.length, delay, fadeDuration]);

  return (
    <span
      className={`
        inline-block
        transition-opacity duration-500
        ${fade ? "opacity-100" : "opacity-0"}
      `}
    >
      {words[index]}
    </span>
  );
}