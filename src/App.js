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

function App() {
  return (
    <div className="app">
      <AlertState>
        <Alerts />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<Auntification />} />
        <Route path="/dasboard/*" element={<AdminPanel />} />
        <Route path="/posts/:id" element={<Posts />} />
      </Routes>        
      </AlertState>

    </div>
  );
}

export default App;
