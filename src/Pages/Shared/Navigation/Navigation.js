import React from 'react';
import './Navigation.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navigation = () => {

    const { user, googleSignIn,logOut}=useAuth();
    return (
            <>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3 text-black">
    <Container>
        <Navbar.Brand className="fs-3 fw-bolder me-auto" as={Link} to="/home" >M@n's He@lth</Navbar.Brand>
            <Nav className="ms-auto fs-5 " >
            <Nav.Link className=" nav-text" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/service">Services</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/fitness">Fitness</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/health">Health</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/style">Style</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/about">About Us</Nav.Link>
            
            
           
        </Nav>
        <Nav className="ms-auto">

            {
                user?.email ?<Nav.Link className=" text-white px-3 logout-btn fw-bold "><Button onClick={logOut}>Logout</Button> <h3>{user.displayName}</h3></Nav.Link>:

                <Nav.Link className="btn btn-primary text-white me-2 px-3 login-btn fw-bold" as={Link} to ="/login">Login</Nav.Link>
            }
                    

            </Nav>
        
    </Container>
  </Navbar>
        </>
    );
};

export default Navigation;