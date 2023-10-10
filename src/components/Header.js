
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from './Mekanika_logo.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Mekanika Logo" />
        <h1>Mekanika</h1>
      </div>
      <nav className="nav">
        <ul>
        <li><Link to="/Mekanika_website_design">Home</Link></li>
          <li>

            {/* <Link to="/about">AboutUs</Link> */}
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/course-material">CourseMaterial</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          {/* <li>
            <Link to="/Team">Team</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;




// Header.js

// import React from 'react';


// function Header() {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/events">Events</Link>
//           </li>
//           <li>
//             <Link to="/course-materials">Course Materials</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
