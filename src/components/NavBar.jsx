import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";

function NavBar() {
  return (
    <div className="navBar">
        <h3>Agencija</h3>
        <div className="cart-items">
            <MdAirplanemodeActive />
        </div>
      
    </div>
  );
}

export default NavBar;
