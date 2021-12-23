import './App.css';
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import { BsAward } from 'react-icons/bs';
import { BsLaptop } from 'react-icons/bs';
import { BsCpu } from 'react-icons/bs';
import { BsLightbulb } from 'react-icons/bs';
import { BsBuilding } from 'react-icons/bs';
import { BsTools } from 'react-icons/bs';

import image from './photo/BG.png';
import image1 from './photo/FYDI.jpg';
import image2 from './photo/CSDI.jpg';
import image3 from './photo/ECDI.jpg';
import image4 from './photo/EEDI.jpg';
import image5 from './photo/CDI.jpg';
import image6 from './photo/MDI.jpg';

import Navbar from './Components/Navbar';

function LandingPage() {
  return (
    <>
      <br/>

      <section id="LandingPageTop">
        <div className="container">
          <div id="headDiv" className="row">
            <Navbar />
            <div id="headDiv1" className="col-lg-5 col-md-5 col-sm-12">
              <div id="headContent">
                <h1>STUDENT</h1>
                <h2>HELP DESK</h2>
                <p>We are here to help students in their study by providing study material and guided path.</p>
                <p>Lets explore it ...</p>
                <br/><br/>
              </div>
            </div>
            <div id="headDiv2" className="col-lg-7 col-md-7 col-sm-12">
              <div id="headImage">
                <img src={image} alt="TopImage" />
              </div>
            </div>

            <div id="getStartBtn">
              <a href="#CardGroup">GET STARTED</a>
            </div>

          </div>          
        </div>
      </section>

      <div id="space"></div>
      
      <section id="CardGroup">
        <div className="container">
          <div className="row">
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image1} symbol={<BsAward size={30}/>} department="Computer Science Department"/>
            </div>
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image2} symbol={<BsLaptop size={30}/>} department="Information Technology Department"/>
            </div>
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image3} symbol={<BsCpu size={30}/>} department="Electronics & Comm. Department"/>
            </div>
          </div>
          <div className="row">
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image4} symbol={<BsLightbulb size={30}/>} department="Electrical Engineering Department"/>
            </div>
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image5} symbol={<BsBuilding size={30}/>} department="Civil Engineering Department"/>
            </div>
            <div id="colCard" className="col-lg-4 col-md-4 col-sm-12">
              <Card img={image6} symbol={<BsTools size={30}/>} department="Mechanical Engineering Department"/>
            </div>
          </div>
        </div>
      </section>

      <div id="space"></div>

      <section id="footer">
        <Footer rel="#LandingPageTop"/>
      </section>

    </>
  );
}

export default LandingPage;
