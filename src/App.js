import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Tasks from '../src/Pages/Tasks/Tasks'
import SignIn from "../src/Pages/Auth/SignIn";
import Navbar from '../src/Pages/Navabar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tasks' element={<Tasks></Tasks>}></Route>

      </Routes>
    </div>
  );
}

export default App;
