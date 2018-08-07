import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => (
  <div className="Header">
    <nav className="Nav">
      <div className="Logo">
        <h1>
C
        </h1>
      </div>
      <div className="Menu">
        <ul>
          <li>
            <Link to="/">
Home
            </Link>
          </li>
          <li>
            <Link to="/About">
About
            </Link>
          </li>
          <li>
            <Link to="/Portfolio">
Portfolio
            </Link>
          </li>
          <li>
            <Link to="/Contact">
Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="Social">
        <ul>
          <li id="linkedin">
            <a href="http://www.linkedin.com/in/cpbennett4">
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </li>
          <li id="github">
            <a href="http://www.github.com/cpbennett4">
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
