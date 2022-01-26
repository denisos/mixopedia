import React from 'react';
import { UserProvider, useUser } from '../../contexts/user/user-context';
import UserDisplay from './UserDisplay';
import UserEdit from './UserEdit';

import './ContextExample.css';

const Level1 = () => {
  // const [user] = useUser();
  console.log("render level1")
  return (
    <div>
      <p>Level 1</p>
      <Level2 />
    </div>
  );
}

const Level2 = () => {
  console.log("render level2")
  return (
    <div>
      <p>Level 2</p>
      <Level3 />
    </div>
  );
}

const Level3 = React.memo(() => {
  const [user] = useUser();
  console.log("render level3")
  return (
    <div>
      <p>Level 3</p>
      <div className="level-container">
        <Level4 />
        <Level5 />
      </div>
    </div>
  );
});

const Level5 = () => {
  console.log("render level5")
  return (
    <div>
      <p>Level 5</p>
      <UserDisplay />
    </div>
  );
}

const Level4 = () => {
  console.log("render level4")
  return (
    <div>
      <p>Level 4</p>
      <UserEdit />
    </div>
  );
}

export default function ContextExample() {
  return (
    <UserProvider>
      <div className="contextexample-container">
        <p>Context Example page, wrapped in a User Provider</p>

        <Level1 />

        <p>"When a react Context.Provider gets a new value, all the components that consume that value are updated and have to render, even if it's a function component that only cares about part of the data."</p>
        <p>consume is the keyword here, if you consume or use that context you will rerender when it changes, otherwise will not</p>
        <p>a component wrapped in react.memo will still rerender if it consumes a useContext (or useState and useReducer as well)</p>
      </div>
    </UserProvider>
  )    
}
