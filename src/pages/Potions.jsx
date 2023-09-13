import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Potions = (props) => {
  const navigate = useNavigate();
    console.log(props.potions)
    // const [click,setClick]=useState(false);
    const [loc,setLoc]=useState("");
  return (
    <div className="containerPotions">
      <button onClick={() => navigate(-1)}><img src="../icons/arrow_back.svg" alt="back"/></button>
      <div className="potionsData">
      <div>
        <h1>Potions</h1>
        <p>Learn your potions</p>
      </div>

        <div className="potions">
          {props.potions.map((value,index)=>{
            return <div className="potionsDiv">
                <p className="potionTitle" onClick={()=>{
                  // setClick(current => !current);
                  setLoc(index);
                }}>{value.name}</p>
                {/* {click && <div className="potionContent">
                <p>Effect: {value.effect}</p>
                <p>Side effect:{value.sideEffects}</p>
                </div>} */}
                {(loc===index)&&<div className="potionContent" >
                <p>Effect: {value.effect}</p>
                <p>Side effect:{value.sideEffects}</p>
                </div>}
            </div>
          })}
        </div>

      </div>
    </div>
  );
};

export default Potions;
