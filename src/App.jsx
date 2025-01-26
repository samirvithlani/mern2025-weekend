import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { PropDemo } from './components/PropDemo'
import { MapDemo1 } from './components/MapDemo1'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/propdemo' element ={<PropDemo/>}></Route>
        <Route path="/mapdemo" element = {<MapDemo1/>}></Route>
      </Routes>
    </div>
  )
}

export default App
