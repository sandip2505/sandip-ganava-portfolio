import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// In a real CRA/Vite app this file usually exists. 
// We are relying on index.html script tag for Tailwind.

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);