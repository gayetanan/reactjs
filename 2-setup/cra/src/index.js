import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

// ReactDOM.render(
//   <StrictMode>
//     <h1>Hello, from the old way</h1>
//   </StrictMode>,
// document.getElementById("root"));

// create root element
const root = ReactDOM.createRoot(document.querySelector("#root"));
//render components in the root element
root.render(
  <StrictMode>
     <h1>Hello, from the new way</h1>
  </StrictMode>
)

