import { Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import Navbar from "./Components/Navbar";
import Blog from "./Blog";
import DepartmentPage from "./DepartmentPage";
import Resource from "./StudyResource";
import SignUpLoginPage from "./SignUpLoginPage";
// import SignUpLoginPage from "./SignUpLoginPage";

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
    </Routes>
  );
}