import { Routes, Route, Link } from 'react-router-dom';
import React, { Component } from "react";
import Home  from "./Navbar";
import Login from '../Auth_User/Login';
import Register from '../Auth_User/Register';
import AuthUser from '../Auth_User/AuthUser';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function content(){
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
return (
    <>
    <Navbar expand="lg" bg="primary" variant="dark">
        <Container>
          <Nav  className="me-auto my-2 my-lg-0"
            style= {{ maxHeight: '200px' }}
            navbarScroll>
            <Nav.Link href="/">
              <h3>Home</h3>
            </Nav.Link>
            <Nav.Link href="/login" >
              <h3>Login</h3>
            </Nav.Link>
            <Nav.Link  href="/register">
              <h3>Register</h3>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
   

    {/* <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>

                </ul> 

            </nav>*/}
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
    </>
)
}
export default content;