import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { uploadDetials } from '../services/allAPI'
/* import "./style.css" */

function Appointment() {
  const [detials,setDetials] = useState({
    fullname:"",
    email:"",
    phone:"",
    petname:"",
    Appointment_type:"",
    dr:"",
    date:"",
    time:"",
    comments:""
  })

  const handleUpload = async(e)=>{
    e.preventDefault()
    const {fullname,email,phone,petname,Appointment_type,dr,date,time} = detials
    if(!fullname || !email || !phone || !petname || !Appointment_type || !dr || !date || !time){
      alert('please fill the form completely')
    }
    else{
      const response = await uploadDetials(detials)
      console.log(response);
      if(response.status>=200 && response.status<300){
        alert(`${response.data.petname} is succefully uploaded`)

        //setting value to null
        setDetials({
          fullname:"",
          email:"",
          phone:"",
          petname:"",
          Appointment_type:"",
          dr:"",
          date:"",
          time:"",
          comments:""
        })
      }
      else{
        console.log(response);
        alert('Something went wrong , please try again later')
      }
    }
  }
  console.log(detials);
  return (
    
    <div className='d-flex justify-content-center align-items-center pb-3 appointment-bg'>
      <div className='bg-light home my-5 d-flex justify-content-center align-items-center flex-column border border-2 rounded-5 shadow' style={{width:'600px'}}>
        <h1 >Pet's Home</h1>
        <h2  className='text-center'>Request an Appoinment</h2>
        <p className='text-center' style={{width:'500px'}}>If you are a current client and would like to schedule an appointment with our Nurses,please call, text, or email to ensure we are scheduling you appropriately.</p>
    
        <Form className='d-flex flex-column'>
          <Form.Group className="mb-3 input-box" controlId="exampleForm.ControlInput2">
              <Form.Label>Full name</Form.Label>
              <Form.Control value={detials.fullname} onChange={(e)=>setDetials({...detials,fullname:e.target.value})} className=' w-100' type="text" placeholder='Enter your name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Email adress</Form.Label>
            <Form.Control value={detials.email} onChange={(e)=>setDetials({...detials,email:e.target.value})} type="email" placeholder='Enter your e-mail address'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label >Phone number</Form.Label>
            <Form.Control value={detials.phone} onChange={(e)=>setDetials({...detials,phone:e.target.value})} type="number" placeholder='Enter your phone number'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Pet name</Form.Label>
            <Form.Control value={detials.petname} onChange={(e)=>setDetials({...detials,petname:e.target.value})} type="text" placeholder='Enter your pet name'/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput6">
            <Form.Label>Appointment type</Form.Label>
            <Form.Select value={detials.Appointment_type}  onChange={(e)=>setDetials({...detials,Appointment_type:e.target.value})} aria-label="Default select example">
              <option></option>
              <option value="Wellness Exam">Wellness Exam</option>
              <option value="Urgent/Sick Exam">Urgent/Sick Exam</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput7">
            <Form.Label >With whom</Form.Label>
            <Form.Select value={detials.dr} onChange={(e)=>setDetials({...detials,dr:e.target.value})} aria-label="Default select example">
              <option></option>
              <option value="No preference">No preference</option>
              <option value="Dr.Joy">Dr.Joy</option>
              <option value="Dr.Abhraham">Dr.Abhraham</option>
              <option value="Dr.Alex">Dr.Alex</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput8">
            <Form.Label>Preferred date </Form.Label>
            <Form.Control value={detials.date} onChange={(e)=>setDetials({...detials,date:e.target.value})} type="date"   />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput9">
            <Form.Label >Preferred time </Form.Label>
            <Form.Select value={detials.time} onChange={(e)=>setDetials({...detials,time:e.target.value})} aria-label="Default select example">
              <option></option>
              <option value="9 Am">9 Am</option>
              <option value="10 Am">10 Am</option>
              <option value="11 Am">11 Am</option>
              <option value="12 Pm">12 Pm</option>
              <option value="1 Pm">1 Pm</option>
              <option value="2 Pm">2 Pm</option>
              <option value="3 Pm">3 Pm</option>
              <option value="4 Pm">4 Pm</option>
            </Form.Select>
          </Form.Group>
         {/*  <Form.Group className="mb-3" controlId="exampleForm.ControlInput10"> 
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
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Any Comments</Form.Label>
            <Form.Control value={detials.comments} onChange={(e)=>setDetials({...detials,comments:e.target.value})} as="textarea" placeholder='Write down'/>
          </Form.Group>
          <Button onClick={handleUpload} className='btn rounded-pill'>Send Appoinment Request</Button>
        <br/>
  
        </Form>
  
      </div>
    </div>
    
  )
}

export default Appointment
