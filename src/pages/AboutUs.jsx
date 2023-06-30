import React from "react";
import "./About Us.css";

function AboutUs() {
  return (
    <div className="About">
      <div className="about">
        <h1>About Us</h1>
        <h1>CREATING FREEDOM BY MAKING EVERYDAY LIFE SAFER!!</h1>
      </div>
      <div className="Ab">
      <div className="cardabout1">
          <img src='https://media.istockphoto.com/id/1006092696/photo/modern-ambulance-car-parked-near-the-emergency-entrance-to-the-hospital-in-the-daytime.jpg?s=1024x1024&w=is&k=20&c=pJILhiHN0eZvsxJtRHY5aU_I_2ahZyMnKdodfulSFq8='/>
        <h3> Emergency</h3>
        </div>
        <div className="cardabout2">
          <img src="https://media.istockphoto.com/id/1396869557/photo/modern-public-cctv-camera-on-a-electric-pole-with-blurred-natural-background-intelligent.webp?b=1&s=170667a&w=0&k=20&c=bSRwIakxBskjcZE6eba1Sy398CTWPv5lZZCK4ECAY7M="/>
        <h3>Enterprise Security</h3>
        </div>
        <div className="cardabout3">
       <img src="https://media.istockphoto.com/id/1402835350/photo/pensive-relaxed-african-american-woman-reading-a-book-at-home-drinking-coffee-sitting-on-the.webp?b=1&s=170667a&w=0&k=20&c=mSRr65oCMtM4vI8Kd3NvKZS0v0ENG-YN8YKiCTCK_L4="/>
       <h3>Home security</h3>
        </div>
      </div>
      <div className="safety">
        <div className="cardabout">
          <h1>"Motto:</h1>

          <h5>"Protecting Your Peace, Securing Your Future"</h5>
        </div>
        <div className="cardabout">
          <h1>"Mission:</h1>
          <h5>
            "Our mission is to provide exceptional security solutions tailored
            to our clients' needs, ensuring their safety, peace of mind, and the
            protection of their assets. We strive to deliver professional,
            reliable, and efficient security services while upholding the
            highest standards of integrity and professionalism."
          </h5>
        </div>
        <div className="cardabout">
          <h1>"Vision:</h1>
          <h5>
            "To be the leading security agency recognized for excellence in
            safeguarding lives, properties, and information. We aim to be the
            trusted partner of choice for individuals, businesses, and
            organizations seeking comprehensive security solutions. Through
            continuous innovation and a customer-centric approach, we aspire to
            set new benchmarks in the security industry and contribute to
            creating safer communities."
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
