import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { PropDemo } from './components/PropDemo'
import { MapDemo1 } from './components/MapDemo1'
import { UesStateDemo } from './components/UesStateDemo'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { InputHandling } from './components/InputHandling'
import { FormDemo1 } from './forms/FormDemo1'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/propdemo' element ={<PropDemo/>}></Route>
        <Route path="/mapdemo" element = {<MapDemo1/>}></Route>
        <Route path='/useStateDemo' element= {<UseStateDemo2/>}></Route>
        <Route path='/inputhandling' element = {<InputHandling/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo1/>}></Route>

      </Routes>
    </div>
  )
}

export default App
