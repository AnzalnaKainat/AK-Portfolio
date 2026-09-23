"use client";

import * as React from "react";

export function useTypewriter(text: string, speed = 28, startDelay = 200) {
  const [output, setOutput] = React.useState("");
  const [done, setDone] = React.useState(false);

  React.useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setOutput(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOutput(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { output, done };
}
