import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import Join from './Join';
import Inid from "./checkbox/Inid";
import ChooseCard from "./checkbox/ChooseCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/join' element={<ChooseCard/>}/>
          <Route path="/join/1" element={<Inid/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
