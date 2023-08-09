import React, {useState} from 'react'
import './App.css';
import { Index } from './component/Index/Index';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Auntification } from './component/Auntification/Auntification';
import { AdminPanel } from './component/Auntification/AdminPanel/AdminPanel';
import { AlertState } from './UseContext/Alert/AlertState';
import { Alerts } from './UseContext/Alert/Alert';
import { Posts } from './component/Posts/Posts';
import Gallaria from './component/Index/Galleria/Galleria';
import { Price } from './component/Index/Price/Price';
import { Cargo } from './component/Index/Cargo/Cargo';
import { Dealer } from './component/Index/Dealer/Gealer';
import { Story } from './component/Story/Story';
import SimpleTooltips from './component/Index/Main/Toolpit/Toolpit';
import {Modal} from './component/Index/Modal/Modal'

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="app"> 
      <AlertState>
        <Alerts />
        <SimpleTooltips active={active} setActive={setActive} />
        <Modal active={active} setActive={setActive}/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auntification />} />
        <Route path="/dasboard/*" element={<AdminPanel />} />
        <Route path="/posts/:id" element={<Posts />} />
        <Route path="/gallaria" element={<Gallaria />} />
        <Route path="/price" element={<Price />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/dealer" element={<Dealer />} />
        <Route path="/story" element={<Story />} />
      </Routes>        
      </AlertState>
    </div>
  );
}

export default App;
