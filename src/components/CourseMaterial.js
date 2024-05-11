import React from 'react';
import './CourseMaterial.css';

const CourseMaterial = () => {
  const semesters = [
    {
      semester: 'Semester 1',
      subjects: [
        { title: 'Basic Engineering Mechanics', link: 'https://drive.google.com/drive/folders/1fGxjBbch3R_V8hccd93kakm9R-mKochC' },
        { title: 'Physics of Waves', link: 'https://drive.google.com/drive/folders/1is_NDdJ97w9JM9JskNOyx8FYmxdQ930Q' },
        { title: 'Electrical Technology', link: 'https://drive.google.com/drive/folders/1jMKFXZAzLJl0UkAxZU1JEhCTiLGmb9Cx' },
        { title: 'Advanced Calculus', link: 'https://drive.google.com/drive/folders/1Hzy8BKBLxqL1_phTKOGTMu0qG79BrZ-P' },
      ]
    },
    {
      semester: 'Semester 2',
      subjects: [
        { title: 'Programming and Data Structures', link: 'https://drive.google.com/drive/folders/1lm8VxzqJmUygHrM0moFesem8iww0qkLD' },
        { title: 'Chemistry', link: 'https://drive.google.com/drive/folders/1p_TbZQfjPisU2rg0MPSydnT13Wmq35Hf' },
        { title: 'Linear Algebra', link: 'https://drive.google.com/drive/folders/1dx4B3xLnsZHfw8KRikcaA2O0eID_M8jk' },
        { title: 'Biology', link: 'https://drive.google.com/drive/folders/1HXuQDli4O5G5DeI_DElmJQJmFYZw7fFM' },
      ]
    },
    {
      semester: 'Semester 3',
      subjects: [
        { title: 'Mechanics of Solids', link: 'https://drive.google.com/drive/folders/1rRzPUssDnr66NYnjvZege_AA81Tul4Un' },
        { title: 'Dynamics', link: 'https://drive.google.com/drive/folders/15MICqelye6gMj_IfWzKPJtX6EJuKoKbp' },
        { title: 'Partial Differential Equation', link: 'https://drive.google.com/drive/folders/1gzgHO038iGxrjnxBNWuYqzikXxrZAJqo' },
        { title: 'Probability and Statastics', link: 'https://drive.google.com/drive/folders/1eHtZK9RNleVflS3sumdr6iK-1Tyq3kEu' },
        { title: 'Thermo Fluids', link: 'https://drive.google.com/drive/folders/1hptFewpr8KX18lHhg0NtODIQaHIy-IzY' },
      ]
    },
    {
      semester: 'Semester 4',
      subjects: [
        { title: 'Operations Research', link: 'https://drive.google.com/drive/folders/1qmik-ilxZhuYhJBJJp30wOtS3eJzN3vk' },
        { title: 'Basic Electronics', link: 'https://drive.google.com/drive/folders/1T9mVN8mfdP9TzSHhra6T_ggh8tnXAwlI' },
        { title: 'Basic Thermodynamics', link: 'https://drive.google.com/drive/folders/1rZs-85kvLoBqWSbjTWjqbWBIMNjrIGn7' },
        { title: 'Transform Calculus', link: 'https://drive.google.com/drive/folders/1eESVkKG0_zIdWH_Pdz0N82aqjH6R6JIT' },
      ]
    },
    {
      semester: 'Semester 5',
      subjects: [
        { title: 'Heat Transfer', link: 'https://drive.google.com/drive/folders/1Cqx2k5aXDB5k3-HL3F6yW4yNu4nPe2L-' },
        { title: 'Materials Engineering', link: 'https://drive.google.com/drive/folders/1MOXcuWZMRyBrO2jP65RQDCRac2X0E4B1' },
        { title: 'Casting ,Forming and Welding', link: 'https://drive.google.com/drive/folders/1DXCOh16eTGxZQdW1GSs3k034Rj3wQ70r' },
        { title: 'Design of Machine Elements', link: 'https://drive.google.com/drive/folders/1DAcUeZ_8vS-mXvTF4C4_NcZ-GFz05iK7' },
        { title: 'Kinematics of machines', link: 'https://drive.google.com/drive/folders/1w--YLE6lmBUVKxW7gAbXLqK2FHs6ubqB' },
      ]
    },
    {
      semester: 'Semester 6',
      subjects: [
        { title: 'Machine Design Practice', link: 'https://drive.google.com/drive/folders/1hM2LCu7X5AtFxC7UgsL_3FqJXQXOtW-x' },
        { title: 'Machine Tools and Machining', link: 'https://drive.google.com/drive/folders/1rTK65GRcnjMU1qsbhO_93hAMacZ5NFhS' },
        { title: 'Non-Traditional Manufacturing', link: 'https://drive.google.com/drive/folders/17VeUfXxRDWKaFVkFwzI4RwrupoA-xyz_' },
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
      <div className="container">
        {semesters.map((semester, index) => (
          <div key={index} className="semester-accordion">
            <input type="checkbox" id={`accordion-${index}`} className="accordion-input" />
            <label htmlFor={`accordion-${index}`} className="accordion-label">{semester.semester}</label>
            <div className="accordion-content">
              {semester.subjects.map((subject, idx) => (
                <a
                  key={idx}
                  href={subject.link}
                  className="course-material-card"
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
    </section>
  );
}

export default CourseMaterial;
