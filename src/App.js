import './App.css';
import NavBar from './components/NavBar';
import Aranzmani from './components/Aranzmani';
import { BrowserRouter, Routes, Route } from"react-router-dom";
import Rezervacije from './components/Rezervacije';
import ZakaziAvion from './components/ZakaziAvion';
import ZakaziBus from './components/ZakaziBus';
import {useState} from "react";


function App() {
  const [ zakazani, setZakazani ] = useState([]);
  const [aranzmani, setAranzmani] = useState([
    {
      id: 1,
      naziv: "Rim",
      slika: "https://www.vodickrozrim.info/wp-content/uploads/009d673615524908bc0ff918131dac3b.jpg",
      opis:"Rim (ital. Roma) je glavni grad Italije i regije Lacio, takođe najveći i najbrojniji grad u Italiji sa oko 2,8 miliona stanovnika",
      brojDana: 6,
      cena: 26000,
      broj: 0
    },
    {
      id: 2,
      naziv: "Madrid",
      slika: "https://media.gq-magazine.co.uk/photos/5d1396399fa60179288385ed/3:4/w_960,h_1280,c_limit/Madrid-02-GQ-17May17_b.jpg",
      opis:"Madrid je glavni grad Kraljevine Španije. Madrid je, kako od nacionalnog, tako i od internacionalnog značaja za trgovinu i finansije i politički je i kulturni centar Španije.",
      brojDana: 5,
      cena: 28000,
      broj: 0
    },{
      id: 3,
      naziv: "Temisvar",
      slika: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Temi%C5%A1var%2C_Rumunija_49.jpg",
      opis:"Temišvar grad je u Rumuniji. Najveći je grad Banata, leži na reci Begej i sedište je okruga Timiš.",
      brojDana: 2,
      cena: 6800,
      broj: 0
    },{
      id: 4,
      naziv: "Bec",
      slika: "https://soleazur.rs/uploads/0000/1/2021/02/25/bec-ispod-mape-1.jpg",
      opis: "Grad leži na Dunavu u najistočnijem delu Austrije nedaleko od granice sa Slovačkom, Mađarskom i Češkom.",
      brojDana: 5,
      cena: 19000,
      broj: 0
    },{
      id: 5,
      naziv: "Moskva",
      slika: "https://bookaweb.s3.eu-central-1.amazonaws.com/media/26160/moscow-gcb268d609_1280-%281%29.jpg",
      opis: "Moskva glavni je i najveći grad Rusije i najveći grad u Evropi. Nalazi se na reci Moskvi i obuhvata površinu od 2561,5 km². ",
      brojDana: 4,
      cena: 24000,
      broj: 0
    },
  ])

  function Dodaj(  id ){
    aranzmani.forEach((arr) => {
      if(arr.id === id){
        arr.broj = 1;
      }
    });
    let noviNiz = aranzmani.filter((arr) => arr.broj ===1);
    setZakazani(noviNiz);
  }
  
  function Obrisi( id ){
    aranzmani.forEach((arr) => {
      if(arr.id === id){
        arr.broj = 0;
      }
    });
    let noviNiz = aranzmani.filter((arr) => arr.broj ===1);
    setZakazani(noviNiz);
  }

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route 
        path = "/"
        element = { <Aranzmani aranzmani ={ aranzmani } /> }
         />
         <Route
         path = "/rezervacije"
         element = { <Rezervacije aranzmani = { zakazani } Obrisi = { Obrisi }  /> }
          />
          <Route
         path = "/zakaziAvion"
         element = { <ZakaziAvion aranzmani = { aranzmani } Dodaj = { Dodaj } /> }
          />
          <Route
         path = "/zakaziBus"
         element = { <ZakaziBus aranzmani = { aranzmani } Dodaj = { Dodaj } /> }
          />
      </Routes>

      
        
    </BrowserRouter>
  );
}

export default App;
