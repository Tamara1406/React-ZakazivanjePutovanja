import React from "react";
import { MdAirplanemodeActive } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBar">
        <Link to = "/">Agencija</Link>
        <div className="cart-items">
            <MdAirplanemodeActive />
        </div>
        <Link to = "/rezervacije">Moje rezervacije</Link>

    </div>
  );
}

export default NavBar;
