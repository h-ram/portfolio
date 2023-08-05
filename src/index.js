import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>    
      <App />
    </BrowserRouter> */}
    <h1 style={{color:"blue",fontSize:"50px",backgroundColor:"green"}}>It works </h1>
  </React.StrictMode>
);

