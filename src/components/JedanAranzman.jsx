import React from 'react'



const JedanAranzman = ({ aranzman, Dodaj, Obrisi, Obrisi1, rez }) => {
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
      <h3 className="card-title"> {aranzman.naziv},  { aranzman.brojDana } dana, cena: { aranzman.cena }</h3> : 
      <></> }
      { rez === 5 ? 
      <h3 className="card-title"> {aranzman.naziv},  { aranzman.brojDana } dana, cena: { aranzman.cena }</h3> : 
      <></> }
    { rez === 2 ? <>
      <h3 className="card-title"> {aranzman.naziv},  { aranzman.brojDana } dana, cena: { aranzman.cena }</h3>
      <p className="card-text"> {aranzman.opis} </p> </> :
      <></> }
    { rez === 3 ? <>
      <h3 className="card-title"> {aranzman.naziv},  { aranzman.brojDana } dana, cena: { aranzman.cena } </h3>
      <p className="card-text"> {aranzman.opis} </p> </> : 
      <></> }
    { rez === 1 ? 
      <p className="card-text"> {aranzman.opis} </p> : 
      <></> }

        <br/>

        </div>
        
        {rez === 0 ?
        <button className="btn" onClick = { () => Obrisi(aranzman.id) } >Otkazi</button>
        : <></> }
        {rez === 5 ?
        <button className="btn" onClick = { () => Obrisi1(aranzman.id) } >Otkazi</button>
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
