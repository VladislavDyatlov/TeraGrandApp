import React, { useEffect, useState } from "react";
import "./Table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../../../../firebase";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import { doc, collection, onSnapshot, deleteDoc } from "firebase/firestore";

export const List = ({ color }) => {
  const [state, setState] = useState();
  const Users = collection(db, "Users");

  function GetPhone() {
    onSnapshot(Users, (snapshot) => {
      let user = [];
      snapshot.docs.forEach((doc) => {
        user.push({ ...doc._document.data.value.mapValue.fields, id: doc.id });
      });
      setState(user);
      console.log(state);
    });
  }

  useEffect(() => {
    GetPhone();
  }, []);

  const remove = async (id) => {
    await deleteDoc(doc(Users, id));
    GetPhone();
  };

  return (
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
            <TableCell className="tableCell">Номер</TableCell>
            <TableCell className="tableCell">Дата</TableCell>
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
                {state.Number.stringValue}
              </TableCell>
              <TableCell className="tableCell">
                {state.Date.timestampValue.slice(0, 10)}
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
  );
};
