import React from 'react'
import JedanAranzman from './JedanAranzman'

const ZakaziBus = ({aranzmani, Dodaj}) => {
  return (
    <div>{
      aranzmani.map((arr) => ( <>
        <JedanAranzman aranzman = {arr} Dodaj = {Dodaj} key = {arr.id} rez = {2} />
        </>))};
    </div>
    
  )
}

export default ZakaziBus
