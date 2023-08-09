import React, {useState, useContext} from 'react';
import './Comments.scss' 
import {db} from '../../../../firebase'
import { addDoc, collection } from "firebase/firestore";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";

export const Comments = () =>{

  const [name, setName] = useState()
  const [mark, setMark] = useState()
  const [text, setText] = useState()
  const alert = useContext(AlertConstext)

  const addComment = async (name, mark, text) =>{
    await addDoc(collection(db, "Comments"), {
      Name: name,
      Mark: mark,
      Text: text, 
      Date: new Date()
    })
    .then(() => {alert.show("Ваши данные успешно отправлены", "success")})
    .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
  }

    return (
      <div style={{marginTop: `50px`}}>
        <h1 style={{textAlign: `center`}}>Оставь свой отзыв</h1>
      <div className="color">
        <div className="commentes">
          <div className="commentes__container">
            <div>
              <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Введите ваше имя" />
            </div>
            <div>
              <select onChange={(e) => setMark(e.target.value)} defaultValue="Выберете оценку">
                <option selected disabled>Выберете оценку</option>
                <option>Отлично</option>
                <option>Хорошо</option>
                <option>Плохо</option> 
                <option>Отвратительно</option>
              </select>
            </div>
            <div>
              <textarea  onChange={(e) => setText(e.target.value)}>Оставь свой отзыв</textarea>
            </div>
            <div>
            <button onClick={() => addComment(name, mark, text)}>Отправить</button>
            </div>
          </div>
          <div className="commentes__img">
            <img src="https://i.pinimg.com/originals/f8/6a/6c/f86a6c2132899e224f7036c3fc5e5201.jpg" />
          </div>
        </div>
      </div>
      </div>
    );
}