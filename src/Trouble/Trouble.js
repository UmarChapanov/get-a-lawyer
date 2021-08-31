import React, { useState } from "react";
import "./trouble.css";

function Trouble() {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [adress, setadress] = useState("");
  const [situation, setsituation] = useState("");
  console.log(name);
  console.log(phone);
  console.log(adress);
  console.log(situation);

  function setnameHandler(e) {
    setname(e.target.value);
  }
  function setphoneHandler(e) {
    setphone(e.target.value);
  }

  function setadressHandler(e) {
    setadress(e.target.value);
  }

  function setsituationHandler(e) {
    setsituation(e.target.value);
  }

  return (
    <>
      <div className="consult">
        <p>Введите ваше имя:</p>
        <input
          onChange={setnameHandler}
          className="consInput"
          type="text"
        ></input>
        <input
          onChange={setphoneHandler}
          className="consInput"
          type="number"
          placeholder="Введите ваш номер телефона"
        ></input>
        <input
          onChange={setadressHandler}
          className="consInput"
          type="text"
          placeholder="Укажите адрес"
        ></input>
        <p>Опишите ситуацию</p>
        <textarea
          className="textarea"
          onChange={setsituationHandler}
          rows="10"
          cols="50"
        ></textarea>
        <button className="button-trouble">Отправить</button>
      </div>
    </>
  );
}

export default Trouble;
