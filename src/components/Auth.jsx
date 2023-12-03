import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import animationdata3 from '../assets/Animation - 1701613384620 (1).json'
import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'

function Auth({register}) {
    const registerForm = register?true:false 
  return (
    <div className='Authorization'>
        <Row>
            <Col>
            <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center w-100'>
                <div>
                    <Lottie loop={false} animationData={animationdata3} style={{width:'600px'}}/>
                </div>
            </div>
            </Col>

            <Col >
            <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center w-100'>
                <div /* style={{backgroundColor:'lightgreen '}} */ className='background-transparent border text-light shadow rounded-5 p-5'>
                    <h1 className='text-center'>Pet's Home</h1>
                    {registerForm ?
                        <h6 className='fw-bold text-center'>Sign up to Your Account</h6> :
                        <h6 className='fw-bold text-center'>Login to Your Account</h6>
                    }
                    {registerForm && <Form.Group className='mb-3'  controlId="exampleForm.ControlInput1">
                        <Form.Control type='text' className='rounded-pill' style={{width:'300px'}} placeholder='Enter your username'/>
                    </Form.Group>}
                    <Form.Group className='mb-3'  controlId="exampleForm.ControlInput1">
                        <Form.Control type='email' className='rounded-pill' style={{width:'300px'}} placeholder='Enter your e-mail address'/>
                    </Form.Group>
                    <Form.Group className='mb-3'  controlId="exampleForm.ControlInput1">
                        <Form.Control type='password' className='rounded-pill' style={{width:'300px'}} placeholder='Enter your password'/>
                    </Form.Group>
                    {registerForm?  
                        <Button className='rounded-pill mt-3 btn-dark' style={{width:'300px'}}>Register</Button>:
                        <Button className='rounded-pill mt-3 btn-dark' style={{width:'300px'}}>Login</Button>
                    }
                    {registerForm ?
                        <p className='mt-3' style={{ color: 'black' }}>Already a User ? <Link to={'/auth'} style={{ textDecoration: 'none', color: 'black' }}>Click here to Login</Link></p>
                        
                        :
                        <p className='mt-3' style={{ color: 'black' }}>New User ? <Link to={'/register'} style={{ textDecoration: 'none', color: 'black' }}>Click here to Register</Link></p>
                        
                    }
                </div>
                
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default Auth