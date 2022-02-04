import React from 'react';

import './Patterns.css';

const Title = (props: { render: () => any}) => props.render();

const TitleRPAC = (props: any) => props.children();

const PropsTest = ({name, address}: { name: string, address: string}) => <h1>hello {name} {address}</h1>

const ComponentRP = (props: any) => {
  const [ data, setData ] = React.useState({ name: "render prop"})
  // do some logic and then pass result to children
  return props.children(data);
}

const ComponentB = ({ data } : any) => {
  console.log(data)
  return <p>Component B: data passed is {data.name}</p>
}

const ShowError = (props: { error: string }) => props.error ? <div>{props.error}</div> : null;

let contacts: string[] = [];

export default function Patterns(props: any) {

  return (
    <div className="patterns-container">
      <PropsTest name="denis" address="21 sycamore"/>

      <Title 
        render={() => <h1>React (and more) Patterns List</h1>} 
      />

      <ul>
        <li><a href="#hooks">"use" Hooks</a></li>
        <li><a href="#state_management">State Management</a></li>
        <li><a href="#use_usereducer">useReducer for complex state logic</a></li>
        <li><a href="#apropscolypse">AProps-colypse</a></li>
        <li><a href="#apropscolypse">Component-itis</a></li>
        <li>Render props</li>
        <li>Higher Order Components</li>
        <li><a href="#container_versus_presentation">Container versus Presentation components</a></li>
        
        <li><a href="#react_memo">Memoize components using React memo</a></li>
        
        <li><a href="#conditional_rendering">Conditional Rendering</a></li>
        <li>Data island</li>
        <li>Rendering, SSR to CSR and in between</li>
          <ul>
            <li>Client Side rendering (CSR); only skeleton file served by server and all logic, fetching, routing, rendering done on client.</li>  
              <ul>
                <li>larger bundle sizes leading to slower First Contentful Paint and Time to Interactive. 
                  Can be mitigated with keeping bundle size small, Code Splitting and Lazy loading, preloading key resources.</li>
                <li>not SEO friendly (as SSR for example)</li>
              </ul>
            <li>Server Side rendering (CSR); full html generated on the server, all logic, fetching, routing, rendering done on server.</li>  
              <ul>
                <li>smaller bundle sizes faster First Contentful Paint and Time to Interactive. More round trips to server</li>
                <li>SEO friendly. SSR works great for static sites.</li>
              </ul>
          </ul>
        <li>Code splitting; route based and component based</li>
      </ul>
      <pre>
        <code>
          {`const Greeting = ({aname}) => aname)`}
        </code>
      </pre>

      <pre>
        <code>

      {`<Title 
        render={() => <h1>More Patterns</h1>} 
      />`}
        </code>
        </pre>


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

      <h2 id="hooks">"use" Hooks</h2>
      <p>Hooks (introduced in v16.8) and functional components are the way to write react code (versus classes). </p>
      <ul>
        <li>Hooks make it easy to share stateful logic between components (should replace render props and HOCs). 
          Important: Hooks do not allow reuse of state, each hook has it's own separate isolated state. Sharing state is a different topic.</li>
        <li>Hooks also make it easier to breakup logic into cohesive parts (can split out logic into multiple functions) and combine as needed. These custom hooks are exciting.</li>
        <li>Hooks allow us to “hook into” React state and lifecycle features from function components.</li>
        <li><a href="https://reactjs.org/docs/hooks-reference.html">Reacts docs for more</a></li>
      </ul>
         
      <h2 id="state_management">State Management</h2>
      <p>Big topic! <a href="https://kentcdodds.com/blog/application-state-management-with-react">React is a state management library</a>. Yes, that's true. But its recognized there are limits. 
      You need to think about what your app needs and choose the right solution from what's available. Don't just reach for Redux (because you may not need it). But if you state is complex enough then you a state management library like redux may be best. </p>
      <ul>
        <li>Thought leaders good advice is to think about separating UI state from Server state (or server state cached on the client). Components can manage their UI state using hooks like useState. </li>
        <li>Shared state can be shared among components using the technique <a href="https://reactjs.org/docs/lifting-state-up.html">Lifting state up</a> and pass via props. Another technique is component composition.</li>
        <li>When prop drilling is too much and composition is exhausted then what? React context is a mechanism to pass data through the component tree without prop drilling.</li>
        <li>Kent Dodds recommends multiple React context for different types of shared data co-located to the dom tree which needs it. </li>
        <li>But React context is has limits as explained pretty well <a href="https://blog.isquaredsoftware.com/2021/01/context-redux-differences/#why-context-is-not-state-management">in this article by Mark, a Redux maintainer</a>. 
         React context is not recommended for data which changes frequently, when the app has a lot of shared state (e.g. multiple contexts)</li>
        <li>Whats next is state management libraries like Redux, Mobx, jotai and similar.</li>
      </ul>

      <h2 id="use_usereducer">useReducer for complex state logic</h2>
      <p>useReducer is a pretty cool hook; does your component/hook have lots of useStates() and/or complex state update logic? then useReducer may be the cure.</p>
      <ul>
        <li>useReducer hook takes a reducer function and initial value and returns a state and dispatch</li>
        <li>can also pass the dispatch function to other components to dispatch state updates</li>
        <li>But consider this: maybe your component/hook is trying to do too much and should be refactored?</li>
        <li>useReducer does have a nice design asthetic and separation, so not just for gnarly cases of complex logic.</li>
        <li><a href="https://reactjs.org/docs/hooks-reference.html#usereducer">Reacts docs for more</a></li>
      </ul>
        
      <h2 id="container_versus_presentation">Container versus Presentation components</h2>
      <p>With hooks, this pattern is outdated, see <a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Dan Abramovs article</a> for his disclaimer "I don’t suggest splitting your components like this anymore" as well as explanation.</p> 
      <ul>
        <li>To me this talks to separation of concerns and single responsibility: separating the logic to manage the state from the logic to render the state.
          Hooks are just a better way now to design and build that separation (than container components).
        </li>
        <li>So do use the tools to separate concerns and build components which are presentation only components. As in all their data is passed in via props and are just concerned with presentation. Not least because it makes it easier to test such components.</li>
      </ul>


      <h2 id="react_memo">Memoize components using React memo</h2>
      <p>Wrapping your component in React.memo(), an HOC btw, will give a performance boost if it always renders same result given same props. 
        Basically if your functional component is "pure". If it uses useEffect, useReducer or useContext then is not pure and re-renders when state or context change.</p>
      <ul>
      <li>Not to be confused with the useMemo() hook</li>
      <li>Why don't we wrap all components in React memo? Because there are restrictions</li> 
      <li>So what's a good use case? (because react is performant)</li> 
      <li><a href="https://reactjs.org/docs/react-api.html#reactmemo">Reacts docs for more</a></li>
      </ul>



      <h2 id="conditional_rendering">Conditional Rendering</h2>
      <p>Conditional rendering is cool and I love me some like so:</p>
      <pre>
        <code>
          {` {contacts?.length && contacts.map((contact, i) => <li key={i}>{contact}</li>)}`}
        </code>
      </pre>
      <ul>
        <li>But if contacts is [], this will render a 0 (zero) as follows because the test fails and returns the resulting 0. 
          Kent Dodds blogged this and recommends always using ternary and explicit null for else case (Kents advice is good innit). In this particular case, could also check if "contacts?.length &gt; 0"
          Whatever you choose, watch out for this gotcha.</li>
        <ul>
          {contacts?.length && contacts.map((contact, i) => <li key={i}>{contact}</li>)}
        </ul>
        <li>Avoid compound conditionals in jsx because it can be hard to understand; instead consider move to separate variable.</li>
      </ul>

      <ShowError error="Error!!"/>

      <p>render props: passing jsx element to component via props, a render prop is a function which when called returns jsx. 
        The props can be called "render" or something else. Is a way to share logic and reusing code in react apps; but hooks are now preferred.
        Move the logic out of render prop component and instead put into a reusable custom hook</p>
    </div>
  )
}