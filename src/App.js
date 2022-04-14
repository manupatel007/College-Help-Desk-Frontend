import { Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import Navbar from "./Components/Navbar";
import Blog from "./Blog";
import Blog1 from "./Blog1";
import DepartmentPage from "./DepartmentPage";
import Resource from "./StudyResource";
import SignUpLoginPage from "./SignUpLoginPage";
import Dashboard from "./Dashboard";
import Error404Page from "./Error404Page";
import FAQAccordian from "./Components/FAQAccordian";
import SampleSlide from "./Components/IconSlider";

export default function App() {
  return (
    <Routes>
<<<<<<< HEAD
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/nav" element={<Navbar />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Dep" element={<DepartmentPage />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/signup" element={<SignUpLoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/undefined" element={<Error404Page />} />
      <Route path="/faqCard" element={<FAQAccordian />} />
      <Route path="/slide" element={<SampleSlide />} />
=======
      <Route exact path="/" element={<LandingPage/>} />
      <Route path="/aboutus" element={<AboutPage/>} />
      <Route path="/contactus" element={<ContactUsPage/>} />
      <Route path="/blog1" element={<Blog1/>} />
      <Route path="/nav" element={<Navbar/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/Dep" element={<DepartmentPage/>} />
      <Route path="/resource" element={<Resource/>} />
      <Route path="/signup" element={<SignUpLoginPage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/error" element={<Error404Page/>} />
      <Route path="/faqCard" element={<FAQAccordian/>} />
>>>>>>> e114740a2f821e518f4eebb4ada3a8cc294c2e34
    </Routes>
  );
}
