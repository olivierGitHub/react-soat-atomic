import React from 'react';
import {NavLink} from 'react-router-dom';

function TheNavLink(props) {

  return (
    <NavLink to={props.to} className="nav-link" activeClassName="activeRoute">
      {
        props.src
          ? <img className="soat-logo" src={props.src} />
          : <span>{props.text}</span>
      }
    </NavLink>
    )
}

export default TheNavLink;
