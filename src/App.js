
import './App.css';
import Signup from './components/Login/Signup';
import {  Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login"
import Create from './components/Expenses/Create';
import Home from "./components/Expenses/Home"
import Update from './components/Expenses/Update';
function App() {

  return (
    <>
     
     <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path="/update/:id" element={<Update/>}></Route>
     </Routes>
    
    </>

  );
}

export default App;
