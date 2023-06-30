import React from "react";
import "./Home.css";
import HomeSecurity from "./HomeSecurity";
import Card from "./Card";
import SignIn from "./SignIn";
import Ourservices from "./Ourservices";
import Oursolutions from "./Oursolutions";
import AboutUs from "./AboutUs";
import Contacts from "./Contacts";

function Home() {
  return (
    <div>
      <div className="home">
      <h1>Secure Your Home,<br/>Enterprise and Properties with Us!!!👌</h1>
        </div>
      <div className="hi">
        <Card />
      </div>
      <div>
        <Ourservices />
      </div>
      <div>
        <Oursolutions />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Contacts/>
      </div>
    </div>
  );
}

export default Home;
