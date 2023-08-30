import React from 'react';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Events from './components/Events';
import CourseMaterial from './components/CourseMaterial';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Home from './components/Home';
import GoToTopButton from './components/GoToTopButton';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutUs />
      <Events />
      <CourseMaterial />
      <Projects />
      <Footer />
      <GoToTopButton/>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const target = document.querySelector(event.target.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});


export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Events from './components/Events';
// import CourseMaterial from './components/CourseMaterial';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
// import ClassNotesPage from './components/ClassNotesPage'; // Import the new component

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/about" component={AboutUs} />
//           <Route path="/events" component={Events} />
//           <Route path="/course-material" component={CourseMaterial} />
//           <Route path="/projects" component={Projects} />
//           <Route path="/class-notes/:id" component={ClassNotesPage} /> {/* Dynamic route for class notes */}
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
