import { useEffect, useState } from 'react';

// references: https://usehooks.com/useDebounce/

// when just want the value debounced and caller handles what happens next
export function useDebounceValue(value: string | number, delay = 500) : string | number {
  const [debouncedValue, setDebouncedValue ] = useState(value);

  console.log("useDebounceValue entered");

  useEffect(() => {
    console.log("useDebounceValue useEffect triggered");

    const timeoutId = setTimeout(() => {
      console.log("useDebounceValue useEffect timer started");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("useDebounceValue useEffect cleartimeout");
      clearTimeout(timeoutId);
    };

  }, [delay, value]);

  return debouncedValue;
}

// when want the callback called when value changes after a debounce delay
export function useDebounceFunction(
  value: string | number, 
  callback: (value: string | number) => any, 
  delay = 500) 
{
  console.log("useDebounceFunction entered");

  useEffect(() => {
    console.log("useDebounceFunction useEffect triggered");

    const timeoutId = setTimeout(() => {
      callback(value);
    }, delay)

    return () => {
      console.log("useDebounceFunction useEffect cleartimeout");
      clearTimeout(timeoutId);
    };
  }, [callback, delay, value]);
}
