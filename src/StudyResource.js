import React from 'react'
import { useEffect, useState, useRef } from "react";
import './App.css';
import Footer from "./Components/Footer";
import ResourceCard from './Components/ResourceCard';

import {useLocation} from 'react-router-dom';
import Navbar from './Components/Navbar';

function Resource() {
    const location = useLocation();
    const [resources, setResources] = useState([]);
    const branch = location.state.branch;
    const resourceId = location.state.resourceId;
    const year = location.state.year;
    const heading = location.state.heading;

    function getResource(){
        fetch("https://collegebackenc.herokuapp.com/chats/resource/", {
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
                        <Navbar/>
                        <div id="space"></div>
                        <div id="blogHeading" className="row">
                            <h1>{heading}</h1>
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
                                        <ResourceCard blogheading={resource.name} blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." url={resource.url} subject={resource.subject} />
                                    )
                                })
                            }
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12" style={{padding: '0 30px 0 30px'}}>
                            <div id="space"></div>
                            <div><h6 style={{fontWeight: '700', color: 'lightgray', fontSize: '15px'}}>No new Anouncements</h6></div>
                            <div>
                                <div className="row" style={{fontSize: '12px', color: 'lightgray', textAlign: 'center'}}>
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