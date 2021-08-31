import React from "react";
import "./emergencyCall.css";

function EmergencyCall() {
  return (
    <div className="emergencyWindow">
      <p>Введите ваш контактный номер телефона:</p>
      <input className="emInput" type="number"></input>

      <button className='bellemergency'>ВЫЗОВ</button>
    </div>
  );
}

export default EmergencyCall;
