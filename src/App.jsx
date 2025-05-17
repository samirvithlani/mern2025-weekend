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
import { FormDemo2 } from './forms/FormDemo2'
import { FormDemo3 } from './forms/FormDemo3'
import { FindBomb } from './components/FindBomb'
import MemoryGame from './components/MemoryGame'
import { MemoryGame2 } from './components/MemoryGame2'
import SnakeGame from './components/SnakeGame'
import { ApiDemo1 } from './components/apis/ApiDemo1'
import { ApiDemo2 } from './components/apis/ApiDemo2'
import { UpdateUser } from './components/apis/UpdateUser'
import { Employees } from './components/Employees'
import { GenerateNumber } from './components/GenerateNumber'
import { ToastContainer } from 'react-toastify'
import { ProductConponent } from './components/ProductConponent'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/propdemo' element ={<PropDemo/>}></Route>
        <Route path="/mapdemo" element = {<MapDemo1/>}></Route>
        <Route path='/useStateDemo' element= {<UseStateDemo2/>}></Route>
        <Route path='/inputhandling' element = {<InputHandling/>}></Route>
        <Route path='/formdemo1' element = {<FormDemo3/>}></Route>
        <Route path='/findbomb' element ={<FindBomb/>}></Route>
        <Route path='/memorygame' element ={<MemoryGame2/>}></Route>
        <Route path='/snakegame' element = {<SnakeGame/>}></Route>
        <Route path='/apidemo1' element = {<ApiDemo1/>}></Route>
        <Route path='/apidemo2' element ={<ApiDemo2/>}></Route>
        <Route path='/updateuser/:id'element ={<UpdateUser/>}></Route>
        <Route path='/employee' element ={<Employees/>}></Route>
        <Route path='/gennum' element = {<GenerateNumber/>}></Route>
        <Route path='/prodcomp' element = {<ProductConponent/>}></Route>

      </Routes>
    </div>
  )
}

export default App
