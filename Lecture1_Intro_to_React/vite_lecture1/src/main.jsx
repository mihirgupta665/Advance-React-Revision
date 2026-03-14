import { StrictMode } from 'react'                //react and react dom are to library very important for web development
import { createRoot } from 'react-dom/client'

import App from './App.jsx'     // import the app.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
