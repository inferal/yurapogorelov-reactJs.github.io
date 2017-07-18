import React, { Component } from 'react'


//import Baner from './pages/baner';

import '../css/header.css'

class Header extends Component{

    render(){
        return(
            <div className="header">
                <div className="logo">
                    <img src="../img/logo.jpg" alt=""/>
                    <h1>the<span>Ham</span></h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="" className="menu-link">Home</a></li>
                        <li><a href="" className="menu-link">About</a></li>
                        <li><a href="" className="menu-link">Service</a></li>
                        <li><a href="" className="menu-link">Work</a></li>
                        <li><a href="" className="menu-link">Testimonial</a></li>
                        <li><a href="" className="menu-link">Blog</a></li>
                        <li><a href="" className="menu-link">Team</a></li>
                        <li><a href="" className="menu-link">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;