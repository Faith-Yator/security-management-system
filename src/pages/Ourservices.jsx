import React from "react";
import "./Our Services.css";
import HomeSecurity from "./HomeSecurity";
import PopupMenu from "./PopupMenu";

function Ourservices() {
  return (
    <div className="security">
      <div className="service">
        <h1>HOME SECURITY</h1>
        <div className="our">
        <img src="https://media.istockphoto.com/id/1409181133/photo/large-home-exterior-nevada.webp?b=1&s=170667a&w=0&k=20&c=8jOyZYnQ8pP0YN6X1Oc_6nxlvZV20NFlGJ6bd_3jt3M=" />
        <PopupMenu />
        </div>
      </div>
      <div className="first">
        <div className="site">
          <h1>On-site Security</h1>
          <h5>
          Focus on your business as we take care of your security <br/>
            No matter how highly automated your security may be,<br/>
            nothing can replace the human interface of a professionally<br/>
            trained Security Officer. 
            Known for their gentle demeanor towards customers but<br/>
           their tough stance towards perpetrators, our security<br/>
            officers continue to 
            be the preferred choice for shopping malls, corporates, industries,<br/>
            
            diplomatic missions and residential areas.<br/>
            
            Our Security Officers undergo intensive training programs that
            include:<br/>
           1. Protection and Preservation of Assets<br/>
            2. Incident Management<br/>
            3. Counter-Terrorism<br/>
     4. Customer Care Skills<br/>
            5.  First Aid & Fire Safety<br/>
          </h5>
        </div>

        <div className="aid">
          <img src="https://www.securexafrica.com/wp-content/uploads/2021/08/SECURITY-OFFICER-2-768x513.jpeg" />
        </div>
      </div>

      <div className="first-reverse">
        <div className="site">
          <h1>Emergency Response</h1>
          <h5>
            <h4>Medical Response</h4>
            Kerio-Valley has partnered with other organizations
            <br />
            to provide rapid emergency response to medical emergencies
            <br /> at a discounted rate.
            <br /> The Kerio-Valley & Rescue partnership gives
            <br /> you access to the largest fleet of ambulances with over 200
            ambulances in Nairobi <br /> and over 600 across Kenya.
            <br />
            Households are covered within the estate,
            <br /> on the road and when outside of Nairobi. The service has an
            average response time of
            <br /> 15 minutes with response times as fast as 4 minutes within
            Nairobi.
            <br /> As a member, you will receive all-inclusive
            <br /> ambulance care and transport to the hospital
            <br /> of your choice for onwards treatment where required
            <br />
          </h5>
        </div>
        <div className="aid">
          <img src="https://www.securexafrica.com/wp-content/uploads/2021/08/photo-1554734867-bf3c00a49371-768x512.jpg" />
        </div>
      </div>
      <div className="first">
        <div className="site">
          <h1>Alarm Response</h1>
          <h5>
            <h4>
              Combine early detection of intrusion with prompt response to
              <br /> enhance the chances of apprehending criminals
              <br /> and ensure your peace of mind.
            </h4>
            Our highly-skilled Emergency Response Teams(ERTs) guarantee <br /> a
            swift response in under six minutes and we take all measures <br />
            to empower our security officers with the requisite equipment <br />
            and support which ensures adequate mitigation of risk.
            <br />
            Alongside regular guard training,
            <br /> our ERTs are also trained for armed and unarmed self-defence,
            <br /> actual scenario assessment, and disaster management. These
            measures, including reinforcing our teams with armed police escorts,
            <br /> dispatching multiple teams, and the use of riot shields,{" "}
            <br /> has enabled our teams to foil several high-profile armed
            robbery and kidnapping attempts in the recent past.
          </h5>
        </div>
        <div className="aid">
          <img src="https://www.securexafrica.com/wp-content/uploads/2016/11/Emergency-Response-Services-768x576.png" />
        </div>
      </div>

      <HomeSecurity />
    </div>
  );
}

export default Ourservices;
