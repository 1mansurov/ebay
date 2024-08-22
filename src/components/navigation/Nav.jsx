import React from 'react';
import './Nav.css';
import navimg from '../../images/nav.svg'

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__content">
        <ul className="nav__links">
          <li>Hi! <a href="#">Sign in</a> or <a href="#">register</a></li>
          <li><a href="#">Daily Deals</a></li>
          <li><a href="#">Brand Outlet</a></li>
          <li><a href="#">Help & Contact</a></li>
        </ul>
        <ul className="nav__actions">
          <li><a href="#">Sell</a></li>
          <li>
            <select>
              <option>Watchlist</option>
            </select>
          </li>
          <li>
            <select>
              <option>My eBay</option>
            </select>
          </li>
          <li><a href="#"><i className="bell-icon"></i></a></li>
          <li><a href="#"><i className="cart-icon"></i></a></li>
        </ul>
      </div>
      <div className="nav__search">
        <img src="navimg" alt="eBay" className="nav__logo" />
        <input type="text" placeholder="Search for anything" className="nav__searchInput" />
        <button className="nav__searchButton">Search</button>
        <a href="#" className="nav__advancedSearch">Advanced</a>
      </div>
    </div>
  );
}

export default Nav;
