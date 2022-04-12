import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import './index.css';
import App from './App';

// basic setup as example for using react-intl
// BUT you could just only import the file which matches navigator or fallback
//  in cases where the language is set from browser (because app must reload)
//
import messages_de_de from "./translations/de-de.json";
import messages_en_us from "./translations/en-us.json";
import messages_es_mx from "./translations/es-mx.json";
const messages = {
  'de-DE': messages_de_de,
  'en-US': messages_en_us,
  'es-MX': messages_es_mx,
}

const langLocale = navigator.language;
const messagesToUse = messages[langLocale] || messages['en-US']; // en-US fallback if unsupported
console.log("navigator.language", langLocale, messagesToUse );

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale={langLocale} messages={messagesToUse}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);






// import React from "react"
//
// CodeSignal does this for us :)
/*
const block = {
  id: "8947b61f-4386-4ead-ab52-00200a446140",
  title: "Hello, world!",
  version: 4.0,
  public: true,
};

const blockNested = {
  id: "8947b61f-4386-4ead-ab52-00200a446140",
  title: "Hello, world!",
  version: 4.0,
  public: true,
  properties: {
    "icon":"🎉",
    "width":"full",
    "typeface":"sans-serif"
  }
};

const blockDeeplyNested = {"id":"8947b61f-4386-4ead-ab52-00200a446140","title":"Hello, world!","version":4.1,"history":{"597b41a1-1e31-4f7d-8763-01f244eaf5f7":{"date":"3 Feb 2022","changes":{"title":"Hello, world! v2"}},"3d4a2ceb-e787-479e-8087-3aaaf0d16e61":{"date":"29 Jan 2022","changes":{"icon":"🚧"}},"678f83a8-230d-4c3c-92cf-b3cacafb0a0a":{"date":"22 Jan 2022","changes":{"public":false}}},"public":true,"properties":{"icon":"🎉","width":"full","typeface":"sans-serif"}}



console.log(">>>> Here is your block:", block);

const isObject = (obj) => obj === Object(obj);

function buildValues(obj) {
let tmpProps = [];
for (const prop in obj) {
  let theValue = obj[prop];
  if (typeof theValue == "boolean") {
    theValue = theValue ? "true" :  "false";
  }
  tmpProps.push({ key: prop, value: theValue });
}

return tmpProps;
}

function PropsViewer({obj}) {
const [isOpen, setIsOpen ] = React.useState(false);
const [ objValues, setObjValues ] =  React.useState([]);

React.useEffect(() => {
  setObjValues(buildValues(obj));
}, []);

const handleToggleView = () => {
  setIsOpen(!isOpen);
}


if (!isOpen) {
  return (
    <span>
      <span onClick={handleToggleView}>▶</span>
      <span>{`{...}`}</span>
    </span>
  )
}

return (
  <span>
    <span onClick={handleToggleView}>▼ {'{'}</span>
    <ul style={{listStyle: "none"}}>
      {objValues.map((value, idx) => {
        if (isObject(value.value)) {
          return (
            <li key={idx}>{value.key}:
              <PropsViewer obj={value.value} />
            </li>
          )
        } else {
          return <li key={idx}>{value.key}: {value.value}</li> 
        }
      })}
    </ul>
  {'}'}
  </span>
);
}




function App() {
return (
  <main>
    <p>An empty React app to get you started!</p>
    <pre>
      <p>◀ ▼ ▲ ▶</p>
      <p>Check your browser console ⏭</p>
      
      <PropsViewer obj={blockDeeplyNested} />
    </pre>
  </main>
);
}

ReactDOM.render(<App />, document.getElementById("root"))

*/