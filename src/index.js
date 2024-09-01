import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { LanguageProvider } from './Context/Languagecontext'; // Import the LanguageProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider> {/* Wrap your App with LanguageProvider */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
