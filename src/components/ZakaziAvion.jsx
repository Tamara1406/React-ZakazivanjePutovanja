import React from 'react'
import JedanAranzman from './JedanAranzman'


const ZakaziAvion = ({ aranzmani, Dodaj }) => {
  return (
    <div className='avion'>{
      aranzmani.map((arr) => ( <>
        <JedanAranzman aranzman = {arr} key = {arr.id} Dodaj = {Dodaj} rez = {3} />
        </>))};
    </div>
  )
}

export default ZakaziAvion
