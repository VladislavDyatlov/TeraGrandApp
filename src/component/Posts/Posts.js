import React, {useState, useContext} from 'react'
import './Posts.scss'
import {useParams} from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { AlertConstext } from "../../UseContext/Alert/AlertContext";
import {doc, collection , onSnapshot, addDoc} from "firebase/firestore";
import Button from '@mui/material/Button'
import {db} from '../../firebase'
import CircularProgress from '@mui/material/CircularProgress';

export const Posts = () => {

    const [info, setInfo] = useState()
    const [coment, setComent] = useState()
    const [name, setName] = useState('')
    const [comment, setComment] = useState('')
    const [news, setNews] = useState('')
    const alert = useContext(AlertConstext)
    const params = useParams()
    const prodId = params.id

    const document = doc(db, "Posts", `${prodId}`)

        onSnapshot(document, (doc) => {
            setInfo({...doc._document.data.value.mapValue.fields})
        })

        const addComment = async (name, comment) => {
          addDoc(collection(db,"Comment"), {
            Name: name,
            Text: comment,
            Date: new Date()
          })
          .then(() => {alert.show("Ваши данные успешно отправлены", "success")})
          .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
        }

        onSnapshot(collection(db,"Comment"), (snapshot) =>{
          let coments = []
          snapshot.docs.forEach((doc) => {
            coments.push({...doc._document.data.value.mapValue.fields, id: doc.id})
        })
        setComent(coments)
        })

        onSnapshot(collection(db,"New"), (snapshot) =>{
          let newses = []
          snapshot.docs.forEach((doc) => {
            newses.push({...doc._document.data.value.mapValue.fields, id: doc.id})
        })
        setNews(newses)
        })
    

    return (
      <>
      {info === undefined
      ?
      <CircularProgress color="success" />
      :
      <>
      <div className="get-posts__title">{info.Title.stringValue}</div>
      <div className="get-posts">
        <div className="get-posts__containers">
          <div className="get-posts__container">
          <div
            className="get-posts__img"
            style={{ backgroundImage: `url(${info.Img.stringValue})` }}
          ></div>
          <div className="get-posts__date">
            <span className="get-posts__date--span">
              {info.Data.timestampValue.slice(5, 10)}
            </span>
          </div>
          <div className="get-posts__description">
            {info.Description.stringValue}
          </div>
          <div className="get-posts__text">{info.Text.stringValue}</div>
          </div>
          <div className="get-posts__post">
            <h3>Оствать свой отзыв</h3>
            <div className="get-posts__input">
              <input type="text" placeholder="Введите свое имя" onChange={(e) => setName(e.target.value)} />
              <Button variant="contained" color="success" onClick={() => addComment(name, comment)} >
                    Отправить
              </Button>
            </div>
            <div classname="get-posts__textarea">
              <textarea  onChange={(e) => setComment(e.target.value)}>
                Оставь свой комментарий
              </textarea>
            </div>
          </div>
          <div className="get-posts__comment">
            {coment?.map((com) =>(
            <div className="get-posts__comments">
            <div>
              <Avatar sx={{bgcolor: deepPurple[500]}}>{com.Name.stringValue.slice(0,1)}</Avatar>
            </div>
            <div>
              <p>{com.Text.stringValue}</p>
              <hr /> 
            </div>             
            </div>
            ))}
          </div>
        </div>
        <div className="get-posts__containers">
          <div className="get-posts__block">
            <div>
              <input type="text" className="get-posts__input" placeholder="Поиск..." />
            </div>
            <div>
              <Button variant="contained" color="success">
                Поиск
              </Button>
            </div>
          </div>
          <div className="get-posts__blocks">
              <h3>Новости</h3>
            {news?.map((news) => (
            <div>
              <hr />
              <h4>{news.Title.stringValue}</h4>
            </div>              
            ))}
          </div>
        </div>
      </div> 
      </>
      }      
      </>
    );
}