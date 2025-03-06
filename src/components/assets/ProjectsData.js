import { createTheme } from "@mui/material/styles";
import Fuse from "fuse.js";

const projectsData = [
  {
    id: 1,
    title:
      "Design and development of adaptive robot controller using soft computing",
    // Startdate: "28-Jun-2019",
    faculties: [
      {
        name: " Prof. Dilip Kumar Pratihar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-dkpra",
      },
    ],
  },
  {
    id: 48,
    title:
      "Intelligent data mining for forward and reverse modelling of manufacturing processes",
    // Startdate: "28-Jun-2019",
    faculties: [
      {
        name: " Prof. Dilip Kumar Pratihar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-dkpra",
      },
    ],
  },
  {
    id: 2,
    title:
      "Development of a Hybrid Continuum to Atomistic Scale Solver for Multiscale Flow Problems National Supercomputing Mission (NSM)",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 100,
    title:
      "High-Performance GPU based Immersed Boundary Methods for Simulations of Biological Flows",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 99,
    title:
      "Numerical Investigation or Dynamics of Blood Clots in Diseased Carotid Artery",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 98,
    title: "CFD based Design of Mechanical Heart Valves",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 97,
    title:
      "Volumetric and Calorimetric Analysis of Adsorption Phenomenon for Chiller and Energy Storage Applications",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 96,
    title:
      "Hybrid Mechanical Vapor Compression with Coupled Pressure and Temperature Swing Adsorption for Smart Chiller",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 95,
    title:
      "National Centre for Clean Coal Research and Development Department of Science and Technology (DST)",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 94,
    title:
      "Desiccant Solar Still in Sustainable Habitat (Imprint-2 / SERB Part)",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 93,
    title: "VERIFICATION OF HVAC DESIGN FOR MES BASE HOSPITAL",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 92,
    title:
      "VERIFICATION OF HVAC DESIGN FOR MES BASE HOSPITAL EARTH ENVIRON SYSTEM",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 91,
    title:
      "Design and development of a demonstration unit of carbon dioxide based transcritical refrigeration system",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 90,
    title: "COOLING & HEATING SYSTEM FOR PLANT GROWTH CHAMBER",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 89,
    title:
      "COMPRESSION ABSORPTION SYSTEMS FOR COOLING AND HEATING APPLICATIONS",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 88,
    title: "FEASIBILITY STUDY OF CENTRAL AIR-CONDITIONING SYSTEM (IITG)",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 87,
    title: "Design vetting of air conditioning system for Igloo type DBs Mlitary Engineer Services,M P SITANI AND SONS",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 86,
    title: "Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
    ],
  },
  {
    id: 85,
    title:
      "A hand-held blood perfusion imager for the detection of oral pre-cancer and cancer - Licensed Technology MOUTHWISE DIAGNOSTICS PRIVATE LIMITED",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 84,
    title:
      "A Paper-And-Pencil - Based Diagnostic Kit for Simultaneous Detection of One or Multiple Analytes (covered by the filed patent identifier number 701/KOL/2015) REVOLUT HEALTHTECH PRIVATE LIMITED",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },
  {
    id: 83,
    title:
      "An Integrated micro-macro solidification algorithm for Direct numerical Simulation of Large Scale Solidification Structures",
    // Startdate: "01-Apr-2019",
    faculties: [
      {
        name: "Prof. Suman Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suman",
      },
    ],
  },

  {
    id: 82,
    title:
      "ML and RL based Predictive Modeling Tool for Spatio-Temporal Temperature map on a Multi-core CPU under Dynamic Workloads Google Asia Pacific Pte Ltd.",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 81,
    title:
      "Experimental and Numerical Investigations on Pore Scale Multiphase Flows using Reservoir on a Chip (RoC) for Improved Oil Recovery Anusandhan National Research Foundation (ANRF)",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
    ],
  },
  {
    id: 80,
    title:
      "Micro and nano-scale flows through deformable confinements (NTD_SKI)",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Jeevanjyoti Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-jeevan",
      },
    ],
  },
  {
    id: 79,
    title: "Multiscale Modelling of Flexible Supercapacitors",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Jeevanjyoti Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-jeevan",
      },
    ],
  },
  {
    id: 78,
    title:
      "Multiscale Modelling of Flexible and Stretchable Energy Storage Devices",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Jeevanjyoti Chakraborty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-jeevan",
      },
    ],
  },
  {
    id: 77,
    title:
      "Development of Bio-Mimetic Autonomous Underwater Vehicles (BAUV) for Maritime Surveillance (Phase I) Naval Research Board (NRB)",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 76,
    title:
      "SwasthyaScan- AI-Driven Teleoperated Robot-based Microscopy for TB Detection in Remote Communities Indian Council of Medical Research (ICMR)",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 75,
    title:
      "Generation of Hydrogen Combustion Database and Ignition Characteristics of Hydrogen relevant to Severe Accident in Nuclear Reactors BARC,Mumbai",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 74,
    title:
      "TRANSIENT BOILING AND COUNTER CURRENT FLOW PHENOMENA DIRECT IN BUNDLE EMERGENCY COOLANT INJECTION",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 73,
    title: "DEVELOPMENT OF MULTI PHASE FLOW METER",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 72,
    title:
      "Design and Analysis of a Modular Orthotropic Weighbridge TULSI WEIGH SOLUTIONS PVT. LTD.",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 71,
    title:
      "Design and Development of an Automated Machine for Repairing Railway Turnouts CEMFIS INDIA PRIVATE LIMITED",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 70,
    title:
      "Optimal Use of Friction Modifiers Through Machine Learning for Improved Safety and Reduced Running Costs in Metro Trains IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "15-Jul-2018",
    faculties: [
      {
        name: " Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 69,
    title: "Air cooled condenser leak detection system NTPC LIMITED",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 68,
    title:
      "Extension of Brahmaputra Riverfront Project ITD CEMENTATION INDIA LIMITED",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 67,
    title:
      "Extension of Engineering Vetting Services for Thal Sena Bhawan ITD CEMENTATION INDIA LIMITED",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 66,
    title:
      "FE analysis and experimental validation of CLD base frames for vibration damping DRDO, Naval Materials Research Laboratory",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 65,
    title:
      "Analysis of Sample Using SEM and XRD, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR AND OUTSIDE INSTITUTIONS",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 64,
    title:
      "Analysis of Samples Using SEM and XRD, optical microscopy, micro-machining, mechanical, tribological, metallurgical characterisation facility etc. Various Govt./Industrial/Private Organization",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 63,
    title:
      "Thermally Sprayed CNT Reinforced WC-Co Coating for Aero Engine III Aeronautics R and D Board",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
    ],
  },
  {
    id: 62,
    title:
      "CFD Optimization of Topology and Surface Texture for Wings of Butterfly-Mimetic Flyer Aeronautics R and D Board",
    // Startdate: "07-Feb-2017",
    faculties: [
      {
        name: "Prof. Rajaram Lakkaraju",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-rlakkaraju",
      },
    ],
  },
  {
    id: 61,
    title:
      "DESIGN, DEVELOPMENT AND FABRICATION OF AN AUTOMOBILE FOR PARTICIPATION IN SAE FORMULA 1 CONTEST FOR STUDENTS SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },
  {
    id: 60,
    title: "Development of Single Cylinder Gasoline Direct Injection Engine",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },
];

export default projectsData;
