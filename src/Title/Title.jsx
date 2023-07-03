import "./Title.css" 
import Logo from "../assets/logo.png"
export default function Title() {
    return (
        <div className="title">
            <img src={Logo} alt="Logo" id = "title-logo"/>
            <h4 id = "title-subtitle">Ubicado en Cananea, Sonora</h4>
        </div>
    );
}