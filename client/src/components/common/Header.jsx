import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="Header">
      <div className="Menu">
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/About">About</Link> </li>
          <li> <Link to="/Portfolio">Portfolio</Link> </li>
          <li> <Link to="/Contact">Contact</Link> </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;