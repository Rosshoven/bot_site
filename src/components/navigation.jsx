
import React from 'react';
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Navigation() {
  return (
    // <nav>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><NavLink to="/about">About</NavLink></li>
    //   </ul>Name
    // </nav>
  <>
  <nav style={{position: 'fixed', width: '100%', backgroundColor: 'darkgreen'}} className="navbar navbar-expand-lg bg-body-tertiary">
   <div className="container-fluid">
    <a href='home' className="navbar-brand" >Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a href='home' className="nav-link active" aria-current="page">Home</a>
        </li>

        <li className="nav-item">
          <a href='about' className="nav-link">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>

        {/* <li class="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </NavLink>
          <ul class="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}

      </ul>
    </div>
  
  </div>
</nav>
  

           <div id="detail">
            <Outlet />
           </div>
            </>
)};





