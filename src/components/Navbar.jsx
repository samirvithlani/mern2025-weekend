import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
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
    </ul>
    
  </div>
</nav>
    </div>
  )
}
