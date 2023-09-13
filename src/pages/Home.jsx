import { Link } from "react-router-dom";
// import { Wave } from "react-animated-text";
// import BackgroundMusic from '../components/BackgroundMusic';
// import ReactAudioPlayer from "react-audio-player";

const Home = (props) => {
  // let music=prompt("Do you need background music?");
  // console.log(music);
  // props.sound.play();
  <div className="App">
  {/* <ReactAudioPlayer
    src="../assets/hpBgMusic.mp3"
    autoPlay
    loop
  /> */}
</div>
  return (
    
    <div className="container">
      {/* <audio id="audio" loop autoplay src="../assets/hpBgMusic.mp3" type="audio/mpeg" />  */}
      {/* <BackgroundMusic /> */}
      <div className="landingPage">
        <h1 className="welcome">Welcome to </h1>
        <p className="titleName">HOGWARTS</p>
        {/* <Wave text="HOGWARTS" effect="fadeOut"  className="titleName"/> */}
      </div>
      <Link to="/sorting">
        <img
          src="../assets/owl.png"
          alt="owl"
          onClick={() => {
            console.log("Go to next page");
          }}
        />
        {/* <p className="note">Click to recieve the letter</p> */}
      </Link>
    </div>
  );
};

export default Home;

// <div>
// <h1>Welcome to Hogwarts</h1>
// <p>You may collect your admission and report to campus on 10 Sept</p>
// </div>
// <div className="backOwl">
//   <Link to="/sorting">
//     <img
//       src="../assets/owl.png"
//       alt="owl"
//       onClick={() => {
//         console.log("Go to next page");
//       }}
//     />
//               <p className="note">Click to recieve the letter</p>
//   </Link>

// </div>
