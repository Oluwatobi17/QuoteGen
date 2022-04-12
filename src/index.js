import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import QuoteCtxProvider from './store/quote-context';

ReactDOM.render(
  <React.StrictMode>
    <QuoteCtxProvider>
      <App />
    </QuoteCtxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
