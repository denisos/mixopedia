import { useState, useEffect } from 'react'

interface DebouncedInputProps {
  delay?: number;
  onDebouncedChange: (value: string) => any
  placeholder?: string;
  type?: string;
}

export default function DebouncedInput({
  delay = 900,
  onDebouncedChange,
  placeholder,
  type = 'text'
}: DebouncedInputProps) {
  const [ value, setValue ] = useState('');

  console.log("DebouncedInput entered ", value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  // call onDebouncedChange callback passing input value after delay
  useEffect(() => {
    console.log("DebouncedInput useEffect run")
    const timeoutId = setTimeout(() => {
      onDebouncedChange(value);
    }, delay);

    // if a component renders multiple times (as they typically do), the previous effect is 
    //  cleaned up before executing the next effect
    return () => {
      console.log("DebouncedInput clearTimeout")
      clearTimeout(timeoutId); 
    };
  }, [value, delay, onDebouncedChange ]);

  return (
    <input 
      type={type}
      value={value} 
      onChange={handleChange} 
      placeholder={placeholder}
    />
  );
}