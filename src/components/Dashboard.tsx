import { useEffect, useRef,  useState } from 'react';

function usePrevious(value: any) {
  const prevRef = useRef<number>();
  useEffect(() => {
    console.log("usePrevious called ", value)
    prevRef.current = value;
  }, [value]);
  
  return prevRef.current;
}

export default function Dashboard() {
  const  [count, setCount] = useState(0);

  const prevCount = usePrevious(count);

  return (
    <div>
      <h2>Dashboard</h2>

      <h4>Example of using useRef to track previous value of a useState</h4>

      <p>count is count {count} and prev {prevCount} </p>

      <button onClick={() => setCount(prev => prev + 1)}>Add one</button>

    </div>
  );
}