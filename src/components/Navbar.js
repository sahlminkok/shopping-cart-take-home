import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <Link to="/">Market</Link>
    <Link to="/shopping-cart">Cart (1)</Link>
  </div>
);

export default Navbar;
