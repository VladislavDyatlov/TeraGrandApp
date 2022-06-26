import React, {useState, useContext} from 'react'
import Button from '@mui/material/Button';
import {db} from '../../../../firebase'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { addDoc, collection, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './Post.scss'
import { Link } from 'react-router-dom';

export const Post = () =>{

    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [comment, setComment] = useState('')
    const [description, setDescription] = useState('')
    const alert = useContext(AlertConstext)
    const [info, setInfo] = useState()
    const Posts = collection(db, "Posts")

    const addPost = async (title, img, comment, description) =>{
        addDoc(collection(db, "Posts"), {
            Title: title,
            Description: description,
            Data: new Date(),
            Text: comment,
            Img: img
        })
        .then(() => {alert.show("Ваши данные успешно отправлены", "success")})
        .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
    }

    const remove = async (id) =>{
        await deleteDoc(doc(Posts, id));
    }

    onSnapshot(collection(db,"Posts"), (snapshot) => {
        let inf =[]
        snapshot.docs.forEach((doc) => {
            inf.push({...doc._document.data.value.mapValue.fields, id: doc.id})
        })
        setInfo(inf)
        console.log(info)
    })

    return(
    <>
        <div className="post">
            <div className="post__container">
                <div>
                    <input type="text" className="" placeholder="Введите название" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <input type="text" className="" placeholder="Введите ссылку на фото" onChange={(e) => setImg(e.target.value)}/>
                </div>
                <div>
                <Button variant="contained" color="success" onClick={() => addPost(title, img, comment, description)} >
                    Отправить
                </Button>
                </div>
            </div>
            <div className="post__containers">
                <div>
                    <input type="text" className="" placeholder="Введите описание" onChange={(e) => setDescription(e.target.value)}/>
                </div>
            </div>
            <textarea onChange={(e) => setComment(e.target.value)}>
                Введите описание поста
            </textarea>
        </div>
        <TableContainer component={Paper} className="table" style={{marginTop: `50px`}}> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">№</TableCell>
            <TableCell className="tableCell">Фото</TableCell>
            <TableCell className="tableCell">Название</TableCell>
            <TableCell className="tableCell">Дата</TableCell>
            <TableCell className="tableCell">Читать</TableCell>
            <TableCell className="tableCell">Изменение</TableCell>
            <TableCell className="tableCell">Удалить</TableCell>
          </TableRow> 
        </TableHead>
        <TableBody>
          {info?.map((inf, i) => (
            <TableRow>
              <TableCell>
              {i + 1}.
              </TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img
                    src={`${inf.Img.stringValue}`}
                    alt=""
                    className="image"
                  />
                </div>
              </TableCell>
              <TableCell className="tableCell">
                {inf.Title.stringValue}
              </TableCell>
              <TableCell className="tableCell">
                {inf.Data.timestampValue.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCell">
                <Link to={`/posts/${inf.id}`}>
              <Button variant="contained" color="success">
                Читать
            </Button>
            </Link>
              </TableCell>
              <TableCell className="tableCell">
                <Link to={`/dasboard/postes/${inf.id}`}>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Изменить
                </Button>                
                </Link>
              </TableCell>
              <TableCell className="tableCell">
                <Button
                  onClick={() => remove(inf.id)}
                          variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}