import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Provider from './store/Provider';
import GlobalStyles from './components/GlobalStyles/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </Provider>,
);
