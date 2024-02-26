import React from 'react';
import './CourseMaterial.css';

const CourseMaterial = () => {
  const courseMaterials = [
    { title: 'Introduction to Thermodynamics', link: 'https://drive.google.com/file/d/1iSRaPGwI7HBUSjeOyOehyPz1zK9_0qLb/view?usp=drive_link' },
    { title: 'Dynamics', link: 'https://drive.google.com/file/d/1-NWDiKMw6d5fdfnTSoWi2If0GQTP2oW3/view?usp=drive_link' },
    { title: 'Vector Mechanics', link: 'https://drive.google.com/file/d/1-OAzI3fGMjBq1kGoP8ov43fyLGz4J6nQ/view?usp=drive_link' },
    { title: 'Fluid Mechanics', link: 'https://drive.google.com/file/d/1-PZqJ8NLhdf8hMgeV_a8zq3-tHQomGhF/view?usp=drive_link' },
    { title: 'Solid Mechanics', link: 'https://drive.google.com/file/d/1-ObW6c0erj0Qf1N9_RWl6S2rHx1tmy5O/view?usp=drive_link' },
  ];

  return (
    <section id="course-material" className="course-material-section">
      <div className="container">
        <h2 className="section-title">Course Materials</h2>
        <div className="course-materials">
          {courseMaterials.map((material, index) => (
            <a
              key={index}
              href={material.link}
              className="course-material-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              {material.title}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseMaterial;
