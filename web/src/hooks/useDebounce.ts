import { useState, useEffect } from "react";
import { config } from "../config/env";

export function useDebounce<T>(
  value: T,
  delay: number = config.debounceDelay
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
