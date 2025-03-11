import { createTheme } from "@mui/material/styles";
import Fuse from "fuse.js";

const projectsData = [
  {
    id: 1,
    title:
      "Adjunct Professor of Academy of Technology (AOT), Adisaptagram, Hooghly, W.B. ACADEMY OF TECHNOLOGY",
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
      "Design Verification of 10T Capacity Motorized Swivelling Type Vertical Coil Tong for Handling Eye Vertical (Eye to Sky) Coils TATA STEEL DOWNSTREAM PRODUCTS LIMITED",
    // Startdate: "28-Jun-2019",
    faculties: [
      {
        name: " Prof. Dilip Kumar Pratihar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-dkpra",
      },
    ],
  },
  
  {
    id: 100,
    title:
      "M N Faruqui innovation centre projects Arjun Malhotra endowment to IIT Kharagpur",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
      {
        name: " Prof. Poonam Sundriyal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psundriyal",
      },
    ],
  },
  {
    id: 100,
    title:
      "National Initiative for Design Innovation MHRD",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 100,
    title:
      "National Initiative for Design Innovation (9027_ZBSA) Ministry of Education",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 100,
    title:
      "Patachitra Initiative of ODOP INVEST INDIA",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  
  {
    id: 98,
    title: "CFD Optimization of Topology and Surface Texture for Wings of Butterfly-Mimetic Flyer Aeronautics R and D Board",
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
    title: "Workshops for NSM Nodal Centre Centre for Development of Advanced Computing",
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
    title: "Nodal Center in HPC and AI at IIT Kharagpur under National Supercomputing Mission (NSM) Centre for Development of Advanced Computing",
    // Startdate: "31-May-2019",
    faculties: [
      {
        name: " Prof. Somnath Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-somnath.roy",
      },
    ],
  },
  {
    id: 93,
    title: "Development of low GWP chemicals and their blends as alternatives to HCFCs and HFCs Project Management Unit Ozone Cell Ministry of Environment and Forest",
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
    title: "Review and Update of the Master Plan for the IIT Kharagpur campus IIT KHARAGPUR",
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
    title: "Service to 3D Print Jobs using Facilities at Mechanical Engineering Department Outside Agencies, Institute Students, Scholars, Faculty",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
      {
        name: "Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
    ],
  },
  {
    id: 93,
    title: "SwasthyaScan: AI-Driven Teleoperated Robot-based Microscopy for TB Detection in Remote Communities Indian Council of Medical Research (ICMR)",
    // Startdate: "14-May-2019",
    faculties: [
      {
        name: "Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 89,
    title:
      "Design vetting of air conditioning system for Igloo type DBs M P SITANI AND SONS,Mlitary Engineer Services",
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
      "Centre of Excellence on Energy Aware Urban Infrastructure Science and Engineering Research Board (SERB)",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Maddali Ramgopal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ramg",
      },
      {
        name: " Prof. Subhransu Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suroy",
      },
      {
        name: " Prof. Vikranth Racherla",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vikranth.racherla",
      },
    ],
  },
  {
    id: 89,
    title:
      "Experimental and Numerical Studies on Flameless Combustion with Hydrogen and Hydrocarbon Fuels Operates at High Pressure IITB Development and Relations Foundation",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Mahendra Reddy Vanteru",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-mahendra",
      },
    ],
  },
  {
    id: 88,
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
    id: 88,
    title: "Development of biocompatible glass fibre composite for healthcare applications Ministry of Textile, GoI",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 88,
    title: "3D printing of supercapacitors for flexible and wearable electronics SRIC, IIT KHARAGPUR",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Poonam Sundriyal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psundriyal",
      },
    ],
  },
  {
    id: 88,
    title: "Digital Manufacturing of Self-powered Flexible and Wearable Electronics/ Wearable Sensors by Hybridizing Nanogenerators, Solar cells and Supercapacitors. Science and Engineering Research Board (SERB)",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Poonam Sundriyal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psundriyal",
      },
    ],
  },
  {
    id: 88,
    title: "Fabrication and Analysis of Composite Specimens for External Users Various Government and Non-Government Organisations",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 88,
    title: "Fabrication and Analysis of Composite Specimens for IITKGP Users VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 88,
    title: "Fabrication and Modelling of a Composite Antenna Reflector ISRO, IIT KHARAGPUR CELL",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 88,
    title: "Fabrication and Modelling of a Composite Antenna Reflector ISRO, INDIA",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },
  {
    id: 88,
    title: "Fabrication of Impact-tolerant hybrid composite for naval applications Naval Research Board",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Nilanjan Das Chakladar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ndaschakladar",
      },
    ],
  },

  {
    id: 88,
    title: "Thermal Sprayed Heat Resistant Coatings for Thrust Chambers of Semi-Cryogenic Rocket Engines ISRO, IIT KHARAGPUR CELL",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
      },
    ],
  },
  {
    id: 88,
    title: "Plasma sprayed coatings to tune the thermo-optical properties of spacecraft components Indian Space Research Organisation",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
      },
    ],
  },
  {
    id: 88,
    title: "Thermally Sprayed CNT Reinforced WC-Co Coating for Aero Engine III Aeronautics R and D Board",
    // Startdate: "01-May-2019",
    faculties: [
      {
        name: " Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
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
      "A hand-held blood perfusion imager for the detection of oral pre-cancer and cancer SPATIAL KARMA RESOURCES PRIVATE LIMITED",
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
      "Affordable Point-of-Care MRI system for applications in India IITKGP Foundation (USA)",
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
      "Application For JC Bose Fellowship Renewal Science and Engineering Research Board (SERB)",
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
      "Application of Aptamer, Microfluidics and Protein Targeted Approaches for Sex Specific Spermatozoa Enrichment in Bovines and Technology Development Thereof DEPARTMENT OF BIOTECHNOLOGY",
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
      "Centre of excellence for training and research in Microfluidics IIT KHARAGPUR",
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
      "Common Research and Technology Development Hub (CRTDH) Department of Scientific and Industrial Research",
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
      "COVIRAP Technology Transfer to M/s Aspen Biomedical Private Limited, Rapid Diagnostic Group of Companies ASPEN BIOMEDICAL PRIVATE LIMITED",
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
      "Culture-independent rapid detection of Vibrio cholerae O1 in diarrheal stool premised on a smartphone-augmented device Indian Council of Medical Research - National Institute of Cholera and Enteric Diseases (NICED)",
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
      "Design and Analysis of 2D Materials as Seawater Desalination Membranes Using Molecular Dynamics Simulations Science and Engineering Research Board (SERB)",
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
      "Development and Field-Adaptation of a Platform-Technology Device for Infections Disease Detection at Extreme Point of Care Settings IITKGP Foundation (USA)",
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
      "Development and Validation of Covid-19 Testing Method and Device IITKGP FOUNDATION",
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
      "Development of a biofuel based liquid film microreactor for onboard hydrogen generation through non-catalytic reforming Science and Engineering Research Board (SERB)",
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
      "Development of a multiplex portable spinning disc for effective monitoring of womens health during different stages of pregnancy Department of Science and Technology (DST)",
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
      "Electrically Modulated Dynamics of Soft-Particle Laden Complex Fluids in Deformable Microfluidic Capillaries Indo-French Centre for the promotion of Avanced Research (CEFIPRA)",
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
      "Estimation of Blood Hemoglobin on Paper using Smartphone Huwel Lifesciences Private Limited",
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
      "Graphene decorated keratin-nanocellulose nanofiber-based highly sensitive electrochemical sensing of arsenic in clinical, environmental, and food samples- a one health approach INDIAN COUNCIL OF MEDICAL RESEARCH (ICMR)",
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
      "Industry-Academia Collaborative Projects in the UAE Educare International Foundation FZ-LLC",
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
      "Licensed Technology for A hand-held blood perfusion imager for the detection of oral pre-cancer and cancer Accuster Technologies Pvt Ltd.",
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
      "Machine Learning Guided 3D Printing of Self-Healing Sustainable Concrete from Waste Materials Ministry of Electronics and Information Technology",
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
      "Metastatic Breast Cancer Detection By Multimodal Magnetic Nanoparticle-Assisted Microfluidic Device Department of Biotechnology",
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
      "Microfluidics-based Vaginal pH Detection Technology SMARTQR TECHNOLOGIES PRIVATE LIMITED",
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
      "Multiplexed Diagnostics of Mosquito-borne Fever INDIAN COUNCIL OF MEDICAL RESEARCH (ICMR)",
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
      "Oroscreen Lab to Field Translation Towards Upscaled Commercial Adaptation Sun Pharmaceutical Industries Ltd.",
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
      "Paper-strip based Smartphone Interfaced Portable Device for Diagnostic Testing using a Drop of Body Fluid (Covered by the Patent Filing Identifiers 201931030435 and 201931030430) IMEDTECH LLP",
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
      "Point-of-care device for multiplexed detection of lung cancer biomarkers using an optical sensor and artificial intelligence IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
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
      "Quantitative Hematology and Biochemical Analysis from One Drop of Blood on a Portable Spinning Disc (covered by the filed patent id 202031011940) REVOLUT HEALTHTECH PRIVATE LIMITED",
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
      "Research and Development of Affordable MRI in the area of Point of Care Healthcare Devices for the rural downtrodden people in West Bengal and India as well VYOMLIFECARE PRIVATE LIMITED",
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
      "Research and Development of Leakproof Liquid Cooling Distribution Unit COOLER MASTER CO. LTD",
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
      "Setting up of Remote Continuum of Care with Affordable Diagnostic Technology IKURE TECHSOFT PRIVATE LIMITED",
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
      "Sustainability through revenue generation from CRTDH Facility Various Sponsors",
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
      "Teaching and development of course materials in Computational Fluid Dynamics (CFD) and its application in the healthcare industry Ansys, Inc.",
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
      "Technology Enhanced Determination of Specialized Educational and Research Contents on Engineering and Healthcare SolverBench Technologies Pvt. Ltd.",
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
      "Technology Transfer of (i) A point of Care (POC) Device for Facilitating Nucleic Acid Based Testing and Method Thereof (ii) System for estimation of plasma glucose by integrated paper-based device and method thereof (iii) Smartphone based blood hemoglobin estimation system HealthLedger Diagnostics Private Limited",
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
      "Technology Transfer/Licensing for COVIRAP Bramerton Holdings LLC",
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
      "Technology-Driven Empowerment of Sundargarh Oral Cavity Cancer -Governance Moonshot Program GLOQAL INFORMATION TECHNOLOGIES PRIVATE LIMITED",
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
      "Thermographic System for Monitoring Blood Perfusion, and Metabolic Heat Generation, Method and Thermographic Device Thereof and its Applications for the Screening of Oral Cancer (covered by the filed the patent id 201831032157) IMEDTECH LLP",
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
      "Use of CRTDH Lab Diagnostic Devices for testing purposes Foundation for Innovations in Health",
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
      "ViablE Residual Disease at Intracavitary brachytherapy after Chemo-radioTherapy in Carcinoma Cervix: Detection, Characterization and Prognostic Significance (VERDICT) DEPARTMENT OF BIOTECHNOLOGY",
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
      "Assam Skill University (ASU) Management and Operating System Development KPMG ADVISORY SERVICES PRIVATE LIMITED",
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
      "Establishing a State-of the-Art Hybrid BSLIII Facility at IIT Kharagpur to Facilitate Fundamental Research and Development of Diagnostics and Therapeutics Against Class III Pathogen Caused Viral and Bacterial Diseases Science and Engineering Research Board (SERB)",
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
      "Non-Enzymatic Microfluidic Electrochemical Multiplex Sensor for Cost-Effective Soil Testing Indo-German Science & Technology Centre",
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
      "Planar 2D heterojunctions between atomically thin dissimilar materials Department of Atomic Energy (DAE)",
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
      "Portable Intraoral Multispectral Imager for Cancer screening Indian Council of Medical Research (ICMR)",
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
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
    ],
  },
  {
    id: 81,
    title:
      "Thermal Modelling and Cell characterization of Batteries for Electric Vehicles MATHWORKS INDIA PRIVATE LIMITED,The MathWorks, Inc.",
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
      "Academy of Classical and Folk Arts (ACFA) Various Government and Non-Government Organisations",
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
      "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) Ministry of Heavy Industries and Public Enterprises, GoI,MHRD,TATA MOTORS LIMITED",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Anandaroop Bhattacharya",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anandaroop",
      },
      {
        name: "Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
      {
        name: "Prof. Prasanta Kumar Das",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-pkd",
      },
      {
        name: "Prof. Subhransu Roy",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-suroy",
      },
    ],
  },
  {
    id: 81,
    title:
      "Resource Recovery from organic waste with a circular economy approach Scheme for Promotion of Academic and Research Collaboration (SPARC), Apex Committee of SPARC",
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
      "Probing variant classes of nanofluid transformer oils for enhanced dielectric breakdown strengths and insulation caliber CENTRAL POWER RESEARCH INSTITUTE",
    // Startdate: "19-Mar-2019",
    faculties: [
      {
        name: "Prof. Purbarun Dhar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-purbarun",
      },
    ],
  },
  {
    id: 79,
    title: "Application of AI techniques to design and maintenance problems in railways IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Anirvan Dasgupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anir",
      },
    ],
  },
  {
    id: 79,
    title: "Towards Improved Design For Battery Electrode Particles Through Analogue Systems Mimicking Instability-induced Degradation of Solid-electrolyte Interphases Science and Engineering Research Board (SERB)",
    // Startdate: "15-Mar-2019",
    faculties: [
      {
        name: " Prof. Anirvan Dasgupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-anir",
      },
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
    id: 77,
    title:
      "Reliability based design optimization of helicopter rotor blades SRIC, IIT KHARAGPUR",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Korak Sarkar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-koraksarkar",
      },
    ],
  },
  {
    id: 77,
    title:
      "Exploring Solutions for Various Technological Challenges in Metal Additive Manufacturing Technology and Sharing the Relevant Know-how with Indian Heavy Engineering Industries Department of Heavy Industries (DHI) ,Bharat Heavy Electricals Limited (BHEL)",
    // Startdate: "13-Mar-2019",
    faculties: [
      
      {
        name: " Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
      },
      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 77,
    title:
      "Selection of Raw Materials for Additive Manufacturing Applications in Relation to the Design Requirements; and Life Cycle Analysis of Additive Manufacturing Process for Different Materials TATA SONS PRIVATE LIMITED,TATA SONS PRIVATE LIMITED,Department of Heavy Industries (DHI) ,Department of Heavy Industries (DHI)",
    // Startdate: "13-Mar-2019",
    faculties: [

      {
        name: " Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
      {
        name: " Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
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
    id: 76,
    title:
      "Development of high strength Ã?Â² Titanium alloys using DED-based additive manufacturing, aiming at aerospace, automobile, and biomedical applications Anusandhan National Research Foundation (ANRF)",
    // Startdate: "13-Mar-2019",
    faculties: [
      {
        name: " Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
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
    id: 74,
    title:
      "High fidelity structural theories and its finite element model for the large deformation and rupture analysis of soft biological shell and tubular structures for the applications in vascular solid mechanics. SRIC, IIT KHARAGPUR",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Archana Arbind",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archana.arbind",
      },
    ],
  },
  {
    id: 74,
    title:
      "High fidelity structural theories and its finite element model for the large deformation and rupture analysis of soft biological shell and tubular structures for the applications in vascular solid mechanics Science and Engineering Research Board (SERB)",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Archana Arbind",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archana.arbind",
      },
    ],
  },
  {
    id: 74,
    title:
      "Laser and EDM processing Various internal users of the Institute",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Asimava Roy Choudhury",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archie",
      },
    ],
  },
  {
    id: 74,
    title:
      "Laser Processing of Materials VARIOUS DEPARTMENTS/CENTRES OF IIT KHARAGPUR AND OUTSIDE INSTITUTIONS",
    // Startdate: "21-Feb-2019",
    faculties: [
      {
        name: " Prof. Asimava Roy Choudhury",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-archie",
      },
      {
        name: " Prof. Partha Saha",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-psaha",
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
    id: 72,
    title:
      "Training session on project deliverable software SigDATE Research Designs and Standards Organisation (RDSO), MINISTRY OF RAILWAYS",
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
    id: 70,
    title:
      "National Initiative for Design Innovation MHRD",
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
      {
        name: "Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 66,
    title:
      "NVH Study, Analysis and Improvement of Propeller Shafts RSB Transmissions (I) Ltd",
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
      "Design, fabrication and characterization of enhanced sound absorbing Meta-structures ISIRD, SRIC",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 66,
    title:
      "Development of meta structures for underwater noise control NAVAL RESEARCH BOARD, Ministry of Defence, DRDO",
    // Startdate: "26-Feb-2018",
    faculties: [
      {
        name: "Prof. Biswajit Bharat",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-biswajitb",
      },
    ],
  },
  {
    id: 66,
    title:
      "Structural Health Assessment of THD-1955 Radar ISC 7BRD IAF, Airforce Station",
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
      {
        name: "Prof. Partha Pratim Bandyopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-ppb",
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
    id: 63,
    title:
      "Virtual Labs (Phase III) Ministry of Human Resource Development",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
      {
        name: "Prof. Atul Jain",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-atuljain",
      },
    ],
  },
  {
    title:
      "VIRTUAL LABS PROJECT(PHASE-III EXTENDED) MHRD, Department of Higher Education, NMEICT, New Delhi",
    // Startdate: "03-Oct-2017",
    faculties: [
      {
        name: "Prof. Soumitra Paul",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-spaul",
      },
      {
        name: "Prof. Atul Jain",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-atuljain",
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
    id: 62,
    title:
      "Development of Porous Interbody Cage for Lumbar Spinal Fusion using Biomechanical Analysis and Digital Manufacturing Science and Engineering Research Board (SERB)",
    // Startdate: "07-Feb-2017",
    faculties: [
      {
        name: "Prof. Sanjay Gupta",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sangupta",
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
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
      {
        name: "Prof. Cheruvu Siva Kumar",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-kumar",
      },
    ],
  },
  {
    id: 60,
    title: "Development of meta structures for underwater noise control NAVAL RESEARCH BOARD, Ministry of Defence, DRDO",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Amiya Ranjan Mohanty",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-amohanty",
      },
    ],
  },
  {
    id: 60,
    title: "Digital Twins for Predictive Maintenance of Industrial Rotatory Equipment IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Shanka Deb",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sankha.deb",
      },
    ],
  },
  {
    id: 60,
    title: "Generation of Hydrogen Combustion Database and Ignition Characteristics of Hydrogen relevant to Severe Accident in Nuclear Reactors BARC,Mumbai",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Dhananjay Kumar Srivastava",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-srivastava",
      },
    ],
  },

  {
    id: 21,
    title: "Drudgery Reducing Machines for FPO in Purulia - Jhalda Agro Producer Company Ltd. Jhalda Agro Producer Company Ltd.,Centre for World Solidarity",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 21,
    title: "Long Endurance Mars Flying Exploration Vehicle (LEMFEV) Department of Science and Technology (International Cooperation Division)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 21,
    title: "Manufacturing of Bimetallic Ti - Al alloy structure by CMT-WAAM Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Siddharth Tamang",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-stamang",
      },
    ],
  },
  {
    id: 21,
    title: "Microwave brazing of super hard materials for cutting tool application SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Siddharth Tamang",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-stamang",
      },
    ],
  },
  {
    id: 21,
    title: "MOCVD growth and p-type doping of Ga2O3 for solar blind UV photodetector applications Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 21,
    title: "Organic vertical farming system for improved yield and quality of vegetables in subtropical climate IIT KHARAGPUR AI4ICPS I HUB FOUNDATION",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 21,
    title: "Research and Development of Leakproof Liquid Cooling Distribution Unit COOLER MASTER CO. LTD",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 21,
    title: "Tesla turbine for Organic Rankine Cycles (TORC) Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
      {
        name: "Prof. Sourav Mitra",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-sourav",
      },
    ],
  },
  {
    id: 21,
    title: "Unnat Bharat Abhiyian 2.0 as Regional Co-ordinating Institute Ministry of Human Resource Development",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Aditya Bandopadhyay",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-aditya",
      },
    ],
  },
  {
    id: 21,
    title: "DEVELOPMENT OF JOURNAL BEARING TEST RIG AND TRIBOLOGICAL STUDY OF WATER LUBRICATED JOURNAL BEARING OF PROPELLER SHAFT AND DEVELOPMENT OF A NUMERICAL MODEL FOR LIFE PREDICTION INDIAN MARITIME UNIVERSITY",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 21,
    title: "Multiphase self-lubricating composite coatings for high temperature tribological applications SRIC, IIT KHARAGPUR",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 21,
    title: "Thermal Sprayed Heat Resistant Coatings for Thrust Chambers of Semi-Cryogenic Rocket Engines ISRO, IIT KHARAGPUR CELL",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Venkata Naga Vamsi Munagala",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-vamsi",
      },
    ],
  },
  {
    id: 20,
    title: "AI based model for detection and analytics of needle cage bearing in main shaft TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Background studies for the implementation of FSW technology in water cooling tank BLUE STAR LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Cobot based vision analytics for quality inspection in automobile process line (DHI part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Cobot based vision analytics for quality inspection in automobile process line (Industry part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Department of Heavy Industries Miscellaneous Projects Department of Heavy Industries (DHI) ,All Consortium Industry Members - DHI (Ramkrishna Forgings; Heavy Engineering Corporation; Tata Steel Ltd.; Bharat Heavy Electrical Ltd.; Tata Motors Ltd.; Tata Sons Ltd.; Tata Consultancy Services Ltd.)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Innovation Lab Department of Heavy Industries (DHI) ,All Consortium Industry Members - DHI (Ramkrishna Forgings; Heavy Engineering Corporation; Tata Steel Ltd.; Bharat Heavy Electrical Ltd.; Tata Motors Ltd.; Tata Sons Ltd.; Tata Consultancy Services Ltd.)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Real-time weld defect monitoring and control in Body in White (BIW) structure of automotive vehicles (DHI Part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Real-time weld defect monitoring and control in Body in White (BIW) structure of automotive vehicles (Industry Part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Remote Monitoring and Real Time Control of Defects in Friction Stir Welding Process and Preventive Health Monitoring of Friction Stir Welding Machine Department of Heavy Industries (DHI) ,Tata Consultancy Services Limited (TCS Ltd)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Augmented and Virtual Reality (AR/VR) in Manufacturing applications (DHI Part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Augmented and Virtual Reality (AR/VR) in Manufacturing applications (Industry Part) Ministry of Heavy Industries and Public Enterprises, GoI,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Centre of Excellence on Energy Aware Urban Infrastructure Science and Engineering Research Board (SERB)",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  {
    id: 20,
    title: "Opened & Intelligent Plug-in Hybrid Electric Vehicle (PHEV) Technologies for Smart Indian Cities (UAY_I_IITKGP_019) Ministry of Heavy Industries and Public Enterprises, GoI,MHRD,TATA MOTORS LIMITED",
    // Startdate: "25-Jan-2017",
    faculties: [
      {
        name: "Prof. Surjya Kanta Pal",
        link: "https://www.iitkgp.ac.in/department/ME/faculty/me-skpal",
      },
    ],
  },
  
];

export default projectsData;
