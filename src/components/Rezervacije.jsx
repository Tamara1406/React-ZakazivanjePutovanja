import React from 'react'
import JedanAranzman from './JedanAranzman'


const Rezervacije = ({ aranzmani, Obrisi }) => {
  return (
    <div>
      {
        aranzmani.map((arr) => ( 
        <JedanAranzman aranzman = {arr} key = {arr.id} Obrisi = { Obrisi } rez = {0} /> 
        ))
      };
    </div>
  )
}

export default Rezervacije
