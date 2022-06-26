import React, {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import {useParams} from "react-router-dom";
import {db} from '../../../../../firebase'
import {doc, updateDoc, onSnapshot} from "firebase/firestore";
import { AlertConstext } from "../../../../../UseContext/Alert/AlertContext";
import CircularProgress from '@mui/material/CircularProgress';

export const Postes = () =>{ 

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [comment, setComment] = useState('')
    const [description, setDescription] = useState('')
    const [info, setInfo] = useState()
    const params = useParams()
    const alert = useContext(AlertConstext)
    const prodId = params.id

    const document = doc(db, "Posts", `${prodId}`)

    onSnapshot(document, (doc) => {
        setInfo({...doc._document.data.value.mapValue.fields})
    })

const upDate = (title, description,comment,img) =>{
    updateDoc(document, {
      Title: title,
      Description: description,
      Data: new Date(),
      Text: comment,
      Img: img,
    })
    .then(() => {alert.show("Ваши данные успешно обновлены", "success")})  
    .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
}



    return (
      <>
        {info === undefined ? (
          <CircularProgress color="success" />
        ) : (
          <div className="post">
            <div className="post__container">
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Введите название"
                  defaultValue={`${info.Title.stringValue}`}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Введите ссылку на фото"
                  defaultValue={`${info.Img.stringValue}`}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SendIcon />}
                  onClick={() => upDate(title, description,comment,img)}
                >
                  Править
                </Button>
              </div>
            </div>
            <div className="post__containers">
              <div>
                <input
                  type="text"
                  className=""
                  placeholder="Введите описание"
                  defaultValue={`${info.Description.stringValue}`}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <textarea
              name="description"
              defaultValue={`${info.Text.stringValue}`}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
        )}
      </>
    );
}