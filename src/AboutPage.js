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
                <div id="aboutUsHeadDiv" style={{padding: '40px'}}>
                    <Navbar/>
                    <div id="space"></div>
                    <div id="aboutheadDiv1" className="row">
                        <h1>ABOUT US</h1>
                    </div>
                    <br/>
                    <div id="aboutheadDiv2" className="row">
                        <h3>About Website</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur illum quisquam commodi, ipsum sint, reprehenderit velit provident, eos voluptatibus optio sapiente? Iure id rerum nam asperiores voluptates delectus corporis perspiciatis quia?</p>
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
                        <AboutUsCard profileImage={image1} name="Ankit Kumar" />
                    </div>
                    <div id="IDCard" className="col-lg-4 col-md-4 col-12">
                        <AboutUsCard profileImage={image2} name="Anshul Maheshwari" />
                    </div>
                    <div id="IDCard" className="col-lg-4 col-md-4 col-12">
                        <AboutUsCard profileImage={image3} name="Sudhanshu Gupta" />
                    </div>
                </div>
                <div id="AboutCardRow1" className="row">
                    <div id="IDCard" className="col-lg-6 col-md-6 col-12">
                        <AboutUsCard profileImage={image4} name="Tarun Mittal" />
                    </div>
                    <div id="IDCard" className="col-lg-6 col-md-6 col-12">
                        <AboutUsCard profileImage={image5} name="Vishwas Patel" />
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