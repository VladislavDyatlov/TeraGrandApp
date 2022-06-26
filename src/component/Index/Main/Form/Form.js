import React, {useState, useContext} from "react";
import TextField from '@mui/material/TextField';
import './Form.scss'
import {db} from '../../../../firebase'
import { addDoc, collection } from "firebase/firestore";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";


export function Form(){

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const alert = useContext(AlertConstext)

  const setCollection = async (name, phone) =>{
    await addDoc(collection(db, "Users"), {
      Name: name,
      Number: phone,
      Date: new Date()
    })
    .then(() => {alert.show("Ваши данные успешно отправлены", "success")})
    .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
  }

    return (
      <div className="container">
        <div className="container__row">
          <div className="container__text">
            <h3 className="container__text--title" data-aos="fade-right">
              Start your journey to a better life with online practical courses
            </h3>
            <div className="container__photo" data-aos="fade-up">
              <img
                src="https://sc02.alicdn.com/kf/U3453988dbd9f41db9e9fb0a5dea19409v/142030525/U3453988dbd9f41db9e9fb0a5dea19409v.png"
                width="35"
                height="35"
                className="container__photos"
              />
              <p>
                <strong>Professional Trainers</strong> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
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
                <strong>Professional Trainers</strong> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
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
                <strong>Professional Trainers</strong> Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Sint ipsa voluptatibus.
              </p>
            </div>
          </div>
          <div className="container__form">
            <h3>Отправь заявку сейчас</h3>
            <TextField
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
              className="textfield"
              style={{ color: "white" }}
              data-aos="fade-left"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="standard-basic"
              label="Введите ваш номер"
              variant="standard"
              className="textfield"
              data-aos="fade-left"
              onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={() => setCollection(name, phone)}>Отправить</button>
          </div>
        </div>
      </div>
    );
}