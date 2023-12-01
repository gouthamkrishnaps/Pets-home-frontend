import React from 'react'
import { Button, Container } from 'react-bootstrap'
import "./style.css"

function Appointment() {
  return (
    
    <div className=' home text-center' style={{backgroundImage:"'https://images.healthservicediscounts.com/retailer/2044/banner.jpg'"}}>
      <h1 className='text-center mt-5'>Lane veterinary</h1>
     <h2  className='text-center'>Request an Appoinment</h2>
    <p >If you are a current client and would like to schedule an appointment <br /> with our Nurses,please call, text, or email to ensure we are scheduling you appropriately.</p>

    <form className='mt-5 'style={{ border:50}} >
    
    <div type='text'>Full name</div>
    <input type="text" />
    <div type='mail'>Email adress</div>
    <input type="text" />
    <div type='text' >Phone number</div>
    <input type="text"/>
    <div type='text'>Pet nanme</div>
    <input type="text" />
    <div type='text'>Appointment type</div>
    <input type="text" />
    <div type='text'>With whom</div>
    <input type="text" placeholder='Choose  an appointment type' />
    <div type='text'>preferred date </div>
    <input type="text "  placeholder='No appoinment dates available' /> <br/>
    <div type='text'>preferred time </div>
    <input type="text "  placeholder='No appoinment times available' /> <br/>
    <div>prefered contact method</div>
    <br/><Button>Send Appoinment Request</Button>


   





    </form>
    </div>
  )
}

export default Appointment
