// import React from 'react';
// import Header from './components/Header';
// import AboutUs from './components/AboutUs';
// import Events from './components/Events';
// import CourseMaterial from './components/CourseMaterial';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import GoToTopButton from './components/GoToTopButton';
// import Map from './components/Map'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//       <Map/>
//       <AboutUs />
//       <Events />
//       <CourseMaterial />
//       <Projects />
//       <Footer />
//       <GoToTopButton/>
//     </div>
//   );
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('nav a');

//   navLinks.forEach(link => {
//     link.addEventListener('click', event => {
//       event.preventDefault();
//       const target = document.querySelector(event.target.getAttribute('href'));
//       if (target) {
//         target.scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         });
//       }
//     });
//   });
// });


// App.js

// App.js

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Events from './components/Events';
// import CourseMaterial from './components/CourseMaterial';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// // import Team from './components/Team';

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/course-material" element={<CourseMaterial />} />
//         <Route path="/projects" element={<Projects />} />
//         {/* <Route path="/Team" element={<Team />} /> */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import CourseMaterial from './components/CourseMaterial';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header />
      <Routes>
        {/* Set the Home component as the default route */}
      
        <Route path="/Mekanika_website_design" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/course-material" element={<CourseMaterial />} />
        <Route path="/projects" element={<Projects />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
