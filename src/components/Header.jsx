import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { color } from "framer-motion";


function Header({ isLogin }) {
    const [show, setshow] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setshow(true);
            } else {
                setshow(false);
            }
        });
    });
    return (
        <div style={{marginBottom:'70px'}}>
            <Navbar fixed="top" expand="lg" className="bg-body-tertiary shadow">
                <Container>
                    <Link to="/" style={{ textDecoration: "none" ,color:'black'}}>
                        <h1
                            style={{ transition: "500ms" }}
                            className={`${show && `navhead`}`}
                        >
                            Pet's home
                        </h1></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto gap-5 d-flex align-items-center"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <span className="navlinks">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="none"
                                        className="navlinks"
                                    >
                                        Services
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ width: "250px", fontSize: "18px" }}>
                                        <Dropdown.Item href="/vaccination"  >
                                            Vaccinations
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/wellness">
                                            Wellness Care
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/dental">
                                            Dental Care
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </span>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}><span className="navlinks ">About</span></Link>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/petsbuy'}><span className="navlinks ">Our Pets</span></Link>

                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/careers'}><span className="navlinks">Careers</span></Link>

                            <Link  style={{ textDecoration: 'none', color: 'black' }} to={'/'}><span className="navlinks ">Blog</span></Link>
                            {
                                isLogin && <Link style={{ textDecoration: 'none', color: 'black' }} to={'/profile'}><span className="navlinks">Profile</span></Link>

                            }
                        </Nav>
                        {
                            isLogin ?
                                    <Link to="/appointment">
                                        <Button style={{ transition: '500ms' }} className='rounded-5 btn-warning ' size={`${!show && `lg`}`}><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
    
                                    </Link>
                                :
                                <Link to="/auth">
                                    <Button style={{ transition: '500ms' }} className='rounded-5 btn-warning ' size={`${!show && `lg`}`}><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                                </Link>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    )
}

export default Header;
