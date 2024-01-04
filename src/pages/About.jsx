import React from "react";
import dog_1 from "../images/dog-5357794_1920.jpg";
import logo_1 from "../images/why-choose-lane-veterinary.png";
import img_1 from "../images/dr-lauren-spinelli-with-dog-portrait-b5cd4d59115b66ff5e1d32189f5a766f-j35tgz49sf2c.jpg"

function About() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <img
                    className="p-5 mt-5"
                    style={{
                        borderRadius: "100px",
                        backgroundRepeat: "no-repeat",
                    }}
                    src={dog_1}
                    alt="no-image"
                />
                <img
                    style={{ marginTop: "-50px" }}
                    src={logo_1}
                    height="158px"
                    width="5%"
                    alt=""
                />

                <h1 className="mt-5" style={{ color: "#9baa81" }}>
                    Why Choose Lane
                </h1>
                <p className="mt-4  w-50 fs-6" style={{textAlign:"justify"}} >
                    Choosing a vet means entrusting your pet's care and
                    well-being to capable hands. Lane Veterinary strives to be a
                    lifetime vet for you and your family, being the people you
                    can always lean on for support and guidance. As a privately
                    owned practice, we stand to give people and their pets the
                    one-on-one care and attention they deserve in a calm and
                    comfortable setting.
                </p>

                <p className="mt-4  w-50 fs-5 text-center" style={{fontWeight:"bold"}}>Below are a few things you should know about Lane Veterinary.</p>

                <div className="d-flex justify-content-center align-items-center w-100 p-3" style={{backgroundColor:"#9baa81"}}>
                    <div>
                        <img src={img_1}  height={"780ox"} width={"100%"} style={{borderTopLeftRadius: "45%" , borderTopRightRadius:"45%"}} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
