import React from 'react';

import './Patterns.css';

const Title = (props: { render: () => any}) => props.render();

const TitleRPAC = (props: any) => props.children();

const ComponentRP = (props: any) => {
  const [ data, setData ] = React.useState({ name: "render prop"})
  // do some logic and then pass result to children
  return props.children(data);
}

const ComponentB = ({ data } : any) => {
  console.log(data)
  return <p>Component B: data passed is {data.name}</p>
}

export default function Patterns(props: any) {

  return (
    <div className="patterns-container">
      <Title 
        render={() => <h1>Patterns</h1>} 
      />
      <Title 
        render={() => <h1>More Patterns</h1>} 
      />

      <TitleRPAC>
        {() => 
          <>
            <h1>TitleRPAC</h1>
            <h2>Sub TitleRPAC</h2>
          </>
        }
      </TitleRPAC>

      <ComponentRP>
        {(data:any) => <ComponentB data={data} />}
      </ComponentRP>

      <p>render props: passing jsx element to component via props, a render prop is a function which when called returns jsx. 
        The props can be called "render" or something else. Is a way to share logic and reusing code in react apps; but hooks are now preferred.
        Move the logic out of render prop component and instead put into a reusable custom hook</p>
    </div>
  )
}