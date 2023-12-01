import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function Careers() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <img
          style={{ marginTop: "12vh" }}
          className="img-fluid rounded-5 "
          src="https://www.esaote.com/uploads/pics/header-us-mri-vet_15.jpg"
          alt=""
        />
      </div>

      <section className="d-flex align-items-center justify-content-center flex-column">
        <img
          width={"80px"}
          height={"125px"}
          className="img-fluid"
          src="https://lanevet.com/wp-content/uploads/2022/12/veterinary-careers-lane-veterinary.png"
          alt=""
        />

        <h1 style={{ color: "#8A9A5B" }} className="mt-5">
          Discover Rewarding Veterinary Careers in
        </h1>
        <h1 style={{ color: "#8A9A5B" }}>Hinsdale, IL</h1>

        <Row className="d-flex align-items-center justify-content-center mt-4">
          <Col md={3}></Col>
          <Col md={3} sm={3}>
            <p style={{ textAlign: "justify" }}>
              Do you dream of working at a private veterinary
              practice where you are respected, encouraged, and
              challenged daily? We’re excited to offer fulfilling
              veterinary career opportunities in a welcoming and
              open environment. Lane Veterinary delivers
              low-stress pet care in a uniquely personable manner.
              If this is the kind of care you want to provide as a
              veterinary professional, then we may have a position
              just for you!
            </p>
          </Col>

          <Col
            className="d-flex flex-column align-items-center justify-content-center"
            md={3}
            sm={2}
          >
            <h4>Apply Today!</h4>
            <a
              href="mailto:petshome@gmail.com"
              style={{
                borderRadius: "80px",
                backgroundColor: "#9370DB",
              }}
              className="btn mt-3 text-light"
            >
              <i class="fa-solid fa-paw me-2"></i> SEND YOUR
              APPLICATION
            </a>
          </Col>
          <Col md={3}></Col>
        </Row>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ddeeda"
          fill-opacity="1"
          d="M0,192L30,176C60,160,120,128,180,117.3C240,107,300,117,360,133.3C420,149,480,171,540,202.7C600,235,660,277,720,272C780,267,840,213,900,176C960,139,1020,117,1080,133.3C1140,149,1200,203,1260,213.3C1320,224,1380,192,1410,176L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <section
        style={{ backgroundColor: "#ddeeda" }}
        className="d-flex align-items-center justify-content-center flex-column"
      >
        <h1 style={{ color: "#8A9A5B" }}>Our Culture</h1>
        <div style={{ width: "50%" }}>
          <p style={{ textAlign: "justify" }}>
            At Lane, we look at what corporate practices are doing
            for their teams and clients, and then we do the
            opposite. Our priorities are our patients, clients, and
            team members, and giving everyone under our roof the
            most calming and comfortable experience possible.
          </p>
        </div>

        <hr />

        <div
          className="d-flex justify-content-center  w-100 gap-5 "
          style={{ flexWrap: "wrap" }}
        >
          <Card
            style={{
              width: "20rem",
              border: "none",
              backgroundColor: "#ddeeda",
            }}
          >
            <Card.Img
              style={{
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
                width: "100%",
              }}
              variant="top"
              src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/hands-in-the-middle-square-da58dc6b963ebe211da599a83f48ae28-z386a92pd01y.jpg"
            />
            <Card.Body className="d-flex align-items-center justify-content-center flex-column">
              <Card.Title>
                <h4 style={{ color: "#8A9A5B" }}>
                  We are Team-Oriented
                </h4>
              </Card.Title>
              <Card.Text className="text-center">
                Ours is a team-oriented culture through and
                through. We are all on the same level playing
                field, working as a cohesive team that works
                closely together to come up with the best plans
                for each individual patient. Underpinning the
                high level of care we deliver to pets and people
                is our desire to see our team members succeed.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "20rem",
              border: "none",
              backgroundColor: "#ddeeda",
            }}
          >
            <Card.Img
              style={{
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              variant="top"
              src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/veterinary-team-member-getting-kisses-square-76714b6b9e2ddcbaab7a3fee935ce46f-40fir6nwe2g8.jpg"
            />
            <Card.Body className="d-flex align-items-center justify-content-center flex-column">
              <Card.Title>
                <h4 style={{ color: "#8A9A5B" }}>
                  You are Valuable
                </h4>
              </Card.Title>
              <Card.Text className="text-center">
                Every team member is equally valuable at Lane
                Veterinary, and we respect the unique approach
                of each individual. We listen to everyone and
                consider all perspectives regarding our
                patients’ care.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "20rem",
              border: "none",
              backgroundColor: "#ddeeda",
            }}
          >
            <Card.Img
              style={{
                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              variant="top"
              src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/two-staff-talking-square-73873581ff6c1d50f7f8b7d52b21433b-lr2xyei561b0.jpg"
            />
            <Card.Body className="d-flex align-items-center justify-content-center flex-column">
              <Card.Title>
                <h4 style={{ color: "#8A9A5B" }}>
                  Empathetic Environment
                </h4>
              </Card.Title>
              <Card.Text className="text-center">
                Transparency through frequent and open
                communication is essential to our success and
                allows us to create a strong network of mutual
                support. We are here to help each other and
                become our best selves.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ddeeda"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,106.7C672,107,768,117,864,144C960,171,1056,213,1152,208C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="d-flex align-items-center justify-content-center w-100" style={{ marginTop: "-15%" }}>
        <div className=" d-flex justify-content-center align-items-center " style={{ flexWrap: "wrap-reverse" }}>
          <div className="d-flex align-items-center flex-column p-3" style={{ maxWidth: "500px" }} >
            <h3 className="text-center " style={{ color: "#8A9A5B" }}>
              Join the Lane Veterinary Team
            </h3>
            <h5 className="text-center">
              Apply with us today. Please send us a copy of your cover
              letter and resume.
            </h5>
            <a
              href="mailto:petshome@gmail.com"
              style={{ backgroundColor: "#9370DB" }}
              className="btn rounded-5 text-light mt-3 w-50"
            >
              <i class="fa-solid fa-paw me-2"></i> SEND YOUR
              APPLICATION
            </a>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <img
              width={"45%"}
              style={{

                borderTopRightRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
              src="https://lanevet.com/wp-content/uploads/bb-plugin/cache/dr-spinelli-with-large-dog-square-6bd418b122498977a7e7fcd3e9542ae6-c6p48keodg5x.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Careers;
