import { useEffect, useState } from 'react';
import React from 'react';
import './CourseMaterial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GradualSpacing } from "../../components/magicui/GradualSpacing.tsx";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

const CourseMaterial = () => {
  const [openAccordions, setOpenAccordions] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const handleAccordionToggle = (isOpen) => {
    setOpenAccordions((prev) => (isOpen ? prev + 1 : prev - 1));
  };
  const semesters = [
    {
      semester: 'Semester 1',
      subjects: [
        { title: 'BASIC ENGINEERING AND MECHANICS', link: 'https://drive.google.com/drive/folders/1fGxjBbch3R_V8hccd93kakm9R-mKochC' },
        { title: 'PHYSICS OF WAVES', link: 'https://drive.google.com/drive/folders/1is_NDdJ97w9JM9JskNOyx8FYmxdQ930Q' },
        { title: 'ELECTRICAL TECHNOLOGY', link: 'https://drive.google.com/drive/folders/1jMKFXZAzLJl0UkAxZU1JEhCTiLGmb9Cx' },
        { title: 'ADVANCED CALCULUS', link: 'https://drive.google.com/drive/folders/1Hzy8BKBLxqL1_phTKOGTMu0qG79BrZ-P' },
      ]
    },
    {
      semester: 'Semester 2',
      subjects: [
        { title: 'PROGRAMMING AND DATA STRUCTURES', link: 'https://drive.google.com/drive/folders/1lm8VxzqJmUygHrM0moFesem8iww0qkLD' },
        { title: 'CHEMISTRY', link: 'https://drive.google.com/drive/folders/1p_TbZQfjPisU2rg0MPSydnT13Wmq35Hf' },
        { title: 'LINEAR ALGEBRA', link: 'https://drive.google.com/drive/folders/1dx4B3xLnsZHfw8KRikcaA2O0eID_M8jk' },
        { title: 'BIOLOGY', link: 'https://drive.google.com/drive/folders/1HXuQDli4O5G5DeI_DElmJQJmFYZw7fFM' },
      ]
    },
    {
      semester: 'Semester 3',
      subjects: [
        { title: 'MECHANICS OF SOLIDS', link: 'https://drive.google.com/drive/folders/1rRzPUssDnr66NYnjvZege_AA81Tul4Un' },
        { title: 'DYNAMICS', link: 'https://drive.google.com/drive/folders/15MICqelye6gMj_IfWzKPJtX6EJuKoKbp' },
        { title: 'PARTIAL DIFFERENTIAL EQUATION', link: 'https://drive.google.com/drive/folders/1gzgHO038iGxrjnxBNWuYqzikXxrZAJqo' },
        { title: 'PROBABILITY AND STATASTICS', link: 'https://drive.google.com/drive/folders/1eHtZK9RNleVflS3sumdr6iK-1Tyq3kEu' },
        { title: 'THERMO FLUIDS', link: 'https://drive.google.com/drive/folders/1hptFewpr8KX18lHhg0NtODIQaHIy-IzY' },
      ]
    },
    {
      semester: 'Semester 4',
      subjects: [
        { title: 'OPERATIONS RESEARCH', link: 'https://drive.google.com/drive/folders/1qmik-ilxZhuYhJBJJp30wOtS3eJzN3vk' },
        { title: 'BASIC ELECTRONICS', link: 'https://drive.google.com/drive/folders/1T9mVN8mfdP9TzSHhra6T_ggh8tnXAwlI' },
        { title: 'BASIC THERMODYNAMICS', link: 'https://drive.google.com/drive/folders/1rZs-85kvLoBqWSbjTWjqbWBIMNjrIGn7' },
        { title: 'TRANSFORM CALCULUS', link: 'https://drive.google.com/drive/folders/1eESVkKG0_zIdWH_Pdz0N82aqjH6R6JIT' },
      ]
    },
    {
      semester: 'Semester 5',
      subjects: [
        { title: 'HEAT TRANSFER', link: 'https://drive.google.com/drive/folders/1Cqx2k5aXDB5k3-HL3F6yW4yNu4nPe2L-' },
        { title: 'MATERIALS ENGINEERING', link: 'https://drive.google.com/drive/folders/1MOXcuWZMRyBrO2jP65RQDCRac2X0E4B1' },
        { title: 'CASTING, FORMING AND WELDING', link: 'https://drive.google.com/drive/folders/1DXCOh16eTGxZQdW1GSs3k034Rj3wQ70r' },
        { title: 'DESIGN OF MACHINE ELEMENTS', link: 'https://drive.google.com/drive/folders/1DAcUeZ_8vS-mXvTF4C4_NcZ-GFz05iK7' },
        { title: 'KINETICS AND KINEMATICS OF MOTION', link: 'https://drive.google.com/drive/folders/1w--YLE6lmBUVKxW7gAbXLqK2FHs6ubqB' },
      ]
    },
    {
      semester: 'Semester 6',
      subjects: [
        { title: 'MACHINE DESIGN AND PRACTICE', link: 'https://drive.google.com/drive/folders/1hM2LCu7X5AtFxC7UgsL_3FqJXQXOtW-x' },
        { title: 'MACHINE TOOLS AND MACHINING', link: 'https://drive.google.com/drive/folders/1rTK65GRcnjMU1qsbhO_93hAMacZ5NFhS' },
        { title: 'NON-TRADITIONAL MANUFACTURING', link: 'https://drive.google.com/drive/folders/17VeUfXxRDWKaFVkFwzI4RwrupoA-xyz_' },
        { title: 'CCMM', link: 'https://drive.google.com/drive/folders/1VLr3cNbiqJBvZURfhBiLvYUDoQMjdkFI' },
      ]
    },
    {
      semester: 'Semester 7',
      subjects: [
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
      ]
    },
    {
      semester: 'Semester 8',
      subjects: [
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
        { title: '', link: '#' },
      ]
    },

  ];
  const newResources = [
    {
      link: "https://justjus.notion.site/Notes-IIT-Kharagpur-33ecf32bf7f44f7b9f47d049baa94220",
    },
    {
      link: "https://iitkgpacin-my.sharepoint.com/personal/jus_jaisinghani_iitkgp_ac_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fjus%5Fjaisinghani%5Fiitkgp%5Fac%5Fin%2FDocuments%2FSemesters&ga=1"
    }
  ]


  return (
    <section id="course-material" className="course-material-section bg-zinc-950">
      <div className="absolute inset-0 pointer-events-none z-10 overflow-x-hidden">
         <Spotlight />
       </div>
      {/* "Course Materials" text for small screens */}
      <div className="block lg:hidden text-center pt-24">
        <p className="text-yellow-400 text-xl sm:text-2xl font-bold">
          <GradualSpacing
            text="Course Materials"
            className="text-2xl sm:text-2xl font-extrabold transition-opacity duration-500 opacity-100"
          />
        </p>
      </div>

      {/* "Course Materials" text for large screens */}
      {openAccordions === 0 && (
        <div className="absolute hidden lg:flex items-center justify-center top-0 left-40 w-full h-full">
          <p className="text-yellow-400 text-4xl font-bold">
            <GradualSpacing
              text="Course Materials"
              className="text-4xl sm:text-2xl md:text-3xl font-extrabold transition-opacity duration-500 opacity-100"
            />
          </p>
        </div>
      )}

      <div className="container">
        {semesters.map((semester, index) => (
          <div key={index} className="semester-accordion">
            <input
              type="checkbox"
              id={`accordion-${index}`}
              className="accordion-input"
              onChange={(e) => handleAccordionToggle(e.target.checked)}
            />
            <label
              htmlFor={`accordion-${index}`}
              className="accordion-label bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 hover:bg-gradient-to-b hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 shadow-sm shadow-yellow-400"
            >
              {semester.semester}
            </label>
            <div className="accordion-content">
              {semester.subjects.map((subject, idx) => (
                <a
                  key={idx}
                  href={subject.link}
                  className="course-material-card bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 hover:bg-gradient-to-b hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 shadow-sm shadow-yellow-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {subject.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-gray-400 display-4 text-center p-8">
        These resources were extracted from KGPellence
      </div>
      <div className="text-gray-400 display-4 text-center p-8">
        <div>
          <a
            href={newResources[0].link}
            className="course-material-card bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 hover:bg-gradient-to-b hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 shadow-sm shadow-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion notes
          </a>
          <a
            href={newResources[1].link}
            className="course-material-card bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950 hover:bg-gradient-to-b hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-300 shadow-sm shadow-yellow-400"
            target="_blank"
            rel="noopener noreferrer"
          >
           These Resources with Recorded Online Classes
          </a>
        </div>
        <p className='pt-2'>These Online Classes Resources by Jus Jaisinghani</p>
      </div>
    </section>
  );
};

export default CourseMaterial;