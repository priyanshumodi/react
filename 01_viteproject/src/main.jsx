import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'
// our file name is chai and we import Chai but best practice is to declare name with starting uppercase

function MyApp() {
  return(
    <div>
      <h1>radhe radhe</h1>
    </div>
  )
}

const ReactElement = {
  type : 'a',
  props: {
      href : "https://google.com",
      target : "_blank"
  },
  children : 'click me to visit google'
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">visit google</a>
)

const NewReactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <>
  //   <App />
  //   <Chai />
  //   {/* MyApp() // remove strictmode and remove upper (<></>) then only this will run */}
  //   <MyApp/>
  //   </>
  // </React.StrictMode>,
  // we can remove react strictmode but this is best practice


  // <AnotherElement/>

  // <div>
  // <ReactElement />
  // this will not run because on render there is specific object to take values
  // <div/>


  // NewReactElement

  <>
  <App/>
  </>
  
)
