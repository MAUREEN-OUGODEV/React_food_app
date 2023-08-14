import React from 'react';
import'./style.css';

const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="/home">Foodie</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/home">Offer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/home">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active"href="/home">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/home">Offer</a>
        </li>
      </ul>
    </div>
    <button type="button" className="btn btn-light">Sign Up</button>
    <button  id="login"type="button" class="btn btn-outline-danger ">Login </button>
  </div>
</nav>
        </div>
    )
}
export default Navbar;