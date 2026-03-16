import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anothervariable = "Ello Eloo";
const reactelement = React.createElement(   // element to be rendered just need a, attributes, children 
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click to visit google',
  anothervariable     // after the tree formation the vaibale are inserted at last
)
ReactDOM.createRoot(document.getElementById('root')).render(    //root element to be rendered  is created using ReactDOM
  // this is injected by the transpiler babel
  <>
    {reactelement}    {/* here {reactelement} is a evaluated expression (i.e. final outcome only)  */}
    <App />
  </>
)
