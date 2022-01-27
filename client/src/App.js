import React, { Component } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CreateInvoice from './components/CreateInvoice';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Report from './components/Report';

export default class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <div className="container">
          <Navbar/>  
         
          <main>
          <Routes>
          <Route path ='/welcome' element={<Home/>} /> 
          <Route  path = "/add"element= {<CreateProduct/>}></Route>
          <Route  path = "/edit/:id" element= {<EditProduct/>}></Route>
          <Route  path = "/invoice" element = {<CreateInvoice/>}></Route>
          <Route  path = "/report" element = {<Report/>}></Route>
          </Routes>
          </main>
      </div>
      </BrowserRouter>
    )
  }
}