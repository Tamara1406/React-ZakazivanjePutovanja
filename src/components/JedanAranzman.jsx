import React from 'react'

const JedanAranzman = () => {
  return (
    <div className="card" style = {{ margin: 10 }}>
      <h3 className="card-title">Naslov</h3>
      <img className='card-img-top' 
        src="https://picsum.photos/200"
        alt="bla bla"></img>
    <div className="card-body">
        <p className="card-text">Opis aranzmana</p>
      </div>
    </div>
  )
}

export default JedanAranzman
