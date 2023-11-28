
import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
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
    <Link className="navbar-brand" href="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <NavLink to={'home'} className="nav-link active" aria-current="page" href="/home">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to={'about'} className="nav-link" href="/about">About</NavLink>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/">Pricing</a>
        </li>
    
      </ul>
    </div>
  
  </div>
</nav>
  

           <div id="detail">
            <Outlet />
           </div>
            </>
)};





