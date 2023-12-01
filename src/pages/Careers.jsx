import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Careers() {
  return (
    <>
        <div className='d-flex align-items-center justify-content-center'>
            <img style={{marginTop:'120px', borderRadius:'80px'}} className='img-fluid' src="https://www.esaote.com/uploads/pics/header-us-mri-vet_15.jpg" alt="" />
        </div>

        <section className='d-flex align-items-center justify-content-center flex-column'>

           <img width={'80px'} height={'125px'} className='img-fluid' src="https://lanevet.com/wp-content/uploads/2022/12/veterinary-careers-lane-veterinary.png" alt="" />

           <h1 style={{color:'#8A9A5B'}} className='mt-5'>Discover Rewarding Veterinary Careers in</h1>
           <h1 style={{color:'#8A9A5B'}}>Hinsdale, IL</h1>

           <Row className='d-flex align-items-center justify-content-center mt-4'>
            <Col className='ms-5' md={5} sm={3}>
                <p style={{textAlign:'justify'}}>
                Do you dream of working at a private veterinary practice where you are respected, encouraged, and challenged daily? We’re excited to offer fulfilling veterinary career opportunities in a welcoming and open environment. Lane Veterinary delivers low-stress pet care in a uniquely personable manner. If this is the kind of care you want to provide as a veterinary professional, then we may have a position just for you!
                </p>
            </Col>

            <Col className='d-flex flex-column align-items-center justify-content-center' md={4} sm={2}>
                <h4>Apply Today!</h4>
                <a href='mailto:petshome@gmail.com' style={{borderRadius:'80px', backgroundColor:'#9370DB'}} className='btn mt-3 text-light'><i class="fa-solid fa-paw me-2"></i> SEND YOUR APPLICATION</a>
            </Col>
           </Row>
        </section>

        <section style={{marginTop:'110px'}} className='d-flex align-items-center justify-content-center flex-column'>
          <h1 style={{color:'#8A9A5B'}}>Our Culture</h1>
          <div style={{width:'75%'}}><p style={{textAlign:'justify'}}>At Lane, we look at what corporate practices are doing for their teams and clients, and then we do the opposite. Our priorities are our patients, clients, and team members, and giving everyone under our roof the most calming and comfortable experience possible.</p></div>
          
          <hr />

          <Row className='d-flex align-items-center justify-content-center flex-row mt-5'>
            <Col lg={4} md={4} sm={2}>
            <Card style={{ width: '18rem', border:'none' }}>
            <Card.Img style={{borderTopRightRadius:'150px', borderTopLeftRadius:'150px'}} variant="top" src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/hands-in-the-middle-square-da58dc6b963ebe211da599a83f48ae28-z386a92pd01y.jpg" />
            <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
            <Card.Title><h4>We are Team-Oriented</h4></Card.Title>
            <Card.Text>
            Ours is a team-oriented culture through and through. We are all on the same level playing field, working as a cohesive team that works closely together to come up with the best plans for each individual patient.
            </Card.Text>
           </Card.Body>
           </Card>
            </Col>

            <Col lg={4} md={4} sm={2}>
            <Card style={{ width: '18rem', border:'none' }}>
            <Card.Img style={{borderTopRightRadius:'150px', borderTopLeftRadius:'150px'}} variant="top" src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/veterinary-team-member-getting-kisses-square-76714b6b9e2ddcbaab7a3fee935ce46f-40fir6nwe2g8.jpg" />
            <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
            <Card.Title><h4>You are Valuable</h4></Card.Title>
            <Card.Text>
            Every team member is equally valuable at Lane Veterinary, and we respect the unique approach of each individual. We listen to everyone and consider all perspectives regarding our patients’ care.
            </Card.Text>
           </Card.Body>
           </Card>
            </Col>

            <Col lg={4} md={4} sm={2}>
            <Card style={{ width: '18rem', border:'none' }}>
            <Card.Img style={{borderTopRightRadius:'150px', borderTopLeftRadius:'150px'}} variant="top" src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/two-staff-talking-square-73873581ff6c1d50f7f8b7d52b21433b-lr2xyei561b0.jpg" />
            <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
            <Card.Title><h4>Empathetic Environment</h4></Card.Title>
            <Card.Text>
            Transparency through frequent and open communication is essential to our success and allows us to create a strong network of mutual support. We are here to help each other and become our best selves.
            </Card.Text>
           </Card.Body>
           </Card>
            </Col>
          </Row>
        </section>

        <section style={{marginTop:'100px', marginLeft:'100px'}} className='d-flex align-items-center justify-content-center mb-5'>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col md={5} sm={4} className='d-flex align-items-center justify-content-center flex-column'>
            <h3 style={{color:'#8A9A5B'}}>Join the Lane Veterinary Team</h3>
            <h5>Apply with us today. Please send us a copy of</h5>
            <h5>your cover letter and resume.</h5>
            <a href="mailto:petshome@gmail.com" style={{borderRadius:'80px', backgroundColor:'#9370DB'}} className='btn mt-3 text-light'><i class="fa-solid fa-paw me-2"></i> SEND YOUR APPLICATION</a>
            </Col>

            <Col>
            <img width={'67%'} height={'50px'} lg={6} md={5} sm={4} style={{borderTopRightRadius:'370px', borderTopLeftRadius:'370px'}} className='img-fluid' src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/dr-spinelli-with-large-dog-square-6bd418b122498977a7e7fcd3e9542ae6-c6p48keodg5x.jpg" alt="" />
            </Col>
          </Row>
        </section>
    </>
  )
}

export default Careers