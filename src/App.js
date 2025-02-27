import React, { Suspense, lazy } from 'react';
import './App.css';
import { SpeedInsights } from "@vercel/speed-insights/react";
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CourseMaterial from './pages/Materials/CourseMaterial';
import {DepProjects} from './pages/Projects/DepProjects';
import {TextRevealDemo} from './components/TextRevealDemo';
import { Analytics } from "@vercel/analytics/react"

// Lazy-load pages and components
const Home = lazy(() => import('./pages/HomePage/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'));
const BlogsCE = lazy(() => import('./pages/Blogs/Core-Expedition/Blogs_Core-expedition'));
const BlogsIC = lazy(() => import('./pages/Blogs/Intern-Chronicles/Blog_InternChronicles'));
const Events = lazy(() => import('./pages/Events/3D_Events'));
const Gallery = lazy(() => import('./pages/Gallery/Gallery'));

function App() {
  return (
    
    <Router>
      <ScrollToTop />
      <Analytics/> {/* vercel analytics */}
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/core-expedition" element={<BlogsCE />} />
          <Route path="/intern-chronicles" element={<BlogsIC />} />
          <Route path="/events" element={<Events />} />
          <Route path="/course-material" element={<CourseMaterial />} />
          <Route path="/projects" element={<DepProjects />} />
          <Route path="/speed-insights" element={<SpeedInsights />} />
          <Route path="/under-construction" element={<TextRevealDemo />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
    
  );
}

export default App;
