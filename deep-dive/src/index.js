import React from 'react';
import ReactDOM from 'react-dom/client';
import { RenderedElement } from './1-component/Jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <RenderedElement/>
  </React.StrictMode>
);

