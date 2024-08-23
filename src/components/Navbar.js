import {MenuItems} from "../data/MenuItems";
import { NavLink, Link } from "react-router-dom";
import "./NavbarStyles.css";
import { useState } from "react";


const Navbar = ({cartCount}) => {

  const [state, setState] = useState(true);
  const [display, setDisplay] = useState(false);

  function handleClick () {
    setState(prev => !prev);
    setDisplay(prev => !prev)
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
        <ul className={display ? "menu active" : "menu"}>
          {MenuItems.map((item, index) => 
            <li key={index}>
              <NavLink to={item.url} className={item.cName}>
                <i className={item.icon}></i> {item.title}
              </NavLink>
            </li>  
          )}
        </ul>
        <div className="menu-bar-plus-cart">
          <div className="cart">
            <NavLink to={"/cart"}>
              <i className="fa-solid fa-cart-shopping"></i>
              {cartCount > 0 && <span>{cartCount}</span>}
            </NavLink>        
            </div>
            <div className="hamburger-menu">
                <i 
                  className={state ? "fa-solid fa-bars" : "fa-solid fa-xmark"}
                  onClick={handleClick}
                ></i>
              </div>
          </div>
      </div>
    </div>
  );
}
 
export default Navbar;