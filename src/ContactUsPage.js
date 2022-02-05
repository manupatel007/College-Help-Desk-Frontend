import React from "react";
import Footer from "./Components/Footer";
import ContactUsIcons from "./Components/ContactUsIcons";
import "./App.css";

import { BsTelephone } from "react-icons/bs";
import { BsEnvelopeOpen } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsCursor } from "react-icons/bs";
import Navbar from "./Components/Navbar";


function ContactUsPage() {
  return (
    <>  
        <section id="contactUsPageTop">
            <div className="container">
                <br/>
                <div id="contactUsHeadDiv" style={{padding: '20px 10px 20px 10px'}}>
                    <Navbar/>
                    <div id="space"></div>

                    <div id="contactUsHeading" className="row" style={{padding: '0 30px 20px 30px'}}>
                        <h1>CONTACT US</h1>
                    </div>
                    
                    <div id="space"></div>

                    <div className="row" style={{padding: '0 30px 0 20px'}}>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="row"><ContactUsIcons icon={<BsTelephone />} head1="Call Us" head2="+91 9412345678" /></div>
                            <div className="row"><ContactUsIcons icon={<BsEnvelopeOpen />} head1="Mail Us" head2="collegebook@gmail.com" /></div>
                            <div className="row"><ContactUsIcons icon={<BsGeoAlt />} head1="Location" head2="Jaipur, Rajasthan" /></div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div class="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email ID" />
                                </div>
                            </div>
                            <br/>
                            <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message" rows="3"></textarea>
                                <br/><button id="contactBtn">Send <BsCursor /></button>
                            </div>
                        </div>
                    </div>

                    <div id="space"></div>

                </div>
            </div>
        </section>

        <div id="space"></div>

        <section id="footer">
            <Footer rel="#contactUsPageTop"/>
        </section>
    </>
  );
}

export default ContactUsPage;
