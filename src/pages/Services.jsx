import React from "react";
import Button from "react-bootstrap/Button";
import Data from "../data.json";
import { Col, Row } from "react-bootstrap";
import img1 from '../images/pet7.jpg'

function Services({ details }) {
    const data = Data[details];
    console.log(data);
    return (
        <>
            <div className="d-flex justify-content-center flex-column">
                <img
                    className="p-5 mt-5"
                    style={{
                        borderRadius: "100px",
                        backgroundRepeat: "no-repeat",
                    }}
                    src={img1}
                    alt="" 
                />

                {/* Code to display the Appointment Section */}

                <div className="d-flex justify-content-center align-items-center flex-column">
                    {/* Heading */}
                    <h1 className="text-center" style={{ color: "#9baa81" }}>
                        {data[0].title_1}
                    </h1>
                    {/* Displaying two rows with respective Data */}

                    <Row className="mt-5 w-100">
                        <Col md={3}></Col>
                        <Col md={3}>
                            <p>{data[0].title_1_para_1}</p>
                        </Col>
                        <Col md={3}>
                            <p>{data[0].title_1_para_2}</p>
                        </Col>
                    </Row>
                    {/* Displaying a bold text */}
                    <p
                        className="fw-bold fs-5 text-center mt-3"
                        style={{
                            maxWidth: "900px",
                        }}
                    >
                        {data[0].title_1_bold}
                    </p>
                    {/* Code for Button to book appointment */}
                    <Button
                        style={{
                            transition: "500ms",
                            width: "250px",
                            height: "4.5rem",
                        }}
                        className="rounded-5 mt-3 btn-warning fs-5"
                    >
                        Make an Appointment
                    </Button>
                </div>

                {/* Information Section */}

                <div>
                    {/* Svg for wrap in this section */}

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#f8f4ec"
                            fill-opacity="1"
                            d="M0,32L16,42.7C32,53,64,75,96,101.3C128,128,160,160,192,186.7C224,213,256,235,288,213.3C320,192,352,128,384,106.7C416,85,448,107,480,106.7C512,107,544,85,576,85.3C608,85,640,107,672,128C704,149,736,171,768,186.7C800,203,832,213,864,224C896,235,928,245,960,208C992,171,1024,85,1056,85.3C1088,85,1120,171,1152,176C1184,181,1216,107,1248,90.7C1280,75,1312,117,1344,144C1376,171,1408,181,1424,186.7L1440,192L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"
                        ></path>
                    </svg>
                    {/* Content for Information */}
                    <div
                        className="d-flex justify-content-center align-items-center"
                        style={{ backgroundColor: "#f8f4ec" }}
                    >
                        {/* Image Section */}
                        <div>
                            <img
                                height={"700px"}
                                width={"100%"}
                                style={{
                                    borderTopLeftRadius: "50%",
                                    borderTopRightRadius: "50%",
                                }}
                                src={`${data[0].img1}`}
                                alt=""
                            />
                        </div>
                        {/* Descrription */}
                        <div
                            className="d-flex flex-column justify-content-center  ms-5"
                            style={{ maxWidth: "500px" }}
                        >
                            <h1
                                className="text-center mb-4"
                                style={{ color: "#9baa81" }}
                            >
                                {data[0].title_2}
                            </h1>
                            <p>{data[0].title_2_para_1}</p>
                            <p>{data[0].title_2_para_2}</p>
                            <p
                                className="mt-5"
                                style={{
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                }}
                            >
                                {data[0].title_2_bold}
                            </p>
                        </div>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#f8f4ec"
                            fill-opacity="1"
                            d="M0,32L16,37.3C32,43,64,53,96,69.3C128,85,160,107,192,112C224,117,256,107,288,122.7C320,139,352,181,384,170.7C416,160,448,96,480,69.3C512,43,544,53,576,74.7C608,96,640,128,672,160C704,192,736,224,768,240C800,256,832,256,864,250.7C896,245,928,235,960,218.7C992,203,1024,181,1056,176C1088,171,1120,181,1152,181.3C1184,181,1216,171,1248,149.3C1280,128,1312,96,1344,74.7C1376,53,1408,43,1424,37.3L1440,32L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"
                        ></path>
                    </svg>
                </div>

                {/* Questions */}

                <div className="d-flex justify-content-center align-items-center flex-column">
                    {/* Heading */}
                    <h1 style={{ color: "#9baa81" }}>{data[0].title_3}</h1>
                    {/* Descrription */}
                    <Row className="mt-5 w-100 d-flex ">
                        <Col md={3}></Col>
                        <Col md={3}>
                            <p>{data[0].title_3_para_1}</p>
                        </Col>
                        <Col md={3} >
                            <p>{data[0].title_3_para_2}</p>
                            <p className="fw-bold fs-5">
                                {data[0].title_3_bold}
                            </p>
                        </Col>
                    </Row>

                    <img
                        src={`${data[0].img2}`}
                        alt="no-image"
                        height={"500px"}
                        style={{borderRadius:"50px"}}
                    />
                </div>
            </div>
        </>
    );
}

export default Services;
