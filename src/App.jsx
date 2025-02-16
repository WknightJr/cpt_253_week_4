import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Nav } from './components/nav'

export const Context = React.createContext();
//This is setting up Context so I can use it to pass the states.//

function App() {

  const [signedIn, setSignedIn] = useState(false)
//This is the same state as the button. This is so the state can be used outside of just the button.//

//The nav has been wrapped in Contect.Provider tags so that its state can be changed.//
  return (
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Nav />
      <h1>
        {
          signedIn ? "Signed Out" : "Signed In" 
        }
      </h1>
    </Context.Provider>
  )
}

export default App

