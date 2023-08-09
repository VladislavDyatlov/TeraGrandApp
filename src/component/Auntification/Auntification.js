import React, {useState, useContext} from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import "./Auntification.scss";
import { useDispatch } from "react-redux";
import { AlertConstext } from "../../UseContext/Alert/AlertContext";
import { setUsers } from "../../store/auth/auth";

export function Auntification() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then(() => {
            navigate('/dasboard/user');
            localStorage.setItem('dasboard', true)
          })
          .catch(() => {
            alert("Неправильный логин или пароль"); 
          });
          dispatch(setUsers(true))
    }

  return (
    <div className="containerss">
      <div class="container" id="container">
        <div class="form-container sign-up-container"></div>
        <div class="form-container sign-in-container">
          <form className="form" action="#">
            <h1>Sign in</h1>
            <input className="inputs" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input className="inputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={() => handleClick(email, password)}className="btns">Sign</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay"></div>
        </div>
      </div>
    </div>
  );
}
