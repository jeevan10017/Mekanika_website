import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Current Projects Going on in Mechanical Engineering Department</h2>
        <div className="project-list">
          <div className="project">
            <div className="project-info">
              <h3 className="project-title">Development of autonomous multipurpose agricultural robotic platform (AUR)</h3>
              <p className="project-date">Start Date: 28-Jun-2019</p>
              <p className="project-faculties">Faculties Involved: Prof. Dilip Kumar Pratihar</p>
              {/* <p className="project-sponsor">Sponsor: GOVERNMENT OF INDIA</p> */}
            </div>
          </div>
          <div className="project">
            <div className="project-info">
              <h3 className="project-title">High-performance gpu based immersed boundary methods for simulations of biological flows (HGS_SKI)</h3>
              <p className="project-date">Start Date: 31-May-2019</p>
              <p className="project-faculties">Faculties Involved: Prof. Prof. Somnath Roy</p>
              {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
            </div>
          </div>
          <div className="project">
            <div className="project-info">
              <h3 className="project-title">Micro and nano-scale flows through deformable confinements (NTD_SKI)</h3>
              <p className="project-date">Start Date: 15-Mar-2019</p>
              <p className="project-faculties">Faculties Involved: Prof. Jeevanjyoti Chakraborty</p>
              {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
            </div>
          </div>
          <div className="project">
            <div className="project-info">
              <h3 className="project-title">Hybrid mechanical vapor compression with coupled pressure and temperature swing adsorption for smart chiller (VPI)</h3>
              <p className="project-date">Start Date: 14-May-2019</p>
              <p className="project-faculties">Faculties Involved: Prof. Sourav Mitra</p>
              {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
            </div>
          </div>
          <div className="project">
            <div className="project-info">
              <h3 className="project-title">Metal powder production for additive manufacturing (ppam) (MPP)</h3>
              <p className="project-date">Start Date: 25-Mar-2019</p>
              <p className="project-faculties">Faculties Involved: Prof. Suman Chakraborty</p>
              {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
            </div>
          </div>
          {/* Add more project entries */}
        </div>
        {/* <p className="projects-disclaimer">Disclaimer: This is a sample demowebsite of Mekanika</p> */}
      </div>
    </section>
  );
}

export default Projects;
