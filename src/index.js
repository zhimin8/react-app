import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 실제로 구현하게 되는 것
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 이 쿼리를 기반으로 해서, public-index의 root를 이용해서 만든다,
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
