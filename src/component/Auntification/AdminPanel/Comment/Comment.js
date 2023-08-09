import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../../../../firebase";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";

export const Comment = ({ color }) => {
  const [state, setState] = useState();
  const [states, setStates] = useState();
  const Users = collection(db, "Comment");
  const User = collection(db, "Comments");

  function GetComment() {
    onSnapshot(Users, (snapshot) => {
      let user = [];
      snapshot.docs.forEach((doc) => {
        user.push({ ...doc._document.data.value.mapValue.fields, id: doc.id });
      });
      setState(user);
      console.log(state);
    });
  }

  function GetComments() {
    onSnapshot(User, (snapshot) => {
      let user = [];
      snapshot.docs.forEach((doc) => {
        user.push({ ...doc._document.data.value.mapValue.fields, id: doc.id });
      });
      setStates(user);
      console.log(states);
    });
  }

  useEffect(() => {
    GetComment();
    GetComments();
  }, []);

  const remove = async (id) => {
    await deleteDoc(doc(Users, id));
    GetComment();
  };

  const removes = async (id) => {
    await deleteDoc(doc(User, id));
    GetComments();
  };

  return (
    <div>
      <div>
        <h3>Комментариии к постам на главной странице</h3>
        <TableContainer
          component={Paper}
          className={`table ${color ? "active" : ""}`}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">№</TableCell>
                <TableCell className="tableCell">NikName</TableCell>
                <TableCell className="tableCell">Имя</TableCell>
                <TableCell className="tableCell">Комментарий</TableCell>
                <TableCell className="tableCell">Дата</TableCell>
                <TableCell className="tableCell">Смотреть</TableCell>
                <TableCell className="tableCell">Удалить</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state?.map((state, i) => (
                <TableRow>
                  <TableCell>{i + 1}.</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {state.Name.stringValue.slice(0, 1)}
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Name.stringValue}
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Text.stringValue.slice(0, 50)}...
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Date.timestampValue.slice(0, 10)}
                  </TableCell>
                  <TableCell className="tableCell">
                    <Link to={`/dasboard/comment/${state.id}`}>
                      <Button variant="contained" color="success">
                        Смотреть
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell className="tableCell">
                    <Button
                      onClick={() => remove(state.id)}
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
      <div>
        <h3>Отзывы на главной странице</h3>
        <TableContainer
          component={Paper}
          className={`table ${color ? "active" : ""}`}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="tableCell">№</TableCell>
                <TableCell className="tableCell">NikName</TableCell>
                <TableCell className="tableCell">Имя</TableCell>
                <TableCell className="tableCell">Комментарий</TableCell>
                <TableCell className="tableCell">Дата</TableCell>
                <TableCell className="tableCell">Смотреть</TableCell>
                <TableCell className="tableCell">Удалить</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {states?.map((state, i) => (
                <TableRow>
                  <TableCell>{i + 1}.</TableCell>
                  <TableCell className="tableCell">
                    <div className="cellWrapper">
                      <Avatar sx={{ bgcolor: deepPurple[500] }}>
                        {state.Name.stringValue.slice(0, 1)}
                      </Avatar>
                    </div>
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Name.stringValue}
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Text.stringValue.slice(0, 50)}...
                  </TableCell>
                  <TableCell className="tableCell">
                    {state.Date.timestampValue.slice(0, 10)}
                  </TableCell>
                  <TableCell className="tableCell">
                    <Link to={`/dasboard/comments/${state.id}`}>
                      <Button variant="contained" color="success">
                        Смотреть
                      </Button>
                    </Link>
                  </TableCell>
                  <TableCell className="tableCell">
                    <Button
                      onClick={() => removes(state.id)}
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
    </div>
  );
};
