import React, { Component } from 'react';


export default class Navbar extends Component {
  render(){
    return(
     <nav className = "navbar navbar-expand-lg nvbar-light" style={{backgroundColor:'#e3f2fd'}}>
         <div className= "container-fluid">
        
         <button className="navbar-toggler" type ="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label ='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./welcome">Home</a>
                </li>
            </ul>
        </div>

        <button className="navbar-toggler" type ="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label ='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./add">Product</a>
                </li>
            </ul>
        </div>

        <button className="navbar-toggler" type ="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label ='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./invoice">Invoice</a>
                </li>
            </ul>
        </div>

        <button className="navbar-toggler" type ="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label='Toggle navigation'>
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="./report">Report</a>
                </li>
            </ul>
        </div>
         </div>
     </nav>
    )
  }
}