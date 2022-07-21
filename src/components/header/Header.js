import React from "react";
import "./styles.css";
import Logo from "../../images/logo.svg";
import Cart from "../../images/shopping_basket.svg";
import Search from "../../images/search.svg";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <h1>Shopp</h1>
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className="search-container">
        <input type="text" className="header-search-input" />
        <div className="icon-container">
          <img src={Search} alt="search button" />
        </div>
      </div>
      <div className="link-container">
        <ul>
          <li>Sign In</li>
          <li>Returns</li>
          <li>
            <img src={Cart} alt="cart" />
          </li>
          <li>0</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
