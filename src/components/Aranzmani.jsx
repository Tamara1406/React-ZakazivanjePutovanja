import React from 'react'
import JedanAranzman from './JedanAranzman'
import { Link } from "react-router-dom";
import { MdAirplanemodeActive, MdDirectionsBus } from "react-icons/md";



const Aranzmani = ({ aranzmani  }) => {
  

  return ( <>
    <div className='all-products'>
      {
        aranzmani.map((arr) => ( <JedanAranzman aranzman = {arr} key = {arr.id}  rez = {1}/> ))
      }
      
        
  </div>
  <div>
          <h2 style = {{marginLeft: 50}} >Rezervisi let: <Link to="/zakaziAvion"> <button className='btn' ><MdAirplanemodeActive /></button></Link></h2>
            
          
            <h2 style = {{marginLeft: 50}} >Rezervisi putovanje busom: <Link to="/zakaziBus"><button className='btn' ><MdDirectionsBus /></button></Link></h2>
            
          
          </div> 
          </>)
}

export default Aranzmani
