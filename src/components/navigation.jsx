
import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    // <nav>
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><NavLink to="/about">About</NavLink></li>
    //   </ul>
    // </nav>
  
  
  
  <div>
          <nav style={{borderBottom: 'solid 1.5px green', position: 'fixed', width: '100%', backgroundColor: '#ffc4cd', fontFamily: 'Forum, cursive', fontSize: '1.5rem'}} className="nav nav-pills nav-justified navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container-fluid">

              {/* Creating a react-router-dom link for the Logo, goes to home page b/c to={'home'} */}
              <Link className="navbar-brand " to={'home'} style={{fontFamily: 'Architects Daughter, cursive', fontSize: '2rem', color: 'lightblue', textShadow: '1.5px 1.5px black', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1 style={{marginLeft: '1.2%'}}>PIGGY BANK</h1>
                <img style={{width:'70px', height: '70px', borderRadius: '50%', border: 'solid .5px black'}} alt="Logo" />
              </Link>

              {/* Bootstrap functionality for Navbar toggle button working, responsive tool for smaller screen size */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarScroll" style={{ marginLeft: '1%'}}>
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" 
                style={{bsScrollHeight: "100px"}}
                >
        
                  <li className="nav-link" >
                    <NavLink to={'home'}  className={({isActive}) => {
                    return `nav-link active${isActive ? ' bg-success hover:bg-gray-500 hover:text-white' : 'bg-gray-900 text-white'}`
                    }}>Home</NavLink>
                   </li>
                  
                  <li className="nav-link">
                  <NavLink to={'create-account'}  className={({isActive}) => {
                    return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
                    }}>Create Account</NavLink>
                    </li>

                  <li className="nav-link">
                  <NavLink to={'login'}  className={({isActive}) => {
                    return `nav-link active${isActive ? ' bg-success hover:bg-gray-700 hover:text-white' : 'bg-gray-900 text-white'}`
                    }}>Login</NavLink>
                    </li>
                </ul>
              </div>    
            </div>
           </nav>
          
           <div id="detail">
            <Outlet />
           </div>
        
        </div>         
  );
};





