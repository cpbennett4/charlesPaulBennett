import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import $ from 'jquery';

const toggleShowing = () => {
  if (document.documentElement.clientWidth <= 600) {
    // get nav element
    const $nav = document.getElementsByTagName('nav')[0];
    // toggle class Showing
    $($nav).toggleClass('Showing');
  }
};

const Header = (props) => {
  const { removePdf } = props;
  return (
    <div className="Header">
      <button className="Handle" type="button" onClick={toggleShowing}>
        <h3>
          Menu
        </h3>
        <FontAwesomeIcon icon="bars" />
      </button>
      <nav className="Nav">
        <div className="Logo">
          <h1>
            <Link to="/" onClick={removePdf}>
              CPB
            </Link>
          </h1>
        </div>
        <div className="Menu">
          <ul>
            <li>
              <NavLink
                exact
                to="/"
                onClick={() => {
                  removePdf();
                  toggleShowing();
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" onClick={toggleShowing}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Portfolio" onClick={toggleShowing}>
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" onClick={toggleShowing}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="Social">
          <ul>
            <li id="linkedin">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.linkedin.com/in/cpbennett4"
                onClick={toggleShowing}
              >
                <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />
              </a>
            </li>
            <li id="github">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.github.com/cpbennett4"
                onClick={toggleShowing}
              >
                <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
              </a>
            </li>
            <li id="medium">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.medium.com/@cpbennett4"
                onClick={toggleShowing}
              >
                <FontAwesomeIcon size="lg" icon={['fab', 'medium']} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

Header.propTypes = {
  removePdf: PropTypes.func.isRequired,
};

export default Header;
