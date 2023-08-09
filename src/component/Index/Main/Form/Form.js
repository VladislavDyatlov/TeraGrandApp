import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import "./Form.scss";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";

export function Form() {
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
    <div className="container">
      <div className="container__row">
        <div className="container__text">
          <h3 className="container__text--title" data-aos="fade-right">
            Оставь заявку сейчас чтобы получить фитбек в течении 15 минут
          </h3>
          <div className="container__photo" data-aos="fade-up">
            <img
              src="https://sc02.alicdn.com/kf/U3453988dbd9f41db9e9fb0a5dea19409v/142030525/U3453988dbd9f41db9e9fb0a5dea19409v.png"
              width="35"
              height="35"
              className="container__photos"
            />
            <p>
              <strong>Не знаете с чего начать?</strong> Мы ответим на ваши
              вопросы и поможем подобрать лучший вариант
            </p>
          </div>
          <div className="container__photo" data-aos="fade-up">
            <img
              src="https://sc02.alicdn.com/kf/U3453988dbd9f41db9e9fb0a5dea19409v/142030525/U3453988dbd9f41db9e9fb0a5dea19409v.png"
              width="35"
              height="35"
              className="container__photos"
            />
            <p>
              <strong>Как рассчитать стоимость?</strong> Мы ответим на ваши
              вопросы и поможем подобрать лучший вариант
            </p>
          </div>
          <div className="container__photo" data-aos="fade-up">
            <img
              src="https://sc02.alicdn.com/kf/U3453988dbd9f41db9e9fb0a5dea19409v/142030525/U3453988dbd9f41db9e9fb0a5dea19409v.png"
              width="35"
              height="35"
              className="container__photos"
              onClick={() => alert.show("Please", "error")}
            />
            <p>
              <strong>Какую автомобиль выбрать?</strong> Мы ответим на ваши
              вопросы и поможем подобрать лучший вариант
            </p>
          </div>
        </div>
        <form>
          <div className="container__form">
            <h3>Отправь заявку сейчас</h3>
            <TextField
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
              className="text_mi"
              InputLabelProps={{ className: "text_ui" }}
              data-aos="fade-left"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Введите ваш номер"
              variant="standard"
              className="text_mi"
              InputLabelProps={{ className: "text_ui" }}
              data-aos="fade-left"
              onChange={(e) => setPhone(e.target.value)}
            />
            <div>
              <button onClick={() => setCollection(name, phone)}>
                Отправить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
