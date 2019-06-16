import React from 'react';
import TheNavLink from '../../atoms/nav-link/TheNavLink';

function Navigation(props) {
  return (
        <React.Fragment>
          <TheNavLink to="/" src="soat-logo.png" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <TheNavLink to="/presentation" text="Présentons" />
            </li>
            <li className="nav-item">
              <TheNavLink to="/formation" text="Formons" />
            </li>
            <li className="nav-item">
              <TheNavLink to="/partage" text="Partageons" />
            </li>
          </ul>
        </React.Fragment>
  );
}

export default Navigation;
