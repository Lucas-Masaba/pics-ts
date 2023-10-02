import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import searchImages from './api';

searchImages();

const el = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);