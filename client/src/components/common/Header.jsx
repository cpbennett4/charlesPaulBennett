import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <div className="Header">
    <nav className="Nav">
      <div className="Logo">
        <h1>
          <Link to="/">
            CPB
          </Link>
        </h1>
      </div>
      <div className="Menu">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Social">
        <ul>
          <li id="linkedin">
            <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/cpbennett4">
              <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li id="github">
            <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/cpbennett4">
              <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
