import Wave from "react-wavify";
import coffeeCup from "../Assets/coffeeCup.png";

const LoadingIcon = (props) => {
  return (
    <div className="loadingIcon">
      <div className="waveContainer">
        <Wave
          fill="#6b3721"
          className="wave1"
          options={{ points: 4, speed: 0.5, amplitude: 10 }}
        />
        <Wave
          fill="#cca178"
          className="wave2"
          options={{ points: 3, speed: 0.4, amplitude: 15 }}
        />
        <img className="inverse coffeeCup" src={coffeeCup} alt="coffee cup" />
      </div>
      <div className="loadingMsgContainer">
        <p> Coffee filling a loading Icon</p>
      </div>
    </div>
  );
};

export default LoadingIcon;
