import React from 'react';
import { UserProvider, useUser } from '../../contexts/user/user-context';
import { ThemeProvider, ThemeContext } from '../../contexts/theme-context';
import UserDisplay from './UserDisplay';
import UserEdit from './UserEdit';

import './ContextExample.css';

const Level1 = () => {
  const [user] = useUser();
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
// const Level3 = () => {
  console.log("render level3")
  return (
    <div>
      <p>Level 3</p>

      <div className="level-container">
        <Level4 />
        <Level5 />

        <Level6 />

      </div>
    </div>
  );
});

const Level4 = () => {
  console.log("render level4")
  return (
    <div>
      <p>Level 4</p>
      <UserEdit />
    </div>
  );
}

const Level5 = () => {
  console.log("render level5")
  return (
    <div>
      <p>Level 5</p>
      <UserDisplay />
    </div>
  );
}

const Level6 = () => {
  console.log("render level6");
  const aTheme = React.useContext(ThemeContext);
  return (
    <div>
      <p>Level 6</p>

      <ThemeContext.Consumer>
        {theme => <p>ContextConsumer theme is: {theme.name}</p>}
      </ThemeContext.Consumer>
      
      <p>useContext theme is: {aTheme.name}</p>
    </div>
  );
}

export default function ContextExample() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="contextexample-container">
          <p>Context Example page, wrapped in a User Provider</p>

          <Level1 />

          <p>"When a react Context.Provider gets a new value, all the components that consume that value are updated and have to render, 
            even if it's a function component that only cares about part of the data."
          Children of a parent which consumes context will also rerender even if not consuming context</p>
          <p>...so consume is the keyword here, if you consume or use that context you will rerender when it changes, otherwise will not</p>
          <p>A child component wrapped in react.memo will not re-render if not consuming the context but will re-render if it consumes a useContext (or useState and useReducer as well)</p>
          <p>If you have global data which changes frequently, is used in multiple places, logic to update is complex then Context is probably not a good solution.</p>
          <p>If you do use react context then recommendation is to split the data into multiple contexts if data is split across dom trees (thus avoid unnecessary renders).</p>
          
          <div>
            <a href="https://kentcdodds.com/blog/application-state-management-with-react">Kent Dodds React is a State Mgt Library</a>
          </div>
          <div>
            <a href="https://blog.isquaredsoftware.com/2021/01/context-redux-differences/#why-context-is-not-state-management">Mark from Redux, Context is transport, not a state mgt system</a>
          </div>
          <div>
            <a href="https://jotai.org/">Pox on both your houses, jotai ftw</a>
          </div>
        </div>
      </UserProvider>
    </ThemeProvider>
  )    
}
