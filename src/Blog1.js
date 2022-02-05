import React from 'react'
import './App.css';
import Footer from "./Components/Footer";
import image1 from './photo/BG.png';
import { BsArrowLeftCircle } from 'react-icons/bs';

function blog1() {
    
    return (
        <>
            <section id="blogPageTop">
                <div className="container">
                    <br/>
                    <div id="blogHeadDiv" style={{padding: '20px 200px 30px 200px'}}>
                    
                        <div id="space"></div>
                        <div className="right2left">
                <div id="arrow"><a href={'/blog'}><BsArrowLeftCircle size={30} color="white"/></a></div>
            </div>
                
                        <div id="blogHeading2" className="row">
                            <h5>Artificial Intelligence</h5>
                        </div>
                        <div id="blogHeading1" className="row">
                            <h1>Artificial Intelligence is The Factor</h1>
                        </div>

                        <br/>
                        <div>
                        <img src={image1} alt="TopImage" height="400px" width="10%"/>
                        </div>
                        <br/>
                        <div id="blogheadDiv3" className="row">
                        
                            <p>Artificial Intelligence (AI) is a broad branch of computer science that is focused on a machine’s capability to produce rational behavior from external inputs. The goal of AI is to create systems that can perform tasks that would otherwise require human intelligence. AI manifests itself in everyday life via virtual assistants, search prediction technology, and even ride-hailing services.</p>
                            <p>Artificial intelligence’s growing popularity in the 21st century is largely due to the advancements in the sub-field of machine learning. Machine learning develops systems that improve upon themselves, which is accomplished through the identification of algorithms. Some processes that machine learning optimizes include paperwork automation, forensic accounting, and algorithmic trading.</p>
                        </div>
                        <br/>
                        
                    </div>
                </div>      
            </section> 

                      
            
            <div id="space"></div>
            <section id="footer">
                <Footer rel="#blogPageTop"/>
            </section>
            
        </>
    )
}

export default blog1;