import React from 'react'
import './main.css'

function Main() {
  return (
    <div className="column">
      <div className='ho'>
        <h1>Home Security</h1>
         <img src="https://www.securexafrica.com/wp-content/uploads/2017/05/shutterstock_1319982029-scaled-820x400.jpg" />
        <h5>
          Secure your home and live stress-free with our trusted
          technology-driven security solutions
          <br />
          and our well-trained and highly motivated security force.
        </h5>
        </div>
        <div className="sec">
          <div className="img">
            <h1>Home Automations</h1>
            <h3>
              Looking for convenience, control, and peace of mind for your home
              security?
              <br />
              We can offer you convenience, control, freedom, and peace of mind
              right in the palm of your hand with our smart home automation
              solutions.
            </h3>
            <h5>
              Arm and disarm your security system, unlock and lock your doors,
              <br /> control your lights or remotely monitor your home with
              <br /> intelligent security cameras via your smartphone.
              <br />
              This solution is backed by our 24/7 rapid emergency response
              service,
              <br /> medical response on the move is also available via the
              Securex App.
            </h5>
          </div>
          <img src="https://www.securexafrica.com/wp-content/uploads/2017/05/shutterstock_780009955-768x512.jpg" />
        </div>
        <div className="sec-reverse">
          <div className="img">
            <h1>Survailance Systems</h1>
            <h5>
              
              Wouldn’t it be great to be able to keep an eye on your business
              even when on the go, wherever you go?
              <br />
              With our advanced Internet Protocol CCTV solutions, not only can
              you do this,
              <br /> but you can also keep a lid on employee theft and
              misdemeanours, <br />
              deter crime from external threats, and inspire confidence and
              trust with <br />
              your clients. In the event that an intrusion does occur,
              <br /> CCTV surveillance provides security teams with ample
              evidence, <br />
              which greatly aids in investigations and asset recovery
              initiatives. <br />
              IP cameras allow you to monitor the workplace on your mobile
              phone, tablet, or PC in real-time.
            </h5>
          </div>
          <img src="https://www.securexafrica.com/wp-content/uploads/2017/05/shutterstock_91250165-768x512.jpg" />
        </div>
      </div>
  )
}

export default Main
