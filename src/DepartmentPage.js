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

import Navbar from './Components/Navbar';

function DepartmentPage() {
    return (
        <>
            <br/>
            <div className="container">
                <div id="departmentHeadDiv" className="row">
                    <Navbar/>
                    <div id="space"></div>
                    <h1>COMPUTER SCIENCE (4th Year)</h1>
                    <div id="space"></div>
                    <p>Computer Science Engineering is a course that deals with design, implementation, and management of information systems of both software & hardware processes. A computer scientist specializes in theory of computation and design of computational systems. Computer Science engineering aids with various disciplines such as electrical and electronics engineering, information technology, software engineering, and more. </p>
                    <p>There are various courses and degree programmes similar to computer science courses. The major difference between these courses is the application of the core subjects and their functionalities used during the industrial experience.</p>
                </div>

                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <DepartmentCard logo={<AiOutlineCluster size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Syllabus" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <DepartmentCard logo={<AiOutlineFileMarkdown size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Mid Term Papers" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <DepartmentCard logo={<AiOutlineFilePpt size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="RTU Papers" />
                    </div>
                </div>

                <div className="row">
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <DepartmentCard logo={<AiOutlineBook size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Reference Books" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <DepartmentCard logo={<AiOutlineFileText size='50px' color='lightgray' style={{display:'flex', margin:'auto', marginBottom:'20px'}}/>} subHeading="Subject Notes" />
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
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
