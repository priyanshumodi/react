import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
// our file name is chai and we import Chai but best practice is to declare name with starting uppercase


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <Chai />
    </>
  </React.StrictMode>,
  // we can remove react strictmode but this is best practice
)
