import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import Lottie from 'lottie-react'
import animationData from '../assets/Animation - 1700974315430 (1).json'
import animationData2 from '../assets/Animation - 1701020378999.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import {fadeIn} from '../variants'


function Home() {
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
                                        <motion.div 
                                        variants={fadeIn('up', 0)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{once: false,amount:.1}}
                                        >
                                            <h1>Pet's Home</h1>
                                            <span className='fw-bold' style={{fontSize:'60px'}}>Like Having a <br />
                                                Vet in the Family</span>
                                        </motion.div>
                                        <motion.div
                                        variants={fadeIn('down', 0)}
                                        initial="hidden"
                                        whileInView={"show"}
                                        viewport={{once: false,amount:0.1}}
                                        >
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas non placeat aut veniam officia unde minima quibusdam quos atque porro! Fuga rerum maxime vero odio ratione officiis ad veniam error!</p>
                                            <Form>
                                                <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size="lg"><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                                            </Form>
                                        </motion.div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center '>
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
                variants={fadeIn('left', 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false,amount:0.1}}
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
                variants={fadeIn('right', 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false,amount:0.1}} >
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
                            {/* <img className='rounded-circle' src={img1} alt="" width={'400px'} height={'400px'}/> */}
                            <Lottie animationData={animationData2} style={{width:'500px'}}/>
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
            <h4 className='text-center mt-5 fw-bold'><Link to={'/petsbuy'} style={{textDecoration:'none', color:'#395886'}}>View more....</Link></h4>
        </div>
       </section>

       <section>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,96L21.8,122.7C43.6,149,87,203,131,229.3C174.5,256,218,256,262,229.3C305.5,203,349,149,393,112C436.4,75,480,53,524,85.3C567.3,117,611,203,655,229.3C698.2,256,742,224,785,176C829.1,128,873,64,916,42.7C960,21,1004,43,1047,42.7C1090.9,43,1135,21,1178,48C1221.8,75,1265,149,1309,160C1352.7,171,1396,117,1418,90.7L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
        <div style={{backgroundColor:'#8AAEE0'}} className=''>
            <Row>
                <Col lg={6} sm={12}>
                    <motion.div 
                    variants={fadeIn('right', 0)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false,amount:0.1}}
                    className='d-flex align-items-center justify-content-center'>
                        <img height={'350px'} className='rounded-5' src="https://lanevet.com/wp-content/uploads/2022/12/two-vets-with-dogs.jpg" alt="" width={'300px'}/>
                    </motion.div>
                   
                </Col>
                <Col lg={6} sm={12}>
                <motion.div
                variants={fadeIn('left', 0)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false,amount:0.1}}
                style={{height:'350px'}}
                >
                    <span className='fw-bold' style={{fontSize:'40px',color:'#395886'}}>Meet Dr. Baker and Her Team <br /> Partners in Your Pet’s Care</span>
                    <div className='text-light'>
                        <p style={{textAlign:'justify'}} className='w-75'>
                        Veterinarian and practice owner Dr. Sarah Baker set out to make Lane Veterinary a place that nurtures your pet’s health and provides relationship-focused medicine. We are also dedicated to educating you and getting you more involved in your pet’s care, so you can feel comfortable asking questions and have a better understanding of your pet’s health and needs.
                        </p>
                    </div>
                    <Form>
                        <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size="lg"><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                    </Form>
                </motion.div>

                </Col>
            </Row>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8aaee0" fill-opacity="1" d="M0,320L20,320C40,320,80,320,120,288C160,256,200,192,240,176C280,160,320,192,360,186.7C400,181,440,139,480,122.7C520,107,560,117,600,112C640,107,680,85,720,80C760,75,800,85,840,117.3C880,149,920,203,960,213.3C1000,224,1040,192,1080,154.7C1120,117,1160,75,1200,101.3C1240,128,1280,224,1320,234.7C1360,245,1400,171,1420,133.3L1440,96L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"></path></svg>
       </section>

       <section>
        <motion.div 
        variants={fadeIn('up', 0)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false,amount:0.1}}
        className='align-items-center justify-content-center d-flex w-100 flex-column'>
            <div className="icon align-items-center justify-content-center d-flex w-100">
                <img width={'100px'} height={'100px'} src="http://pluspng.com/img-png/vet-clinic-png-veterinary-clinic-animal-hospital-in-sanford-lake-mary-area-432.png" alt="" />
            </div>
            <Container>
                <div className="content align-items-center justify-content-center d-flex w-100 flex-column">
                <span className='fw-bold' style={{fontSize:'50px',color:'#395886'}}>Your Pet’s Well-Being is Our Pet Project </span>
                <Row>
                    <Col>
                    <p style={{textAlign:'justify',width:'500px'}}>At Lane, we see what corporate practices do, and we strive to do the opposite. Individualized veterinary care is the only way we practice medicine here. We prescribe treatments based on your pet’s lifestyle, behavior, clinical signs, and other factors. Our team takes a thoughtful, wholistic approach, which you can see reflected in your companion’s health and longevity.</p>
                    </Col>
                    <Col>
                    <p style={{textAlign:'justify',width:'500px'}}>Every time your pet visits us, we want you to be as involved with their treatment as much as possible. If they’re seeing us for blood testing or booster vaccines, we welcome you to observe the procedure. You'll learn more about your pet’s care and become better acquainted with our team!</p>
                    </Col>
                </Row>
                <Form>
                    <Button style={{transition:'500ms'}} className='rounded-5 btn-warning ' size="lg"><i class="fa-solid fa-dog"></i> Make an Appointment</Button>
                </Form>
                </div>
            </Container>
        </motion.div>
       </section>

       <section>
       <div className='mt-5'>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.0360697132!2d-74.30932960709077!3d40.697539963305694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1701586230117!5m2!1sen!2sin" width="1600" height="500" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </section>

    </div>
  )
}

export default Home