import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router'
import Navbar from './ui/navbar';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import AddProduct from './components/addProduct';

function App() {
  
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/addProduct' element={<AddProduct/>} />
        </Routes>
    </div>
    
  );
}

export default App;
