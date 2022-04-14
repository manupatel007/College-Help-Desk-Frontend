import './App.css';
import Footer from "./Components/Footer";
import AboutUsCard from "./Components/AboutUsCard";
import image1 from './photo/Ankit-pic.jpeg';
import image2 from './photo/Anshul-pic.jpg';
import image3 from './photo/Sudhanshu-pic.jpg';
import image4 from './photo/Tarun-pic.jpg';
import image5 from './photo/Vishwas-pic.jpg';
import Navbar from './Components/Navbar';


function AboutPage() {
    return (
      <>
        <section id="aboutUsPageTop">
            <div className="container">
                <br/>
                <div id="aboutUsHeadDiv" style={{padding: '20px 10px 40px 10px'}}>
                    <Navbar/>
                    <div id="space"></div>
                    <div id="aboutheadDiv1" className="row" style={{padding: '0 40px 40px 40px'}}>
                        <h1>ABOUT US</h1>
                    </div>
                    <br/>
                    <div id="aboutheadDiv2" className="row" style={{padding: '0 40px 40px 40px'}}>
                        <h3>About Website</h3>
                        <p>We are here to provide you latest study material for you Engineering course.</p>
                        <div id="space"></div>
                        <h3>About Our Team</h3>
                        <p>Our team consist of Computer Science Engineering students, each of them have good development skills in web development field. This team is divide into two parts Frontend and Backend.</p>
                    </div>
                    <div id="getStartBtn">
                        <a href="#AboutCardSec">OUR TEAM</a>
                    </div>
                </div>
            </div>
        </section>
        
        <div id="space"></div>

        <section id="AboutCardSec">
            <br/>
            <div id="AboutCont" className="container">
                <div id="AboutCardRow1" className="row">
                    <div id="IDCard" className="col-lg-4 col-md-4 col-12">
                        <AboutUsCard socialLink="https://www.linkedin.com/in/ankit-kumar-27b863137" profileImage={image1} name="Ankit Kumar" />
                    </div>
                    <div id="IDCard" className="col-lg-4 col-md-4 col-12">
                        <AboutUsCard socialLink="https://www.linkedin.com/in/anshul-maheshwari-194706194" profileImage={image2} name="Anshul Maheshwari" />
                    </div>
                    <div id="IDCard" className="col-lg-4 col-md-4 col-12">
                        <AboutUsCard socialLink="https://www.linkedin.com/in/sudhanshu2900" profileImage={image3} name="Sudhanshu Gupta" />
                    </div>
                </div>
                <div id="AboutCardRow1" className="row">
                    <div id="IDCard" className="col-lg-6 col-md-6 col-12">
                        <AboutUsCard socialLink="https://www.linkedin.com/in/tarun-mittal-034168167" profileImage={image4} name="Tarun Mittal" />
                    </div>
                    <div id="IDCard" className="col-lg-6 col-md-6 col-12">
                        <AboutUsCard socialLink="https://www.linkedin.com/in/vishwas-patel-136a3316b" profileImage={image5} name="Vishwas Patel" />
                    </div>
                </div>
            </div>
        </section>

        <section id="footer">
            <Footer rel="#aboutUsPageTop"/>
        </section>

      </>
    );
}

export default AboutPage;