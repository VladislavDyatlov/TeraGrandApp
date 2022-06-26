import React from 'react'
import './AdminPanel.scss'
import { Navbar } from './Navbar/Navbar';
import { Sidebar } from './Sidebar/Sidebar';
import { List } from './Table/Table';
import {Post} from './Post/Post';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Postes } from './Post/Postes/Postes';
import { Comment } from './Comment/Comment';
import { Coment } from './Comment/Coment/Coment';
import { New } from './New/New';
import { News } from './New/News/News';
 
export function AdminPanel(){
    return (
      <div className="home"> 
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="listContainer">
          <Routes>
              <Route path="/user" element={<List />} />
              <Route path="/post" element={<Post />} />
              <Route path="/postes/:id" element={<Postes />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/new" element={<New />} />
              <Route path="/new/:id" element={<News />} />
              <Route path="/comment/:id" element={<Coment />} />
          </Routes>
        </div>
      </div>
    </div>
    );
}