import { useEffect, useState } from 'react';
import './About.css';

function useDebounce(value: string, delay = 500) {
  const [ debounced, setDebounced ] = useState(value);
  useEffect(() => {
    let timerId = setTimeout(() => {
      setDebounced(value);
    }, delay)

    return () => clearTimeout(timerId);
  }, [value])


  return debounced;
}


export default function About() {
  const [ name, setName ] = useState("");
  const [ results, setResults ] = useState<string[]>([]);

  const debouncedName = useDebounce(name);

  const handleNameOnChange = ((e:any) => {
    setName(e.target.value);
  });

  useEffect(() => {
    if (debouncedName && debouncedName.length > 0) {
      setResults(["denis", "dan", "daniel"])
    } else {
      setResults([]);
    }
  }, [debouncedName])


  return (
    <div>
      <h2>About</h2>

      <div className="about-container" style={{display: "flex", justifyContent: "space-between" }}>
        <div className="about-select-list" style={{backgroundColor: "magenta"}}>
          An about select list
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          Another about selectlist
        </div>
        <div className="about-select-list"  style={{backgroundColor: "lime"  }}>
          A third selectlist
        </div>
      </div>

      <button type="button" className="link-button medium">+ New</button>

      <div>
        <label>Name
          <input type="text" style={{ padding: "10px", marginLeft: "10px" }} 
            onChange={handleNameOnChange}
            value={name} />
        </label>
        <ul style={{ listStyle: "none", border: "1px solid gray" }}>
          {results.map((result, idx) => <li key={idx}>{result}</li>)}
        </ul>
      </div>

    </div>

  );
}

/*
  useEffect(() => {
    let timerId = setTimeout(() => {
      console.log("starting timeout and setting results")
      if (name && name.length > 0) {
        setResults(["denis", "dan", "daniel"])
      } else {
        setResults([]);
      }
    }, 500)

    return () => clearTimeout(timerId);
  }, [name]);
*/
