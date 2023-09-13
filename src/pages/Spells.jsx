import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const Spells = (props) => {
  const navigate = useNavigate();
  console.log(props.spells[0])
  return (
    <div className="containerSpells">
      <button onClick={() => navigate(-1)}><img src="../icons/arrow_back.svg" alt="back"/></button>
      <div className="data">
      <div>
      <h1>Spells</h1>
        <p>Learn your spells</p>
      </div>

        <div className="spells">

		  <table className="spellTable">
			<thead>
				<th>Name</th>
				<th>Incantation</th>
			</thead>
			<tbody>
			{/* <tr>
				<th>{props.input[0].name}</th>
				<th>{props.input[0].incantation}</th>
			</tr> */}
		  		{props.spells.map((value,index)=>{
					return <tr key={index}>
						<td>{value.name}</td>
						<td>{value.incantation}</td>
					</tr>
				})}
			</tbody>
		  </table>
        </div>

      </div>
    </div>
  );
};

export default Spells;
