// import React from 'react';
// import './Projects.css';

// const Projects = () => {
//   return (
//     <section id="projects" className="projects-section">
//       <div className="container">
//         <h2 className="section-title">Ongoing Projects in Mechanical Engineering Department</h2>
//         <div className="project-list">
//           <div className="project">
//             <div className="project-info">
//               <h3 className="project-title">Development of autonomous multipurpose agricultural robotic platform (AUR)</h3>
//               <p className="project-date">Start Date: 28-Jun-2019</p>
//               <p className="project-faculties">Faculties Involved: Prof. Dilip Kumar Pratihar</p>
//               {/* <p className="project-sponsor">Sponsor: GOVERNMENT OF INDIA</p> */}
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-info">
//               <h3 className="project-title">High-performance gpu based immersed boundary methods for simulations of biological flows (HGS_SKI)</h3>
//               <p className="project-date">Start Date: 31-May-2019</p>
//               <p className="project-faculties">Faculties Involved: Prof. Prof. Somnath Roy</p>
//               {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-info">
//               <h3 className="project-title">Micro and nano-scale flows through deformable confinements (NTD_SKI)</h3>
//               <p className="project-date">Start Date: 15-Mar-2019</p>
//               <p className="project-faculties">Faculties Involved: Prof. Jeevanjyoti Chakraborty</p>
//               {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-info">
//               <h3 className="project-title">Hybrid mechanical vapor compression with coupled pressure and temperature swing adsorption for smart chiller (VPI)</h3>
//               <p className="project-date">Start Date: 14-May-2019</p>
//               <p className="project-faculties">Faculties Involved: Prof. Sourav Mitra</p>
//               {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
//             </div>
//           </div>
//           <div className="project">
//             <div className="project-info">
//               <h3 className="project-title">Metal powder production for additive manufacturing (ppam) (MPP)</h3>
//               <p className="project-date">Start Date: 25-Mar-2019</p>
//               <p className="project-faculties">Faculties Involved: Prof. Suman Chakraborty</p>
//               {/* <p className="project-sponsor">Sponsor: XYZ Industries</p> */}
//             </div>
//           </div>
//           {/* Add more project entries */}
//         </div>
//         {/* <p className="projects-disclaimer">Disclaimer: This is a sample demowebsite of Mekanika</p> */}
//       </div>
//     </section>
//   );
// }

// export default Projects;
import React, { useState, useEffect } from 'react';
import './Projects.css';

