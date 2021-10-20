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
