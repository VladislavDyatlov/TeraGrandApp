import React, {useState} from 'react'
import './AdminPanel.scss'
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { List } from './Table/Table';
import {Post} from './Post/Post';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { Postes } from './Post/Postes/Postes';
import { Comment } from './Comment/Comment';
import { Coment } from './Comment/Coment/Coment';
import { New } from './New/New';
import { News } from './New/News/News';
import {Commentes} from './Comment/Coment/Commentes' 
 
export function AdminPanel(){

  const [color, setCollor] = useState(false);
  const navigate = useNavigate();
  const user = localStorage.getItem('dasboard');

  if (!user) return navigate("/")

    return (
      <div className={`home ${color ? "active" : ""}`}> 
      <Sidebar color={color} setCollor={setCollor} />
      <div className="homeContainer">
        <Navbar color={color} />
        <div className="listContainer">
          <Routes>
              <Route path="/post" element={<Post color={color} />} />
              <Route path="/postes/:id" element={<Postes />} />
              <Route path="/comment" element={<Comment color={color} />} />
              <Route path="/new" element={<New color={color} />} />
              <Route path="/new/:id" element={<News />} />
              <Route path="/comment/:id" element={<Coment />} />
              <Route path="/comments/:id" element={<Commentes />} />
          </Routes>
        </div>
      </div>
    </div>
    );
}