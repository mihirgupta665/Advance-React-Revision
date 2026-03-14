import React from 'react';    // it is the core foundational library of react which holds all the references
import ReactDOM from 'react-dom/client';    // its is the implementation of the react in the web
// react-native : i sthe imoplementation o fthe react in the mobile apps

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  //react generates a dom of itself i.e. Virtual DOM
root.render(
  <React.StrictMode>      {/*this is a safe mode used for optimization in devlopment */}
    <App />     {/* App[custom tag] is the JSX exported from the App.js */}
    {/*jsx looks same like javascript and it allows to use javascript to render html */}
  </React.StrictMode>
);



