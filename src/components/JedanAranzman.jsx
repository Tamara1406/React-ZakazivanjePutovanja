import React from 'react'



const JedanAranzman = ({ aranzman, Dodaj }) => {
  return (
    <div className="card" style = {{ margin: 10 }}>
      <h3 className="card-title"> {aranzman.naziv} </h3>
      <img className='card-img-top' 
        src="https://picsum.photos/200"
        alt="slika1"></img>
    <div className="card-body">
        <p className="card-text"> {aranzman.opis} </p>
    </div>
    <button className="btn" onclick = { () => Dodaj(aranzman.naziv) } >Zakazi</button>
    </div>
  )
}

export default JedanAranzman
