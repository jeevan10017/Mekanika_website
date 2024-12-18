import React from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import CourseMaterial from './components/CourseMaterial';
// import Projects from './components/Projects';
import {DepProjects} from './pages/Projects/DepProjects';
import Footer from './components/Footer';
import BlogsCE from './pages/Blogs/Core-Expedition/Blogs_Core-expedition';
import BlogsIC from './pages/Blogs/Intern-Chronicles/Blog_InternChronicles';
import Navbar from './components/Navbar';
import {Events} from './pages/Events/3D_Events';
import {TextRevealDemo} from './components/TextRevealDemo';
// import SignUpMechanism from './components/SignUpMechanism.jsx';


function App() {
  return (
    <Router>
      <ScrollToTop />
        {/* <Header />   */}
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/core-expedition" element={<BlogsCE />} />
        <Route path="/intern-chronicles" element={<BlogsIC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course-material" element={<CourseMaterial />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/projects" element={<DepProjects />} />
        <Route path="/speed-insights" element={<SpeedInsights />} />
        <Route path="/under-construction" element={<TextRevealDemo />} />
        {/* <Route path="/registration" element={<SignUpMechanism />} /> */}
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
