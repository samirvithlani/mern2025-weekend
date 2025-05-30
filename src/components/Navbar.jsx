import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const cartState = useSelector((state)=>state.cart.cart)
  console.log(cartState)
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/propdemo">Prop Demo</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/mapdemo">map Demo</Link>
      </li>
      
      
      <li class="nav-item active">
        <Link class="nav-link" to="/useStateDemo">useState Demo</Link>
      </li>
      
      <li class="nav-item active">
        <Link class="nav-link" to="/inputhandling">inputhandling Demo</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/formdemo1">formdemo1</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/findbomb">findbomb</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/memorygame">memorygame</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/snakegame">snakegame</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/apidemo1">API DEMO 1</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/apidemo2">API DEMO 2</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/employee">EMPLOYEES</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/gennum">GEN</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/prodcomp">prod comp</Link>
      </li>
      <h1 style={{color:"red"}}>{cartState.length}</h1>
    </ul>
    
  </div>
</nav>
    </div>
  )
}
