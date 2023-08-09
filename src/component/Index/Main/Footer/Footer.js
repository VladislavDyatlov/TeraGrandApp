import React, {useState, useContext} from 'react'
import {db} from '../../../../firebase'
import { addDoc, collection } from "firebase/firestore";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";
import './Footer.scss'
import { Link } from 'react-router-dom';

export const Footer = () =>{

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
      <footer id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="footer-info">
                <div class="section-title">
                  <h2>Оглавление</h2>
                </div>
                <address>
                  <p>
                    город Люберцыб ул.Мира 8а
                    <br /> Московская область
                  </p>
                </address>

                <div class="copyright-text">
                  <p>Копирайт &copy; 2018 TeraGrand</p>
                  <p>
                    Разработчик:{" "}
                    <a
                      rel="nofollow"
                      href="http://templatemo.com"
                      title="html5 templates"
                      target="_parent"
                    >
                      Дятлов В.Д
                    </a>
                  </p>
                  <p>
                    Компания:{" "}
                    <a href="https://themewagon.com/">TeraGrand</a>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-6">
              <div class="footer-info">
                <div class="section-title">
                  <h2>Наши контакты</h2>
                </div>
                <address>
                  <p>+65 2244 1100, +66 1800 1100</p>
                  <p>
                    <a href="mailto:youremail.com">hello@youremail.co</a>
                  </p>
                </address>

                <div class="footer_menu">
                  <h2>Мини-Меню</h2>
                  <ul>
                    <li>
                      <Link to="/gallaria">Галлерея</Link>
                    </li>
                    <li>
                    <Link to="/price">Цены</Link>
                    </li>
                    <li>
                      <a href="#">Диллерам</a>
                    </li>
                    <li>
                      <a href="#">Статьи</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-4 col-sm-12">
              <div class="footer-info newsletter-form">
                <div class="section-title">
                  <h2>Отправь заявку сейчас</h2>
                </div>
                <div>
                  <div class="form-group">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      class="form-control"
                      placeholder="Введите имя"
                      name="email"
                      id="email"
                      required=""
                    />
                    <div>
                      <input
                        type="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        class="form-control"
                        placeholder="Введите телефон"
                        name="email"
                        id="email"
                        required=""
                      />
                    </div>
                    <input
                      type="submit"
                      class="form-control"
                      name="submit"
                      onClick={() => setCollection(name, phone)}
                      id="form-submit"
                      value="Отправить"
                    />
                    <span>
                      <sup>*</sup> Пожайлуста не спамте данные
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}