const projectData = [
  {
    id: 1,
    title: 'Development of autonomous multipurpose agricultural robotic platform (AUR)',
    Startdate: '28-Jun-2019',
    faculties: [
      { name: ' Prof. Dilip Kumar Pratihar', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 2,
    title: 'Development of a Hybrid Continuum to Atomistic Scale Solver for Multiscale Flow Problems National Supercomputing Mission (NSM)',
    Startdate: '31-May-2019',
    faculties: [
      { name: ' Prof. Somnath Roy', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy' },
    ],
  },
  {
    id: 2,
    title: 'Nodal Center in HPC and AI at IIT Kharagpur under National Supercomputing Mission (NSM) Centre for Development of Advanced Computing',
    Startdate: '31-May-2019',
    faculties: [
      { name: ' Prof. Somnath Roy', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy' },
    ],
  },
  {
    id: 2,
    title: 'Hydroelasticity of a Large and High Speed Ships Considering the Slamming and Green Water Impact on Regular and Ir-regular Waves Naval Research Board',
    Startdate: '31-May-2019',
    faculties: [
      { name: ' Prof. Somnath Roy', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy' },
    ],
  },
  {
    id: 3,
    title: 'Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest',
    Startdate: '14-May-2019',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-sourav' },
    ],
  },
  {
    id: 3,
    title: 'VERIFICATION OF HVAC DESIGN FOR MES BASE HOSPITAL EARTH ENVIRON SYSTEM',
    Startdate: '14-May-2019',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-sourav' },
    ],
  },
  {
    id: 3,
    title: 'National Centre for Clean Coal Research and Development Department of Science and Technology (DST)',
    Startdate: '14-May-2019',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-sourav' },
    ],
  },
  {
    id: 3,
    title: 'Oxygen Concentrator and Allied Technologies IITKGP FOUNDATION OF USA',
    Startdate: '14-May-2019',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-sourav' },
    ],
  },
  {
    id: 3,
    title: 'Tesla turbine for Organic Rankine Cycles (TORC) Science and Engineering Research Board (SERB)',
    Startdate: '14-May-2019',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-sourav' },
    ],
  },
  {
    id: 4,
    title: 'VERIFICATION OF HVAC DESIGN FOR MES BASE HOSPITAL EARTH ENVIRON SYSTEM',
    Startdate: '01-May-2019',
    faculties: [
      { name: ' Prof. Maddali Ramgopal', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-ramg' },
    ],
  },
  {
    id: 4,
    title: 'Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest',
    Startdate: '01-May-2019',
    faculties: [
      { name: ' Prof. Maddali Ramgopal', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-ramg' },
    ],
  },
  {
    id: 4,
    title: 'Educational Program for Sustainable Heating and Cooling Solutions for India (EduCool) Research Council of Norway',
    Startdate: '01-May-2019',
    faculties: [
      { name: ' Prof. Maddali Ramgopal', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-ramg' },
    ],
  },
  {
    id: 4,
    title: 'Mine Ventilation and Air Conditioning Studies at Moonidih Mines, Dhanbad, Jharkhand GAYATRI PROJECTS LIMITED',
    Startdate: '01-May-2019',
    faculties: [
      { name: ' Prof. Maddali Ramgopal', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-ramg' },
    ],
  },
  {
    id: 4,
    title: 'VERIFICATION OF HVAC DESIGN FOR MES BASE HOSPITAL EARTH ENVIRON SYSTEM',
    Startdate: '01-May-2019',
    faculties: [
      { name: ' Prof. Maddali Ramgopal', link: 'https://www.iitkgp.ac.in/department/ME/faculty/me-ramg' },
    ],
  },
  {
    id: 5,
    title: 'A hand-held blood perfusion imager for the detection of oral pre-cancer and cancer SPATIAL KARMA RESOURCES PRIVATE LIMITED',
    Startdate: '01-Apr-2019',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://sites.google.com/site/sumanchakrabortymicrofluidics/' },
    ],
  },
  {
    id: 6,
    title: 'A Paper-And-Pencil - Based Diagnostic Kit for Simultaneous Detection of One or Multiple Analytes (covered by the filed patent identifier number 701/KOL/2015) REVOLUT HEALTHTECH PRIVATE LIMITED',
    Startdate: '25-Mar-2019',
    faculties: [
      { name: ' Prof. Suman Chakraborty', link: 'https://sites.google.com/site/sumanchakrabortymicrofluidics/' },
    ],
  },
  {
    id: 7,
    title: 'Electrohydrodynamics for avionics cooling (EYA)',
    Startdate: '19-Mar-2019',
    faculties: [
      { name: 'Prof. Anandaroop Bhattacharya', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },


  
  {
    id: 8,
    title: 'Confinement-inducted dynamics in nanoscale phase transition (IDN_SKI)',
    Startdate: '15-Mar-2019',
    faculties: [
      { name: ' Prof. Suman Chakraborty', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 9,
    title: 'Micro and nano-scale flows through deformable confinements (NTD_SKI)',
    Startdate: '15-Mar-2019',
    faculties: [
      { name: ' Prof. Jeevanjyoti Chakraborty', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 10,
    title: 'Design and development of an architecture for cooperative control and coordination of robots for different applications based on iot platforms (CDI)',
    Startdate: '13-Mar-2019',
    faculties: [
      { name: ' Prof. Cheruvu Siva Kumar', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 11,
    title: 'Droplet microfluidics for the highly controlled dynamic synthesis of plasmonic metallic nanoparticles (HCN)',
    Startdate: '08-Mar-2019',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 12,
    title: 'The study of flow, turbulence and heat transfer enhancement in a gas-liquid near-wall bubbly flow considering bubble breakup and coalescence (scheme - 3237) (FLB)',
    Startdate: '21-Feb-2019',
    faculties: [
      { name: ' Prof. Prasanta Kumar Das', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 13,
    title: 'Prototype development and commercialization of point-of-care diagnostic devices (CCD)',
    Startdate: '01-Jan-2019',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 14,
    title: 'National centre for clean coal research and development (NRV)',
    Startdate: '13-Sep-2018',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty3link.com' },
      { name: ' Prof. Prasanta Kumar Das', link: 'https://faculty4link.com' },
    ],
  },
  {
    id: 15,
    title: 'Thermal technology toolkit for smart computing systems for iot applications (TTA)',
    Startdate: '01-Sep-2018',
    faculties: [
      { name: 'Prof. Anandaroop Bhattacharya', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 16,
    title: 'Design of high power rated battery packs for electric vehicles with effective thermal and stress management strategies for enhanced safety and performance (BTS_ICG_2017_SGSIS)',
    Startdate: '15-Jul-2018',
    faculties: [
      { name: ' Prof. Vikranth Racherla', link: 'https://sites.google.com/site/softcomputinglaboratory/home' },
    ],
  },
  {
    id: 17,
    title: 'Hybrid mobile manipulator: uninterrupted manipulation and locomotion on uneven terrain (HML_ICG_2017_SGSIS)',
    Startdate: '01-Jul-2018',
    faculties: [
      { name: 'Prof. Dilip Kumar Pratihar', link: 'https://faculty3link.com' },
     
    ],
  },
  {
    id: 18,
    title: 'Nanoscale transport and biological interfaces (NTI)',
    Startdate: '01-Jul-2018',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Electrothermal flows for thermal management of electronics (OFT)',
    Startdate: '28-Jun-2018',
    faculties: [
      { name: 'Prof. Anandaroop Bhattacharya', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Design and manufacturing of patient specific dental implants composed of porous titanium functionalized with osseointegration-promoting and antibacterial coatings (PFO)',
    Startdate: '26-Jun-2018',
    faculties: [
      { name: 'Prof. Cheruvu Siva Kumar', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Indo-korean joint network centre on computational materials (IJN)',
    Startdate: '20-Jun-2018',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Diffusion limited sres for high-efficiency biomedical devices (LHD_ICG_2017_SGCIR)',
    Startdate: '18-Jun-2018',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Two phase mechanically pumped fluid loop (mpfl) with micro-channel based evaporator for application to high power communication spacecraft, interplanetary mission and human space mission (PHS)',
    Startdate: '24-May-2018',
    faculties: [
      { name: 'Prof. Prasanta Kumar Das', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Virtual labs (phase iii) (ALP)',
    Startdate: '21-May-2018',
    faculties: [
      { name: 'Prof. Cheruvu Siva Kumar', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Cryopsy : biopsy tool with in-vivo snap-freezing and cooling of surrounding tissue to reduce bleeding and escalate patient recovery and comfort (CVC)',
    Startdate: '01-May-2018',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Design and development of an electric pickup truck with emphasis on passively cooled, balanced battery pack design for maximizing range and battery pack life (BPD)',
    Startdate: '01-Apr-2018',
    faculties: [
      { name: 'Prof. Vikranth Racherla', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Volumetric and calorimetric analysis of adsorption phenomenon for chiller and energy storage applications (VCE)',
    Startdate: '15-Mar-2018',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Volumetric and calorimetric analysis of adsorption phenomenon for chiller and energy storage applications (VCE)',
    Startdate: '15-Mar-2018',
    faculties: [
      { name: 'Prof. Sourav Mitra', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Sound localization of high explosive artillery shell explosion (LEE)',
    Startdate: '26-Feb-2018',
    faculties: [
      { name: 'Prof. Amiya Ranjan Mohanty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Analysis of sample using sem and xrd, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. (XYZ-20)',
    Startdate: '03-Oct-2017',
    faculties: [
      { name: 'Prof. Soumitra Paul', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Multiscale modelling of flexible and stretchable energy storage devices (MFD)',
    Startdate: '23-Jun-2017',
    faculties: [
      { name: 'Prof. Jeevanjyoti Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Numerical investigation or dynamics of blood clots in diseased carotid artery (ODC)',
    Startdate: '21-Jun-2017',
    faculties: [
      { name: 'Prof. Somnath Roy', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Indigenous development of online process monitoring of laser surface hardening, cladding and additive manufacturing and studies on dynamic mechanical behavior of manufactured parts (project no.: 6917) (BOS)',
    Startdate: '24-Mar-2017',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Extreme point of case diagnostics on a cd (ENC)',
    Startdate: '24-Mar-2017',
    faculties: [
      { name: 'Prof. Suman Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Development of a cost effective left ventricular assist device (lvad) with centrifugal mechanical circulator, drive system and associated control (proposal id - 7781) (PLA)',
    Startdate: '08-Feb-2017',
    faculties: [
      { name: 'Prof. Prasanta Kumar Das', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Unravelling heat transfer mechanism in nucleate boiling using multiscale simulations (HBU)',
    Startdate: '07-Feb-2017',
    faculties: [
      { name: 'Prof. Rajaram Lakkaraju', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Direct injection compressed natural gas fuelled engine and its performance, combustion and emissions characterization (IPE)',
    Startdate: '25-Jan-2017',
    faculties: [
      { name: 'Prof. Dhananjay Kumar Srivastava', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Development of a gps receiver for gagan / navic to provide high precision navigation for autonomous robotic applications in indian sub-continent (NNS)',
    Startdate: '10-Jan-2017',
    faculties: [
      { name: 'Prof. Cheruvu Siva Kumar', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Re - food: international partnership for research and education in energy efficient resource utilization in food value chains between norway and india (project code 261709) (IRA)',
    Startdate: '01-Jan-2017',
    faculties: [
      { name: 'Prof. Maddali Ramgopal', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Multiscale modelling of flexible supercapacitors (MOF)',
    Startdate: '16-Aug-2016',
    faculties: [
      { name: 'Prof. Jeevanjyoti Chakraborty', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Experimental investigation of pool boiling and direct contact condensation in high porosity metal foams (EAH',
    Startdate: '11-Feb-2016',
    faculties: [
      { name: 'Prof. Anandaroop Bhattacharya', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Study of high speed deep grinding of titanium alloy and ceramics using monolayer electroplated super-abrasive wheel (gtmap) (SGT)',
    Startdate: '01-Feb-2016',
    faculties: [
      { name: 'Prof. Soumitra Paul', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Mission project for virtual labs - pilot phase (MVL)',
    Startdate: '01-Apr-2009',
    faculties: [
      { name: 'Prof. Cheruvu Siva Kumar', link: 'https://faculty5link.com' },
    ],
  },
  {
    id: 18,
    title: 'Design, development and fabrication of an automobile for participation in sae formula 1 contest for students (FAA)',
    Startdate: '19-Feb-2009',
    faculties: [
      { name: 'Prof. Dhananjay Kumar Srivastava', link: 'https://faculty5link.com' },
    ],
  },
 
  // Add more projects here...
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prevProject) =>
        prevProject === filteredProjects.length - 1 ? 0 : prevProject + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [filteredProjects]);

  useEffect(() => {
    filterProjects();
  }, [searchTerm]);

  const filterProjects = () => {
    setFilteredProjects(
      projectData.filter((project) => {
        const titleMatch = project.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const dateMatch = project.Startdate.includes(searchTerm);
        const facultyMatch = project.faculties.some(
          (faculty) =>
            faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faculty.link.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return titleMatch || dateMatch || facultyMatch;
      })
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title"> Ongoing Projects </h2>
        <input
          type="text"
          className="search-bar"
          placeholder="Search projects, dates, faculties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="project-container">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${
                index === currentProject ? 'active' : ''
              }`}
            >
              <div>
                <strong>Title:</strong> {project.title}
              </div>
              <div>
                <strong>Date Start:</strong> {project.Startdate}
              </div>
              <div>
                <strong>Faculties:</strong>{' '}
                {project.faculties.map((faculty, i) => (
                  <span key={i}>
                    <a href={faculty.link} target="_blank" rel="noopener noreferrer">
                      {faculty.name}
                    </a>
                    {i < project.faculties.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;

