import { useEffect } from 'react';
import React from 'react';
import './CourseMaterial.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const CourseMaterial = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
    });
  }, []);


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

  return (
    <section id="course-material" className="course-material-section">
      <div className="container" data-aos="fade-up">
        {semesters.map((semester, index) => (
          <div key={index} className="semester-accordion" data-aos="fade-up">
            <input type="checkbox" id={`accordion-${index}`} className="accordion-input" />
            <label htmlFor={`accordion-${index}`} className="accordion-label">{semester.semester}</label>
            <div className="accordion-content" data-aos="fade-up">
              {semester.subjects.map((subject, idx) => (
                <a
                  key={idx}
                  href={subject.link}
                  className="course-material-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-aos="fade-up"
                >
                  {subject.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CourseMaterial;
