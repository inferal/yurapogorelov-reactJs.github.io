import React, { Component } from 'react'

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import Baner from './pages/baner';

class Header extends Component{

    render(){
        return(
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Home</NavItem>
                            <NavItem eventKey={2} href="#">About</NavItem>
                            <NavItem eventKey={3} href="#">Service</NavItem>
                            <NavItem eventKey={4} href="#">Work</NavItem>
                            <NavItem eventKey={5} href="#">Testimonial</NavItem>
                            <NavItem eventKey={6} href="#">Blog</NavItem>
                            <NavItem eventKey={7} href="#">Team</NavItem>
                            <NavItem eventKey={8} href="#">Contact</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Baner />
            </div>
        )
    }
}

export default Header;