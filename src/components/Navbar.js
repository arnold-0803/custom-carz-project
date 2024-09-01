import {MenuItems} from "../data/MenuItems";
import { NavLink, Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useState } from "react";


const Navbar = ({cartCount}) => {

  const [display, setDisplay] = useState(false);

  function handleClick () {
    setDisplay(!display)
  }
  return (
    <div className="navbar">
      <Link to={"/"} className="nav-logo">
        <h2>arn
          <span>
              <i className="fa-solid fa-gear"></i>
          </span>ld
        </h2>
      </Link>
      <div className="menu-wrapper">
        <div className={display ? "menu-bar active" : "menu-bar"}>
          <ul className="menu-list">
            {MenuItems.map((item, index) => 
              <li key={index}>
                <NavLink to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </NavLink>
              </li>  
            )}
          </ul>
        </div>
        <div className="menu-bar-plus-cart">
          <div className="cart">
            <NavLink to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && <span>{cartCount}</span>}
            </NavLink>        
          </div>
          <div className="hamburger-menu">
            <i 
              className={display ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Navbar;