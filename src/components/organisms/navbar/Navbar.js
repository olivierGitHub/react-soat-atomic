import React from 'react';
import Navigation from '../../molecules/navigation/Navigation';
import Search from '../../molecules/search/Search';
import './css/navbar.css';

function Navbar(props) {
  return (
        <nav className="navbar navbar-expand-sm navbar-color">
          <div className="container">
            <Navigation />
            <Search />
          </div>
        </nav>
  );
}

export default Navbar;
