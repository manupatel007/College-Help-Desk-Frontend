import React from 'react';
import './App.css';
import DepartmentCard from "./Components/DepartmentCard";
import Footer from './Components/Footer';
import { AiOutlineCluster } from "react-icons/ai";
import { AiOutlineFileMarkdown } from "react-icons/ai";
import { AiOutlineFilePpt } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineFileText } from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import Info from "./GlobalVars";
import {Link, useNavigate} from 'react-router-dom';

import {useLocation} from 'react-router-dom';

import Navbar from './Components/Navbar';

function DepartmentPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const toResource = (id) => {
        // console.log(e, "oho");
        navigate('/resource',{state:{resourceId:id, branch:location.state.id, year:location.state.year}});
    }

    return (
        <>
            <br/>
            <div className="container">
                <div id="departmentHeadDiv" className="row">
                    <h1>{Info[location.state.id].title} ({Info[location.state.year]})</h1>
                    <div id="space"></div>
                    <p>{Info[location.state.id].description}</p>
                    <p>There are various courses and degree programmes similar to computer science courses. The major difference between these courses is the application of the core subjects and their functionalities used during the industrial experience.</p>
                </div>

                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-12' id="0" onClick={() => toResource(0)}>
                        <DepartmentCard logo={<AiOutlineCluster size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Syllabus" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="1" onClick={() => toResource(1)}>
                        <DepartmentCard logo={<AiOutlineFileMarkdown size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Mid Term Papers" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="2" onClick={() => toResource(2)}>
                        <DepartmentCard logo={<AiOutlineFilePpt size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="RTU Papers" />
                    </div>
                </div>

                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-12' id="3" onClick={() => toResource(3)}>
                        <DepartmentCard logo={<AiOutlineBook size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Reference Books" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="4" onClick={() => toResource(4)}>
                        <DepartmentCard logo={<AiOutlineFileText size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Subject Notes" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12' id="5" onClick={() => toResource(5)}>
                        <DepartmentCard logo={<AiOutlineDesktop size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Video Lectures" />
                    </div>
                </div>
            </div>


            <section id="footer">
                <Footer rel="#aboutUsPageTop"/>
            </section>
        </>
    )
}

export default DepartmentPage;
