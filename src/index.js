import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

const divRoot = document.getElementById('app');

const root = createRoot(divRoot);

root.render(
  <BrowserRouter>
   <App />
  </BrowserRouter>
);

// const root = createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
// );

reportWebVitals();
