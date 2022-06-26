import React, {useState, useContext} from 'react';
import { AlertConstext } from "../../../../../UseContext/Alert/AlertContext";
import {db} from '../../../../../firebase'
import {doc, updateDoc, onSnapshot} from "firebase/firestore";
import Button from '@mui/material/Button';
import {useParams} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

export const News = () =>{
    const [title, setTitle] = useState('news');
    const params = useParams()
    const alert = useContext(AlertConstext)
    const [info, setInfo] = useState()
    const prodId = params.id
    const document = doc(db, "New", `${prodId}`)

    const aditNew = (title) =>{
            updateDoc(document, {
              Title: title,
            })
            .then(() => {alert.show("Ваши данные успешно обновлены", "success")})  
            .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
    }

    onSnapshot(document, (doc) => {
        setInfo({...doc._document.data.value.mapValue.fields})
    })


    return(
        <>
        {info === undefined
        ?
        <CircularProgress color="success" />
        :
        <div className="post">
            <div className="post__container">
                <div>
                    <input type="text" className="" defaultValue={`${info.Title.stringValue}`} placeholder="Введите название" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                <Button variant="contained" color="success" onClick={() => aditNew(title)} >
                    Отправить
                </Button>
                </div>
            </div>
        </div>    
        }
        </>
    )
}