import { useState } from 'react'
import './App.css'

import Navbar from './components/NavBar/Navbar'
import Home from './components/Home'
import Waves from './components/Waves'


function App() {
  const [count, setCount] = useState(0)

  return ( <div className="App">
      <Navbar />
      <Home />
      <Waves />
    </div>
  )
}

export default App
