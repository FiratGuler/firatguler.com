import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { LanguageProvider } from './Locale/Context/LanguageContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
