
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import Home from './home';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
