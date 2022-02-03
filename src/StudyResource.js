import React from 'react'
import { useEffect, useState, useRef } from "react";
import './App.css';
import Footer from "./Components/Footer";
import ResourceCard from './Components/ResourceCard';

import {useLocation} from 'react-router-dom';
import Navbar from './Components/Navbar';
import MaterialResourceCard from './Components/MaterialResourceCard';

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
                        {/* <Navbar/> */}
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
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            {
                                resources.length>0 && resources.map((resource, i) => {
                                    return (
                                        <ResourceCard blogheading={resource.name} blogimage blogdescription="Machine Learning is a subset of Artificial Intelligence (AI)." url={resource.url} subject={resource.subject} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="row" style={{paddingTop:'40px'}}>
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='DBMS' year='Year: 2021-22'/>                            
                        </div>
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='DSA' year='Year: 2020-21'/>
                        </div>
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='SE' year='Year: 2019-20'/>                            
                        </div>
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='DCCN' year='Year: 2021-22'/>
                        </div>
                    </div>
                    <div className="row">
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='IOT' year='Year: 2017-18'/>
                        </div>
                        <div id='studyResoCards' className="col-lg-3 col-md-3 col-sm-12">
                            <MaterialResourceCard subject='AI' year='Year: 2020-21'/>                            
                        </div>                        
                    </div>
                </div>
            </section>          
            
            <section id="footer">
                <Footer rel="#blogPageTop"/>
            </section>
        </>
    )
}

export default Resource;