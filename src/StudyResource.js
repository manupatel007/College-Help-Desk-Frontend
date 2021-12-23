import React from 'react'
import { useEffect, useState, useRef } from "react";
import './App.css';
import Footer from "./Components/Footer";
import BlogCard from "./Components/BlogCard";

import {useLocation} from 'react-router-dom';

function Resource() {
    const location = useLocation();
    const [resources, setResources] = useState([]);
    const branch = location.state.branch;
    const resourceId = location.state.resourceId;
    const year = location.state.year;

    function getResource(){
        fetch("https://botchat.vishwas007.repl.co/chats/resource/", {
        method: "POST",
        body: JSON.stringify({
            branch: branch,
            year: year,
            resourceId: resourceId
        }),
        headers: {
            "Content-type": "application/json"
        }
        })
        .then((response) => {
            return response.json();
        })

        // Displaying results to console
        .then((json) => {
            console.log(json);
            setResources([...json]);
            // console.log(resources);
        })
        // .then(() => {
        //     console.log(resources);
        // })
        .catch((error) => console.log(error));
    }

    useEffect(() => {
        getResource();
      }, []);

    return (
        <>
            <section id="blogPageTop">
                <div className="container">
                    <br/>
                    <div id="blogHeadDiv" style={{padding: '40px'}}>
                        <div id="space"></div>
                        <div id="space"></div>

                        <div id="blogHeading" className="row">
                            <h1>BLOG</h1>
                        </div>

                        <br/>
                        <div id="blogheadDiv2" className="row">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <br/>
                        <div id="getStartBtn">
                            <a href="#blogCardSec">READ BLOGS</a>
                        </div>
                    </div>
                </div>      
            </section> 

            <section id="blogCardSec">
                <div className ="container">
                    <div className='row'>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                            {
                                resources.length>0 && resources.map((resource, i) => {
                                    return (
                                        <BlogCard blogheading={resource.name} blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." url={resource.url} />
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12" style={{padding: '0 30px 0 30px'}}>
                            <div id="space"></div>
                            <div><h6 style={{fontWeight: '700', color: 'lightgray', fontSize: '15px'}}>BLOGS ARE WRITTEN IN THESE DOMAINS</h6></div>
                            <div>
                                <div className="row" style={{fontSize: '12px', color: 'lightgray', textAlign: 'center'}}>
                                    <div style={{ width:'30%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>C++</div>
                                    <div style={{ width:'30%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Java</div>
                                    <div style={{ width:'25%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>C</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Python</div>
                                    <div style={{ width:'53%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Machine Learning</div>
                                    <div style={{ width:'50%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Deep Learning</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>OpenCV</div>
                                    <div style={{ width:'45%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Cyber Security</div>
                                    <div style={{ width:'40%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Big Data</div>
                                    <div style={{ width:'60%', backgroundColor:'#041228', borderRadius: '3px', margin: '5px', paddingTop: '4px', paddingBottom: '4px'}}>Cloud Computing</div>
                                </div>
                            </div>
                        </div>
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

export default Resource;