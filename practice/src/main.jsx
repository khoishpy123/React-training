import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './theme/GlobalStyles/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </React.StrictMode>,
);
