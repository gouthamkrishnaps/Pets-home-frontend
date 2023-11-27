import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import animationData2 from '../assets/Animation - 1701020378999.json'
import Lottie from 'lottie-react'

function Header() {
    const [show,setshow]=useState()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scrollY>100){
            setshow(true)
          }
          else{
            setshow(false)
          }
        })
    })
  return (
    <div>
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary shadow">
        <Container>
           <div className='d-flex'>
              <Lottie animationData={animationData2} style={{width:'50px'}}/>
              <h1 style={{transition:'500ms'}} className={`${show && `navhead`}`}> Pet's Home</h1>
           </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto gap-5" style={{ maxHeight: '100px' }} navbarScroll>
                <span className='navlinks'>Service</span>
                <span className='navlinks'>About</span>
                <span className='navlinks'>Pharmacy</span>
                <span className='navlinks'>Blog</span>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                    Something else here
                </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Form>
                <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size={`${!show && `lg`}`}><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header