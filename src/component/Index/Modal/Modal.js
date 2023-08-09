import React, { useState, useContext } from "react";
import "./Modal.scss";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { AlertConstext } from "../../../UseContext/Alert/AlertContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Modal = ({ active, setActive }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const alert = useContext(AlertConstext);

  const setCollection = async (name, phone) => {
    const TOKEN = "6119024977:AAH-fxkBnFCRoL0tRKNrPFal0fsmim7k5Fk";
    const CHAT_ID = "-1001952624254";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendmessage`;

    let message = `<b>Заявка с сайта!</b>\n`;
    message += `<b>Отправитель: </b> ${name}\n`;
    message += `<b>Номер телефона: </b> ${phone}\n`;

    const data = {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    };

    await fetch(URL_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>Не нашли, что искали?</h2>
        <p>Остались вопросы? Мы перезвоним вам и поможем!</p>
        <div class="form-group">
          <div>
            <TextField
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
              className="textfield"
              data-aos="fade-left"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Введите ваш номер"
              variant="standard"
              className="textfield"
              data-aos="fade-left"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <small className="modal__text">
          {" "}
          Нажимая кнопку «Жду звонка», я даю свое согласие на обработку моих
          персональных данных, в соответствии с Федеральным законом от
          27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
          целей, определенных в Согласии на обработку персональных данных *
        </small>
        <div>
          {" "}
          <Button
            variant="contained"
            color="success"
            onClick={() => setCollection(name, phone)}
          >
            Жду звонка
          </Button>
        </div>
      </div>
    </div>
  );
};
