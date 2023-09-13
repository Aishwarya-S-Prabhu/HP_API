import React, { useState, useEffect } from "react";
import Display from "../pages/Display";
import Home from "../pages/Home";
import Sorting from "../pages/Sorting";
import Spells from "../pages/Spells";
import Potions from "../pages/Potions";
import Wizards from "../pages/Wizards";
import House from "../pages/House";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import BackgroundMusic from "../components/BackgroundMusic";

function App() {
  const [spells, setSpells] = useState([]);
  const [potions, setPotions] = useState([]);
  const [wizards, setWizards] = useState([]);
  const [house, setHouse] = useState([]);
//   var sound= new Audio("../assets/hpBgMusic.mp3");
  // sound.play();
  const chooseHouse = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
  const [index, setIndex] = useState("");

  // elixer API: https://wizard-world-api.herokuapp.com/Elixirs
  // spell API: https://wizard-world-api.herokuapp.com/Spells
  // wizard API: https://wizard-world-api.herokuapp.com/Wizards
  // house APO: https://wizard-world-api.herokuapp.com/Houses

  useEffect(() => {
    axios
      .all([
        axios.get(`https://wizard-world-api.herokuapp.com/Spells`),
        axios.get(`https://wizard-world-api.herokuapp.com/Elixirs`),
        axios.get("https://wizard-world-api.herokuapp.com/Wizards"),
        axios.get("https://wizard-world-api.herokuapp.com/Houses"),
      ])
      .then(
        axios.spread((Spell, Elixer, Wizard, House) => {
          setSpells(Spell.data);
          setPotions(Elixer.data);
          setWizards(Wizard.data);
          setHouse(House.data);
        })
      )
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display spells={spells} />} />
        <Route
          path="/sorting"
          element={
            <Sorting
              chooseHouse={chooseHouse}
              setIndex={setIndex}
              index={index}
            />
          }
        />
        <Route path="/spells" element={<Spells spells={spells} />} />
        <Route path="/potions" element={<Potions potions={potions} />} />
        <Route path="/wizards" element={<Wizards wizards={wizards} />} />
        <Route
          path="/house"
          element={
            <House house={house} index={index} chooseHouse={chooseHouse} />
          }
        />
        <Route
          path="/about"
          render={() => <BackgroundMusic audioSrc="../assets/hpBgMusic.mp3" />}
        />
      </Routes>
    </>
  );
}

export default App;

// first try

// let aray = [];
// // let name=prompt("Please enter your name","Wizard/Witch");
// async function logMovies() {
//   const response = await fetch(
//     "https://wizard-world-api.herokuapp.com/Spells"
//   );
//   const movies = await response.json();
//   console.log(movies);
//   aray = movies;
// }
//  logMovies();
// /* console.log(aray[0].incantation); */
// return (
//   <div className="container">
//     <div className="landingPage">
//       <img src="../assets/owl.jpeg" alt="owl" onClick={()=>{
//           console.log("Go to next page");
//       }} />
//       <h1>Welcome to Hogwarts</h1>
//       <p>You may collect your admission and report to campus on 10 Sept</p>
//     </div>
//   </div>
// );

//     async function dataFetch(){
//         let x= await fetch( "https://wizard-world-api.herokuapp.com/Spells");
//         let y= await x.json();
//         setInput(y);
//         // console.log(y);
//     }
// dataFetch();
