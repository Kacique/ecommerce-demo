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
        <input type="search" id="site-search" name="q"></input>
        <img src={Search} alt="search button" />
      </div>
      <ul>
        <li>Sign In</li>
        <li>Returns</li>
        <li>
          <img src={Cart} alt="cart" />
        </li>
        <li>0</li>
      </ul>
    </header>
  );
}

export default Header;
