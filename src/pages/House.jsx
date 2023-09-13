import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const House = (props) => {
  let choosen = props.chooseHouse[props.index];
  const navigate = useNavigate();
  console.log(props.house);
  console.log(props.chooseHouse[props.index]);
  return (
    <div className="houseBG">
      <button onClick={() => navigate(-1)}>
        <img src="../icons/arrow_back.svg" alt="back" />
      </button>
      <div className="houseDetail">

        <div>
        {props.house.map((value, index) => {
          if (choosen === value.name) {
            return (
              <div>
                  <p><span className="textColor">House Founder:</span> {value.founder}</p>
                  <p><span className="textColor">Animal:</span> {value.animal}</p>
                  <p><span className="textColor">Element:</span> {value.element}</p>
                  <p><span className="textColor">Color:</span> {value.houseColours}</p>
                  <p><span className="textColor">Ghost:</span> {value.ghost}</p>
                  <p><span className="textColor">Traits:</span></p>
                  <ul>
                    {value.traits.map((value,index)=>{
                      return <li>{value.name}</li>
                    })}
                  </ul>
                

              </div>
            );
          }

        })}
        </div>
        <div className="symbol">
          <img className="symbol" src={`../assets/icon_${props.chooseHouse[props.index]}.png`} alt="house symbol"/>
        </div>
      </div>
    </div>
  );
};

export default House;
