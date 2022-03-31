import React, { useState } from 'react';

import Button from '../../sharedcomponents/button/Button';
import { useFetch } from '../../hooks/useFetch';

export default function Fetchin() {
  const [url, setUrl] = useState('/john.json');

  const { data } = useFetch({ url });

  console.log('Fetchin rendering');
  const handleFetchJohn = () => {
    setUrl("/john.json")
  }
  const handleFetchJane = () => {
    setUrl("/jane.json")
  }

  return (
    <div className="flex-rows">
      <h1>useEffect notes with Jack Herrington</h1>
      <div>{JSON.stringify(data)}</div>
      <Button type="button" onClick={handleFetchJohn}>fetch john</Button>
      <Button type="button" onClick={handleFetchJane}>fetch jane</Button>

      <section>
        <p>React functional components are just functions and execute from the top</p>
        <p>Understaning javascript references is critical to understand hooks dependency lists.
        Look at item in dependency array, if primitive then should be ok; but if its a reference then need to confirm will not change
          every time which could cause neverending loop (because incoming refs will be different to previous ref used and cause hook to rerun)</p>
        <p>Ideally make values in the dependency array primitives. If not possible then could manage reference creation using useMemo so only recreated if changed.</p>
        <p>Avoid referencing state in a useEffect() which sets that state</p>
        <div>
            <a href="https://www.youtube.com/watch?v=dH6i3GurZW8">"Mastering reacts useEffect" - blue collar coder</a>
          </div>
      </section>
      
    </div>
  );
}