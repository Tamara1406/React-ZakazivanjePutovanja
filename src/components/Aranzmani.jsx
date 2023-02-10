import React from 'react'
import JedanAranzman from './JedanAranzman'

const Aranzmani = ({ aranzmani, Dodaj }) => {
  

  return (
    <div className='all-products'>
      {
        aranzmani.map((arr) => ( <JedanAranzman aranzman = {arr} key = {arr.id} Dodaj = { Dodaj }/> ))
      };
    </div>
  )
}

export default Aranzmani
