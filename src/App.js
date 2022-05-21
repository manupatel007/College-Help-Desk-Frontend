import { Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import ContactUsPage from "./ContactUsPage";
import Blog from "./Blog";
import BlogPost from "./BlogPost";
import DepartmentPage from "./DepartmentPage";
import Resource from "./StudyResource";
import SignUpLoginPage from "./SignUpLoginPage";
import Dashboard from "./Dashboard";
import Error404Page from "./Error404Page";
import FAQAccordian from "./Components/FAQAccordian";
import DiscussionForum from "./DiscussionForum";
import DiscussionForumQueAnsPage from "./DiscussionForumQueAnsPage";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Blog1" element={<BlogPost />} />
      <Route path="/faq" element={<FAQAccordian />} />
      <Route path="/signup" element={<SignUpLoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Dep" element={<DepartmentPage />} />
      <Route path="/resource" element={<Resource />} />
      <Route path="/undefined" element={<Error404Page />} />
      <Route path="/discuss" element={<DiscussionForum />} />
      <Route path="/queans" element={<DiscussionForumQueAnsPage />} />
    </Routes>
  );
}
