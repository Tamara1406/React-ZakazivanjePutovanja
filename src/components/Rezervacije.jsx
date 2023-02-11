import React from 'react'
import JedanAranzman from './JedanAranzman'


const Rezervacije = ({ aranzmani, aranzmani1, Obrisi, Obrisi1 }) => {
  return (<div className='rezz'>
    <div >
      <h2 style = {{marginLeft:50}}>Rezervisana putovanja avionom:</h2>
      {
        aranzmani.map((arr) => ( 
        <JedanAranzman aranzman = {arr} key = {arr.id} Obrisi = { Obrisi } rez = {0} /> 
        ))
      };
    </div>
    <div>
    <h2 style = {{marginLeft:50}}>Rezervisana putovanja autobusom:</h2>

      {
        aranzmani1.map((arr) => ( 
        <JedanAranzman aranzman = {arr} key = {arr.id} Obrisi1 = { Obrisi1 } rez = {5} /> 
        ))
      };
    </div>
  </div>)
}

export default Rezervacije
