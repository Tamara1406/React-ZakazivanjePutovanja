import React from 'react'
import { MdAirplanemodeActive, MdDirectionsBus } from "react-icons/md";

import { Link } from "react-router-dom";


const JedanAranzman = ({ aranzman, Dodaj, Obrisi,  rez }) => {
  return (
    <div className={ rez === 1 ? "card" : "card-cart" } style = {{ margin: 10 }}>
      { rez === 1 ? 
      <h3 className="card-title"> {aranzman.naziv} </h3> : 
      <></> }
      
      <img className= { rez === 1 ? "card-img-top" : "card-img-left" }
      style = {{width:200, height: 200}}
        src={aranzman.slika}
        alt="slika1"></img>
    <div className="card-body">
    { rez === 0 ? 
      <h3 className="card-title"> {aranzman.naziv} </h3> : 
      <></> }
        <p className="card-text"> {aranzman.opis} </p>
        </div>
        {rez === 1 ?
        <div className="cart-items">
          <button className='btn'  >
            <Link to="/zakaziAvion"><MdAirplanemodeActive /></Link>
          </button>
          <button className='btn'>
            <Link to="/zakaziBus"><MdDirectionsBus /></Link>
          </button>
        </div>
        : <></>}
        {rez === 0 ?
        <button className="btn" onClick = { () => Obrisi(aranzman.id) } >Otkazi</button>
        : <></> }
        {rez === 2 ?
        <button className="btn" onClick = { () => Dodaj( aranzman.id) } >Zakazi</button>
        : <></> }
        {rez === 3 ?
        <button className="btn" onClick = { () => Dodaj( aranzman.id) } >Zakazi</button>
        : <></> }
    </div>
    
  )
}

export default JedanAranzman
