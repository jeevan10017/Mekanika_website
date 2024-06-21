import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import CourseMaterial from './components/CourseMaterial';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import BlogsCE from './components/Blogs_Core-expedition';
import BlogsIC from './components/Blog_InternChronicles';

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/core-expedition" element={<BlogsCE />} />
        <Route path="/intern-chronicles" element={<BlogsIC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course-material" element={<CourseMaterial />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
      <Footer />
      <Copyright/>
    </Router>
  );
}

export default App;
