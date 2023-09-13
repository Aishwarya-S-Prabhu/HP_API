// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Wizards = (props) => {
  const navigate = useNavigate();
    console.log(props.wizards)
    // const [click,setClick]=useState(false);
  return (
    <div className="containerPotions">
      <button onClick={() => navigate(-1)}><img src="../icons/arrow_back.svg" alt="back"/></button>
      <div className="potionsData">
      <div>
      <h1>Wizards</h1>
        <p>Greatest of the great</p>
      </div>
      <div className="wizards">

<table className="wizardTable">
  <thead>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Elixir Created</th>
  </thead>
  <tbody>
        {props.wizards.map((value,index)=>{
          return <tr key={index}>
              <td>{value.firstName}</td>
              <td>{value.lastName}</td>
              <td><ul>{value.elixirs.map((data,index)=>{
                return <li>{data.name}</li>
              })}</ul></td>
          </tr>
      })}
  </tbody>
</table>
</div>

      </div>
    </div>
  );
};

export default Wizards;
