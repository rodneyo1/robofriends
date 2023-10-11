import React from 'react';
import ReactDOM from 'react-dom/client';
import Tachyons from 'tachyons'
import reportWebVitals from './reportWebVitals';
import {robots} from './robots'
import Cardlist from './cardlist'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Cardlist robots={robots}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
