import { useEffect, useState } from "react";

export function useClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);

    function tick() {
      setDate(new Date());
    }
    return () => clearInterval(timer);
  });

  return [date.toLocaleTimeString(), date.toLocaleDateString()];
}
