import React, { useState } from "react";
import "./consultation.css";

function Consultation() {
  const [name, setname] = useState("");
  const [branch, setbranch] = useState("");
  const [description, setdescription] = useState("");
  const [type, settype] = useState(false);
  console.log(name);
  console.log(branch);
  console.log(description);
  console.log(type);

  function setnameHandler(e) {
    setname(e.target.value);
  }

  function setbranchHandler(e) {
    setbranch(e.target.value);
  }

  function setdescriptionHandler(e) {
    setdescription(e.target.value);
  }

  function settypeHandler(e) {
    settype(e.target.value);
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
        <p>В какой отрасли права вам требуется консультация:</p>
        <select className="consSelect" onChange={setbranchHandler}>
          <option></option>
          <option>Конституционное право</option>
          <option>Административное право</option>
          <option>Гражданское право</option>
          <option>Семейное право</option>
          <option>Трудовое право</option>
          <option>Уголовное право</option>
          <option>Финансовое право</option>
          <option>Гражданско-процессуальное право</option>
          <option>Международное право</option>
        </select>
        <p>Краткое описание</p>
        <input
          onChange={setdescriptionHandler}
          className="consInput"
          type="text"
          placeholder="попал в дтп, вопрос связан с исполнительным производством"
        ></input>
        <p>Как вы хотите получить консультацию?</p>
        <select className="consSelect" onChange={settypeHandler}>
          <option></option>
          <option>По телефону</option>
          <option>При личной встрече</option>
        </select>
        {type === "По телефону" ? (
          <input
            className="consInput"
            type="numder"
            placeholder="+7(XXX)XXXX-XX-XX"
          ></input>
        ) : null}
        {type === "При личной встрече" ? (
          <input
            className="consInput"
            type="text"
            placeholder="укажите адрес и номер телефона"
          ></input>
        ) : null}
        <button className="button-cons">Отправить</button>
      </div>
    </>
  );
}

export default Consultation;
