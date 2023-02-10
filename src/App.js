import './App.css';
import NavBar from './components/NavBar';
import Aranzmani from './components/Aranzmani';

function App() {
  const aranzmani = [
    {
      id: 1,
      naziv: "Rim",
      opis:"Rim (ital. Roma) je glavni grad Italije i regije Lacio, takođe najveći i najbrojniji grad u Italiji sa oko 2,8 miliona stanovnika",
      brojDana: 6,
      cena: 26000
    },
    {
      id: 2,
      naziv: "Madrid",
      opis:"Madrid je glavni grad Kraljevine Španije. Madrid je, kako od nacionalnog, tako i od internacionalnog značaja za trgovinu i finansije i politički je i kulturni centar Španije.",
      brojDana: 5,
      cena: 28000
    },{
      id: 3,
      naziv: "Temisvar",
      opis:"Temišvar grad je u Rumuniji. Najveći je grad Banata, leži na reci Begej i sedište je okruga Timiš.",
      brojDana: 2,
      cena: 6800
    },{
      id: 4,
      naziv: "Bec",
      opis: "Grad leži na Dunavu u najistočnijem delu Austrije nedaleko od granice sa Slovačkom, Mađarskom i Češkom.",
      brojDana: 5,
      cena: 19000
    },{
      id: 5,
      naziv: "Moskva",
      opis: "Moskva glavni je i najveći grad Rusije i najveći grad u Evropi. Nalazi se na reci Moskvi i obuhvata površinu od 2561,5 km². ",
      brojDana: 4,
      cena: 24000
    },
  ]

  function Dodaj( naziv ){
    
  }

  return (
    <div className="App">
      <NavBar />
        <Aranzmani aranzmani ={ aranzmani } Dodaj = { Dodaj } />
    </div>
  );
}

export default App;
