import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>    
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>
  <h1 style={{color:"white",fontSize:"40px",backgroundColor:"red"}}>It works </h1>
);

