import React from 'react';
import './App.css';
import Footer from "./Components/Footer";
import { AiOutlineHome } from 'react-icons/ai';

function Dashboard() {
  return (
    <>
        <section id="Dashboard">
            <div className="container">
                <div id='dashHeading' className="row" style={{textAlign:'center', marginTop:'50px', marginBottom:'20px'}}>
                    <div className="dashHead"><h1>Dashboard</h1></div>
                </div>
                <div id='panel' className="row">
                    <div className="dashIcon"><img src='./avatar.png' alt='avtar'/></div>
                    <div className="dashName">
                        <h2>Sudhanshu Gupta</h2>
                        <p>sudhanshu29gupta@gmail.com</p>
                    </div>
                </div>
                <div id='saveAndBookmark' className="row">
                    <div id='saveItem' className="col-lg-9 col-md-12 col-sm-12">
                        <h4>Saved Resources</h4>
                        <p>{'>'} DBMS RTU Paper 2019-20</p>
                        <p>{'>'} DSA Reference Book</p>
                        <p>{'>'} IOT Syllabus</p>
                    </div>
                    <div id='bookmarkItem' className="col-lg-3 col-md-12 col-sm-12">
                        <h5>Bookmark Subjects</h5>
                        <p>Database Management System</p>
                        <p>Software Engineering</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="footer">
            <Footer rel="#Dashboard"/>
        </section>
    </>
  );
}

export default Dashboard;
