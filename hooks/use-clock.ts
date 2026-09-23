"use client";

import * as React from "react";

export function useClock(timeZone: string) {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return time;
}
