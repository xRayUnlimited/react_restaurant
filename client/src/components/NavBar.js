import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    {' '}
    <NavLink to="/about">About</NavLink>
    <NavLink to="/menu">Menu</NavLink>
  </nav>
)

export default withRouter(NavBar);