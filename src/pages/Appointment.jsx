import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
/* import "./style.css" */

function Appointment() {
  return (
    
    <div className='d-flex justify-content-center align-items-center pb-3 appointment-bg'>
      <div className='bg-light home my-5 d-flex justify-content-center align-items-center flex-column border border-2 rounded-5 shadow' style={{width:'600px'}}>
        <h1 >Pet's Home</h1>
        <h2  className='text-center'>Request an Appoinment</h2>
        <p className='text-center' style={{width:'500px'}}>If you are a current client and would like to schedule an appointment with our Nurses,please call, text, or email to ensure we are scheduling you appropriately.</p>
    
        <Form className='d-flex flex-column'>
          <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
              <Form.Label>Full name</Form.Label>
              <Form.Control className=' w-100' type="text" placeholder='Enter your name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email adress</Form.Label>
            <Form.Control type="email" placeholder='Enter your e-mail address'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label >Phone number</Form.Label>
            <Form.Control type="number" placeholder='Enter your phone number'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Pet name</Form.Label>
            <Form.Control type="text" placeholder='Enter your pet name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label>Appointment type</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">Wellness Exam</option>
              <option value="2">Urgent/Sick Exam</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
            <Form.Label >With whom</Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">No preference</option>
              <option value="2">Dr.Joy</option>
              <option value="3">Dr.Abhraham</option>
              <option value="4">Dr.Alex</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
            <Form.Label>Preferred date </Form.Label>
            <Form.Control type="date"   />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
            <Form.Label >Preferred time </Form.Label>
            <Form.Select aria-label="Default select example">
              <option></option>
              <option value="1">9 Am</option>
              <option value="2">10 Am</option>
              <option value="3">11 Am</option>
              <option value="4">12 Pm</option>
              <option value="5">1 Pm</option>
              <option value="6">2 Pm</option>
              <option value="7">3 Pm</option>
              <option value="8">4 Pm</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput10"> 
            <Form.Label>Prefered contact method</Form.Label>
              <div className='d-flex gap-2'>
                <Form.Check label="Email"
                name="group1"
                type="radio"/>
                <Form.Check label="Text"
                name="group1"
                type="radio"/>
                <Form.Check label="Call"
                name="group1"
                type="radio"/>
              </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Any Comments</Form.Label>
            <Form.Control as="textarea" placeholder='Write down'/>
          </Form.Group>
          <Button className='btn rounded-pill'>Send Appoinment Request</Button>
        <br/>
  
        </Form>
  
      </div>
    </div>
    
  )
}

export default Appointment
