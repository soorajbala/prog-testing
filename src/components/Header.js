import React from 'react';
import back from '../Slices/back.png';
import search from '../Slices/search.png';

import './Header.scss';

function Header() {
  return (
    <div className="Header">
      <h1 className="Header__headline-wrap">
        <button className="Header__back-btn">
          <img className="Header__back-btn-icon" src={back} alt="Back" />
        </button>
        Romantic Comedy
      </h1>
      <button className="Header__search-btn">
        <img className="Header__search-btn-icon" src={search} alt="Search" />
      </button>
    </div>
  );
}

export default Header;
