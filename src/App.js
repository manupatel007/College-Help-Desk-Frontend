import { Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import Navbar from "./Components/Navbar";
import Blog from "./Blog";
import DepartmentPage from "./DepartmentPage";
import Resource from "./StudyResource";
import SignUpLoginPage from "./SignUpLoginPage";
import Dashboard from "./Dashboard";
import Error404Page from "./Error404Page";
import FAQAccordian from "./Components/FAQAccordian";



export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/aboutus" element={<AboutPage/>} />
      <Route path="/contactus" element={<ContactUsPage/>} />
      <Route path="/nav" element={<Navbar/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/Dep" element={<DepartmentPage/>} />
      <Route path="/resource" element={<Resource/>} />
      <Route path="/signup" element={<SignUpLoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/error" element={<Error404Page/>} />
      <Route path="/faqCard" element={<FAQAccordian/>} />
    </Routes>
  );
}