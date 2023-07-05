import "./Title.css";
import Logo from "../assets/logo.png";
import Landscape from "../assets/upscaleLandscape.jpeg";
export default function Title() {
  return (
    <div className="title">
      <div className="title-bg">
        {/* <img src={Landscape} alt="Logo" id = "title-background"/> */}
        <img src={Logo} alt="Logo" id="title-logo" />
        <h4 id="title-subtitle">Ubicado en Cananea, Sonora</h4>
      </div>
    </div>
  );
}
