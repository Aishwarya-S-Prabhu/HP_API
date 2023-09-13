import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate();

  return (
    <div className="dispBG">
      <button onClick={() => navigate(-1)}><img src="../icons/arrow_back.svg" alt="back"/></button>
   
    <div className="containerDisp">
    <h1>Welcome to you classroom</h1>
     <div className="data">
      <Link to='/potions'>
        <div className="potionsDisp">
          <img src="../assets/potions.jpeg" alt="potions" className="disp"/>
        <div className="box">
          <h2>Potions</h2>
        </div>
        </div>
        </Link>
        <Link to="/spells">
        <div className="spellsDisp">
          <img src="../assets/spells.jpeg" alt="spells" className="disp"/>
        <div className=" box">
          <h2>Spells</h2>
        </div>
        </div>
        </Link>
        <Link to="/wizards">
        <div className="wizardDisp">
          <img src="../assets/wizards.jpeg" alt="wizards" className="disp"/>
        <div className=" box">
          <h2>Wizards</h2>
        </div>
        </div>
        </Link>
      </div>
      <p>Be the Witch or Wizard You Want to be</p>
      <p>Learn spells, brew potions, forge relationships, and master skills to become the witch or wizard you want to be.</p>
     
    </div>
    </div>
  );
};

export default About;
