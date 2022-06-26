import React, {useState, useContext} from 'react';
import { addDoc, collection, onSnapshot, deleteDoc, doc} from "firebase/firestore";
import { AlertConstext } from "../../../../UseContext/Alert/AlertContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import {db} from "../../../../firebase"

export const New = () =>{

    const [title, setTitle] = useState()
    const [info, setInfo] = useState()
    const alert = useContext(AlertConstext)
    const New = collection(db, "New") 

    const addNew = async (title) =>{
            addDoc(collection(db, "New"), {
                Title: title,
                Date: new Date()
            })
            .then(() => {alert.show("Ваши данные успешно отправлены", "success")})
            .catch(() => {alert.show("Что-то пошло не так. Возможна ошибка сервера", "error")})
    }

    const remove = async (id) =>{
        await deleteDoc(doc(New, id));
    }

    onSnapshot(collection(db,"New"), (snapshot) => {
        let inf =[]
        snapshot.docs.forEach((doc) => {
            inf.push({...doc._document.data.value.mapValue.fields, id: doc.id})
        })
        setInfo(inf)
        console.log(info)
    })

    return(
    <div>
        <div className="post">
            <div className="post__container">
                <div>
                    <input type="text" className="" placeholder="Введите название" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                <Button variant="contained" color="success" onClick={() => addNew(title)} >
                    Отправить
                </Button>
                </div>
            </div>
        </div>
        <TableContainer component={Paper} className="table" style={{marginTop: `50px`}}> 
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">№</TableCell>
            <TableCell className="tableCell">Название</TableCell>
            <TableCell className="tableCell">Дата</TableCell>
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
                {inf.Title.stringValue}
              </TableCell>
              <TableCell className="tableCell">
                {inf.Date.timestampValue.slice(0, 10)}
              </TableCell>
              <TableCell className="tableCell">
                <Link to={`/dasboard/new/${inf.id}`}>
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
    </div>
    )
}