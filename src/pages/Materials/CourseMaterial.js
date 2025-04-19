import { useEffect, useState } from 'react';
import React from 'react';
import './CourseMaterial.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GradualSpacing } from "../../components/magicui/GradualSpacing.tsx";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";
import { Upload } from 'lucide-react';
import ContributeModal from './ContributeModal';


const CourseMaterial = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(-1);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);
  const openContributeModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeContributeModal = () => {
    setIsModalOpen(false);
  };

  const handleAccordionToggle = (index, isChecked) => {
    setOpenAccordionIndex(isChecked ? index : -1);
  };

  const semesters = [
    {
      semester: 'Semester 1',
      subjects: [
        { title: 'BASIC ENGINEERING AND MECHANICS', link: 'https://drive.google.com/drive/folders/1fGxjBbch3R_V8hccd93kakm9R-mKochC' },
        { title: 'PHYSICS OF WAVES', link: 'https://drive.google.com/drive/folders/1is_NDdJ97w9JM9JskNOyx8FYmxdQ930Q' },
        { title: 'ELECTRICAL TECHNOLOGY', link: 'https://drive.google.com/drive/folders/1jMKFXZAzLJl0UkAxZU1JEhCTiLGmb9Cx' },
        { title: 'ADVANCED CALCULUS', link: 'https://drive.google.com/drive/folders/1Hzy8BKBLxqL1_phTKOGTMu0qG79BrZ-P' },
        { title: 'BASIC ELECTRONICS LAB', link: 'https://drive.google.com/drive/folders/17ZnhntrXdZNxXq2EKKPW2V5Qrv_Pwes5' },
        { title: 'PHYSICS LAB', link: 'https://drive.google.com/drive/folders/1RcCqB-WvW_7I4AlV_fCjIMJb6H2JGZHL' },
        { title: 'ENGINEERING LAB', link: 'https://drive.google.com/drive/folders/1AWpUkQGJxQYgk87SCkUSl-2Dgl44zS__' },
      ]
    },
    {
      semester: 'Semester 2',
      subjects: [
        { title: 'PROGRAMMING AND DATA STRUCTURES', link: 'https://drive.google.com/drive/folders/1lm8VxzqJmUygHrM0moFesem8iww0qkLD' },
        { title: 'CHEMISTRY', link: 'https://drive.google.com/drive/folders/1p_TbZQfjPisU2rg0MPSydnT13Wmq35Hf' },
        { title: 'LINEAR ALGEBRA', link: 'https://drive.google.com/drive/folders/1dx4B3xLnsZHfw8KRikcaA2O0eID_M8jk' },
        { title: 'BIOLOGY', link: 'https://drive.google.com/drive/folders/1HXuQDli4O5G5DeI_DElmJQJmFYZw7fFM' },
        { title: 'ENGINEERING DRAWING', link: 'https://drive.google.com/drive/folders/149750Mym0NXuAju383GVGzF6G6LlM6rc' },
      ]
    },
    {
      semester: 'Semester 3',
      subjects: [
        { title: 'MECHANICS OF SOLIDS', link: 'https://drive.google.com/drive/folders/1rRzPUssDnr66NYnjvZege_AA81Tul4Un' },
        { title: 'MECHANICS OF SOLIDS NEW', link: 'http://www.facweb.iitkgp.ac.in/~jeevanjyoti/teaching/mechsolids/2024/' },
        { title: 'DYNAMICS', link: 'https://drive.google.com/drive/folders/15MICqelye6gMj_IfWzKPJtX6EJuKoKbp' },
        { title: 'PARTIAL DIFFERENTIAL EQUATION', link: 'https://drive.google.com/drive/folders/1gzgHO038iGxrjnxBNWuYqzikXxrZAJqo' },
        { title: 'PROBABILITY AND STATASTICS', link: 'https://drive.google.com/drive/folders/1eHtZK9RNleVflS3sumdr6iK-1Tyq3kEu' },
        { title: 'THERMO FLUIDS', link: 'https://drive.google.com/drive/folders/1hptFewpr8KX18lHhg0NtODIQaHIy-IzY' },
        { title: 'MANUFACTURING LAB', link: 'https://drive.google.com/drive/folders/16OwcAqPs9ls1Lto_EpFbqFETqkbNhMNw' },
        { title: 'MECHANICS OF SOLIDS LAB', link: 'https://drive.google.com/drive/folders/1mxYbFX9r_H5fYCFvhkLM0NgF-osz4edZ' },
      ]
    },
    {
      semester: 'Semester 4',
      subjects: [
        { title: 'OPERATIONS RESEARCH', link: 'https://drive.google.com/drive/folders/1qmik-ilxZhuYhJBJJp30wOtS3eJzN3vk' },
        { title: 'BASIC ELECTRONICS', link: 'https://drive.google.com/drive/folders/1T9mVN8mfdP9TzSHhra6T_ggh8tnXAwlI' },
        { title: 'BASIC THERMODYNAMICS', link: 'https://drive.google.com/drive/folders/1rZs-85kvLoBqWSbjTWjqbWBIMNjrIGn7' },
        { title: 'BASIC THERMO - Prof Sourav mitra', link: 'https://drive.google.com/drive/folders/1yzJjXMX8MSfxeW4haHaIKCQ6VBukyYnS' },
        { title: 'TRANSFORM CALCULUS', link: 'https://drive.google.com/drive/folders/1eESVkKG0_zIdWH_Pdz0N82aqjH6R6JIT' },
        { title: 'BASIC ELECTRONICS LAB', link: 'https://drive.google.com/drive/folders/17ZnhntrXdZNxXq2EKKPW2V5Qrv_Pwes5' },
        { title: 'WORKSHOP PRACTICE', link: 'https://drive.google.com/drive/folders/1VvFP9cfORFOQ8x58veoZoXnDZHBWG7dm' },
      ]
    },
    {
      semester: 'Semester 5',
      subjects: [
        { title: 'HEAT TRANSFER', link: 'https://drive.google.com/drive/folders/1Cqx2k5aXDB5k3-HL3F6yW4yNu4nPe2L-' },
        { title: 'MATERIALS ENGINEERING', link: 'https://drive.google.com/drive/folders/1MOXcuWZMRyBrO2jP65RQDCRac2X0E4B1' },
        { title: 'CASTING, FORMING AND WELDING', link: 'https://drive.google.com/drive/folders/1DXCOh16eTGxZQdW1GSs3k034Rj3wQ70r' },
        { title: 'CASTING, FORMING AND WELDING LAB', link: 'https://drive.google.com/drive/folders/1-D_kkNBa7e05TDUZyLS2NNUyXhUyXvEy' },
        { title: 'DESIGN OF MACHINE ELEMENTS', link: 'https://drive.google.com/drive/folders/1DAcUeZ_8vS-mXvTF4C4_NcZ-GFz05iK7' },
        { title: 'KINETICS AND KINEMATICS OF MOTION', link: 'https://drive.google.com/drive/folders/1w--YLE6lmBUVKxW7gAbXLqK2FHs6ubqB' },
        { title: 'MATERIALS ENGINEERING', link: 'https://drive.google.com/drive/folders/1ARhuAKuaQf9saFP6i2unsz8N_qxl-yR9' },
        { title: 'MECHANISM SESSIONAL', link: 'https://drive.google.com/drive/folders/1XNanfXZqSbI2iZg5JWhEl0-KboVi7hkv' },
      ]
    },
    {
      semester: 'Semester 6',
      subjects: [
        { title: 'MACHINE DRAWING', link: 'https://drive.google.com/drive/folders/1m15AWa6duugQYfUnYOfdiISI9RNzdGSF' },
        { title: 'MACHINE TOOLS AND MACHINING', link: 'https://drive.google.com/drive/folders/1RqzkzLsDF-RSIKfAxcCiQeOcTctiwH4e' },
        { title: 'MACHINE TOOLS AND MACHINING LAB', link: 'https://drive.google.com/drive/folders/1HN0N-r6988YZ9BZF7Dye7PKU7HSU0VjU' },
        { title: 'NON-TRADITIONAL MANUFACTURING', link: 'https://drive.google.com/drive/folders/1MP5Pi4VAdcSuRQ1dnZH1V_EJ6mxzQYlB' },
        { title: 'COMPUTER CONTROLLED MANUF MACHINES', link: 'https://drive.google.com/drive/folders/1D0L_0tAM4m635VxtgSLnWvYepUNWr_DL' },
        { title: 'COMPUTER INTEGRATED MANUFACTURING', link: 'https://drive.google.com/drive/folders/1T4Ugjs7p2amsJrLH5Ild9Ydsk5_GIOnM' },
        { title: 'APPLIED THERMO FLUIDS', link: 'https://drive.google.com/drive/folders/1XEQNSvW79qjI5sN3eE1oZKzwE9mqEnIA' },
        { title: 'THERMO FLUIDS LAB', link: 'https://drive.google.com/drive/folders/1cmbNUNmp6hiBA-Sd7LO3A47nn49wDxoU' },
      ]
    },
    {
      semester: 'Semester 7 & 8',
      subjects: [
        { title: 'ADVANCED WELDING TECHNOLOGY', link: 'https://drive.google.com/drive/folders/1ou14L1kWMSKSFt_754MxPC8tMxQkKpyM' },
        { title: 'FUNDAMENTALS OF ELECTRONIC PACKAGING', link: 'https://drive.google.com/drive/folders/1cwrPknGZh6hmVYi0ltZMJabZ_yyRdfiz' },
        { title: 'INDUSTRIAL AUTOMATION AND CONTROL', link: 'https://drive.google.com/drive/folders/11_06zAiSx-lmp0W3F1xoKtE5PogtdTXf' },
        { title: 'INTELLIGENT MACHINES AND SYSTEMS', link: 'https://drive.google.com/drive/folders/1aDwt60K4maZkSCaVMjAHYN37api7LLiG' },
        { title: 'LOGISTICS AND SUPPLY CHAIN MANAGEMENT', link: 'https://drive.google.com/drive/folders/1ubicOru1UfLlGzb9YxOiMsE55SG_cNn4' },
        { title: 'METAL FORMING PROCESSES', link: 'https://drive.google.com/drive/folders/1xQnFEgtJAIoF2d7I2kPpynBDGhNWJoXl' },
        { title: 'MF LAB', link: 'https://drive.google.com/drive/folders/1n98c9_-zBaUQ6Ijk2zAT2gSo7fK3DlkR' },
        { title: 'PRECISION AND MICRO MANUFACTURING', link: 'https://drive.google.com/drive/folders/1IyH8IKSGqiqn-lDTxNIYiQ_SR3beB77-' },
        { title: 'PRODUCTION PLANNING AND INVENTORY CONTROL', link: 'https://drive.google.com/drive/folders/1gVTzfq4D8_L9-r572TCINemtENA8u2-M' },
      ]
    },
    {
      semester: 'Breadth ELECTIVES',
      subjects: [
        { title: 'BREADTH ELECTIVES', link: 'https://drive.google.com/drive/folders/1brgxGtFvelrcleHB2VeHt99TbUmi_ZTg' },
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
  ];

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
      {openAccordionIndex === -1 && (
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
              checked={openAccordionIndex === index}
              onChange={(e) => handleAccordionToggle(index, e.target.checked)}
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
      <div>
      <button 
  onClick={openContributeModal}
  className="fixed bottom-8 right-8 z-30 bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold rounded-full p-4 shadow-lg hover:shadow-xl transition-all flex items-center group" style={{overflowX: 'hidden'}}
  aria-label="Contribute Material"
>
  <Upload size={20} className="mr-2" />
  <span className="opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
    Contribute Material
  </span>
</button>
</div>
{/* Contribute Modal */}
<ContributeModal 
  isOpen={isModalOpen} 
  onClose={closeContributeModal} 
/>
    </section>
  );
};

export default CourseMaterial;