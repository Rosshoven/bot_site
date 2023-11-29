
import React from 'react';
import { Outlet } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BOT_Logo from "../images/BOT_Logo.png";

export default function Navigation() {
  return (
<>
  <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
   <div className="container-fluid">
    <a href='home' className="navbar-brand">
      <img src={BOT_Logo} alt="Boys On Trial Logo" width="53" height="53" style={{borderRadius: '5%'}}></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="nav-item">
          <a href='home' className="nav-link active" aria-current="page">Home</a>
        </li>

        <li className="nav-item">
          <a href='about' className="nav-link active">About</a>
        </li>

        <li className="nav-item">
          <a href='/pics' className="nav-link active">Pics</a>
        </li>

        <li className="nav-item dropdown">
          <a href='/' className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Albums
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/album1">Album 1</a></li>
            <li><a className="dropdown-item" href="/about">Album 2</a></li>
            <li><a className="dropdown-item" href="/album3">Album 3</a></li>
          </ul>
        </li>

      </ul>
    </div>
  
  </div>
</nav>
  

  <div style={{margin: '0', padding: '0', backgroundColor: 'red'}} id="detail">
    <Outlet />
  </div>
</>
)};





