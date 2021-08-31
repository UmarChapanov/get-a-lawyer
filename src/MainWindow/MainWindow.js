import React from "react";
import { Link } from "react-router-dom";
import Consultation from "../Consultation/Consultation";
import EmergencyCall from "../EmergencyCall/EmergencyCall";
import Trouble from "../Trouble/Trouble";
import "./MainWindow.css";
import Man from "../image/man.svg";

function MainWindow() {
  return (
    <section className="main">
      <div className="boss">
        <div className="title">
          <h1>Get a lawyer</h1>
          <p className="pmain">Квалифицированная юридическая помощь</p>
          <p className="pmain">Не оставайтесь один на один со своей бедой</p>
        </div>
        <div className="button">
          <div className="button-2">
            <button className="first-btn">
              <Link to="/consultation" className="first-link">
                Мне нужна консультация {Consultation}
              </Link>
            </button>
            <button className="emergency">
              <Link to="/emergency" className="emergency" className="em-link">
                Экстренный вызов{EmergencyCall}
              </Link>
            </button>
            <button className="second-btn">
              <Link to="/trouble" className="second-link">
                У меня беда{Trouble}
              </Link>
            </button>
          </div>
          <img src={Man}></img>
        </div>
      </div>
    </section>
  );
}

export default MainWindow;
