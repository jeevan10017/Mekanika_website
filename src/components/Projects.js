// import React from 'react';
// import './Projects.css';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: 'Development of autonomous multipurpose agricultural robotic platform (AUR)',
//       startDate: '28-Jun-2019',
//       faculties: ['Prof. Dilip Kumar Pratihar'],
//       sponsor: 'GOVERNMENT OF INDIA',
//     },
//     {
//       id: 1,
//       title: 'High-performance gpu based immersed boundary methods for simulations of biological flows (HGS_SKI)',
//       startDate: '31-May-2019',
//       faculties: ['Prof. Somnath Roy'],
//       sponsor: 'not available',
//     },
//     {
//       id: 1,
//       title: 'Hybrid mechanical vapor compression with coupled pressure and temperature swing adsorption for smart chiller (VPI)',
//       startDate: '14-May-2019',
//       faculties: ['Prof. Sourav Mitra'],
//       sponsor: 'GOVERNMENT OF INDIA',
//     },
//     {
//       id: 1,
//       title: 'Design and development of co2 based secondary loop systems for cold storage applications (CBL',
//       startDate: '01-May-2019',
//       faculties: ['Prof. Maddali Ramgopa'],
//       sponsor: 'GOVERNMENT OF INDIA',
//     },
//     {
//       id: 1,
//       title: 'Emulsion generation and manipulation using electric fields (EEF)',
//       startDate: '01-Apr-2019',
//       faculties: ['Prof. Suman Chakraborty'],
//       sponsor: '',
//     },
    
//   ];

//   return (
//     <section id="projects" className="projects-section">
//       <div className="container">
//         <h2 className="section-title"> Ongoing Projects In Mechanical Department</h2>
//         <div className="projects-list">
//           {projects.map(project => (
//             <div key={project.id} className="project-card">
//               <h3 className="project-title">{project.title}</h3>
//               <p className="project-info">
//                 <span className="info-label">Start Date:</span>{' '}
//                 {new Date(project.startDate).toLocaleDateString('en-US', {
//                   year: 'numeric',
//                   month: 'long',
//                   day: 'numeric',
//                 })}
//               </p>
//               <p className="project-info">
//                 <span className="info-label">Faculties Involved:</span>{' '}
//                 {project.faculties.join(', ')}
//               </p>
//               <p className="project-info">
//                 <span className="info-label">Sponsor:</span> {project.sponsor}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Ongoing Projects in Mechanical Engineering Department</h2>
        <div className="projects-list">
          <div className="project-card">
            <h3 className="project-title">Development of autonomous multipurpose agricultural robotic platform (AUR)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span> 28-Jun-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Dilip Kumar Pratihar
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> GOVERNMENT OF INDIA
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">High-performance gpu based immersed boundary methods for simulations of biological flows (HGS_SKI)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span> 31-May-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Somnath Roy
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> 
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Hybrid mechanical vapor compression with coupled pressure and temperature swing adsorption for smart chiller (VPI)(AUR)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span> 14-May-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Sourav Mitra
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> GOVERNMENT OF INDIA
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Design and development of co2 based secondary loop systems for cold storage applications (CBL)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span> 01-May-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Maddali Ramgopal
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> GOVERNMENT OF INDIA
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Metal powder production for additive manufacturing (ppam) (MPP) (CBL)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span>25-Mar-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Suman Chakraborty
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> INDO-FOREIGN (COLLABORATION)
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Micro and nano-scale flows through deformable confinements (NTD_SKI)</h3>
            <p className="project-info">
              <span className="info-label">Start Date:</span> 15-Mar-2019
            </p>
            <p className="project-info">
              <span className="info-label">Faculties Involved:</span> Prof. Jeevanjyoti Chakraborty
            </p>
            <p className="project-info">
              <span className="info-label">Sponsor:</span> 
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Projects;
