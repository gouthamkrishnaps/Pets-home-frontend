import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1700974315430 (1).json'
import img1 from '../images/homebg.jpg'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {fadeIn} from '../variants'


function Home() {
    const [show,setshow]=useState()
    const [section,setSection]=useState()
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
          if(window.scrollY>400){
            setshow(true)
          }
          else{
            setshow(false)
            
          }
        })
        
    })

  return (
    <div className='main-div' style={{}}>
        {/* landing page */}
       <section>
            <div style={{height:'90vh',backgroundColor:'white'}} className='home-bg'>
               <div className=''>
                    <Container>
                        <Row >
                            <Col md={6} sm={12}>
                                <div style={{height:'100vh'}} className='d-flex justify-contents-center align-items-center'>
                                    <div className=' '>
                                        <h1>Pet's Home</h1>
                                        <span className='fw-bold' style={{fontSize:'60px'}}>Like Having a <br />
                                            Vet in the Family</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non placeat aut veniam officia unde minima quibusdam quos atque porro! Fuga rerum maxime vero odio ratione officiis ad veniam error!</p>
                                        <Form>
                                            <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size="lg"><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                                        </Form>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div style={{height:'100vh'}} className='d-flex justify-contents-center align-items-center m-auto'>
                                <div>
                                    <Lottie loop={false} animationData={animationData} style={{width:'600px'}}/>
                                </div>
                            </div>
                            </Col>
                        </Row>
                    </Container>
               </div>
            </div>
       </section>

       
       {/* about us  */}
       <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,192L34.3,208C68.6,224,137,256,206,245.3C274.3,235,343,181,411,138.7C480,96,549,64,617,85.3C685.7,107,754,181,823,218.7C891.4,256,960,256,1029,234.7C1097.1,213,1166,171,1234,165.3C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>

        <div style={{backgroundColor:'#8AAEE0'}} className=''>
            <motion.div 
                variants={fadeIn('right', 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false,amount:0.7}}
              className='text-light d-flex justify-content-center align-items-center flex-column'  >
                    <span className='fw-bold' style={{fontSize:'60px',color:'#395886'}}>
                        Your Boutique Neighborhood <br /> Veterinarian in Hinsdale, IL
                    </span>
                    <div style={{width:'700px'}}>
                        <p style={{textAlign:'justify'}} >At Lane Veterinary, we know you and your pet by name. Dr. Sarah Baker founded our practice to give pet parents in Hinsdale and its surrounding communities a veterinary experience that exceeds expectations, and is personalized to you and your pet</p>
                        <p style={{textAlign:'justify'}}>When you walk in, you and your pet will be greeted by a concierge and escorted into a comfortable exam room with a cozy and inviting atmosphere. We are a Fear Free Certified practice, delivering low-stress care in a calming environment designed to promote relaxation for pets and humans both. We want to build a strong relationship with you and inspire you to make confident, informed decisions about your pet, so they can get the most out of their life with you</p>
                    </div>
            </motion.div>    
        </div>
        </section>

        <section>
        <div className="bg-image">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,80C560,64,640,96,720,117.3C800,139,880,149,960,154.7C1040,160,1120,160,1200,133.3C1280,107,1360,53,1400,26.7L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        <div style={{height:'30vh'}}>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,0L40,48C80,96,160,192,240,192C320,192,400,96,480,96C560,96,640,192,720,208C800,224,880,160,960,149.3C1040,139,1120,181,1200,213.3C1280,245,1360,267,1400,277.3L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
        </section>

        <section>
            <div style={{backgroundColor:'#8AAEE0',marginTop:'-2px'}} className='home-bg d-flex justify-content-center align-items-center flex-column'>
                <motion.div 
                variants={fadeIn('left', 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false,amount:0.7}} >
                    <Row >
                        <Col md={6} sm={12}>
                            <div style={{height:'60vh'}} className='text-light d-flex justify-content-center align-items-center flex-column'>
                                    <span className='fw-bold' style={{fontSize:'40px',color:'#395886'}}>We're a Fear Free Practice</span>
                                    <div  style={{width:'700px'}}>
                                        <p style={{textAlign:'justify'}}>Is your pet anxious about vet visits? Lane Veterinary uses proven Fear Free methods to alleviate your pet's anxiety, including gentle, non-restrictive handling, relaxing music, and pheromones. We're proud to wear the official Fear Free Certified label.</p>
    
                                        <p style={{textAlign:'justify'}}>We subscribe to Fear Free care because stress can limit your pet's potential for a long and healthy life, and affect their bond with you. By practicing Fear Free medicine, we make vet visits calmer for your pet so they can receive thorough treatment that keeps them healthier. Fear Free care can also make vet visits easier for you, and strengthen the bond you share</p>
                                    </div>
                                    <Form>
                                        <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size="lg"><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                                    </Form>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                        <div style={{height:'60vh'}} className='d-flex justify-content-center align-items-center'>
                            <img className='rounded-circle' src={img1} alt="" width={'400px'} height={'400px'}/>
                        </div>
                        </Col>
                    </Row>
                </motion.div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,224L40,229.3C80,235,160,245,240,229.3C320,213,400,171,480,128C560,85,640,43,720,32C800,21,880,43,960,90.7C1040,139,1120,213,1200,218.7C1280,224,1360,160,1400,128L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
       </section>

       <section>
        <div className="cards d-flex justify-content-center align-items-center flex-column container-fluid">
            <span className='fw-bold' style={{fontSize:'60px',color:'#395886'}}>Are you planning to adopt a pet ? </span>
            <span className='fw-bold mb-3' style={{fontSize:'40px',color:'grey'}}>Check out these</span>
            <Cards/>
            <h4 className='text-center mt-5 fw-bold'><Link style={{textDecoration:'none', color:'#395886'}}>View more....</Link></h4>
        </div>
       </section>

    </div>
  )
}

export default Home