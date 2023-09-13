import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { style } from "@mui/system";

const About = (props) => {
  const navigate = useNavigate();
  // const house = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];
  // const [index, setIndex] = useState("");
  const [click,setClick]=useState(false);
  return (
    <div className="containerSort">
      <button onClick={() => navigate(-1)}>
        <img src="../icons/arrow_back.svg" alt="back" />
      </button>
      <div className="sortBody">
      <div className="sortImage">
          <img
            className="sortHatImage"
            src="../assets/sortingHat.png"
            alt="sorting hat"
            style={{cursor:'pointer'}}
            onClick={() => {
              setClick(true);
              let a = Math.floor(Math.random() * 4);
              props.setIndex(a);
            }}
          />
          <Link to={'/house'}>
          <p className="houseData">Know more about your house?</p>
          </Link>
        </div>
        <div className="sortData">
          <p className="sortTitle">The Sorting Ceremony</p>
          <p>The sorting hat will take into account your character when sorting you into your house</p>
          {/* ../assets/"+{house[index]}+".png */}
          {click&&<img className="houseLogo" src={`../assets/${props.chooseHouse[props.index]}.png`} alt="house symbol" />}
          {props.index !== "" ? <p className="sortHouseData">You are in {props.chooseHouse[props.index]}</p> : null}
          <div className="sortButAll">
          <Link to={"/display"}>
          <button className="sortBut">Accept house</button>
          </Link>
          <button className="sortBut" onClick={() => {
            setClick(true);
              let b = Math.floor(Math.random() * 4);
              props.setIndex(b);
            }}>Change house</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;

  /* <div className="containerSort">

<button onClick={() => navigate(-1)}>
  <img src="../icons/arrow_back.svg" alt="back" />
</button>
      <h1>Sorting Ceremony</h1>
<div className="sortBody">

  <img
    src="../assets/sortingHat.png"
    alt="sorting hat"
    onClick={() => {
      let a = Math.floor(Math.random() * 4);
      setIndex(a);
    }}
  />
  {index !== "" ? <p>Yeayyy... you are in {house[index]}</p> : null}
</div>
<Link to={"/display"}>
  <button className="explore">Lets explore</button>
</Link>
</div> */

