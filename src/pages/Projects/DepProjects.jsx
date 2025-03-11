import React, { useState, useEffect, useRef } from "react";
import { HoverEffect } from "../../components/ui/hoverEffect.jsx";
import projectsData from "../../components/assets/ProjectsData.js";
import { FaFilter } from "react-icons/fa";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

export function DepProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedProjects, setSortedProjects] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showProfessorFilter, setShowProfessorFilter] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [professorsList, setProfessorsList] = useState([]);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    // Create a deep copy with unique identifiers for each project
    const processedProjects = projectsData.map((project, index) => ({
      ...project,
      uniqueId: `project-${index}-${project.title.substring(0, 10).replace(/\s+/g, '-')}` 
    }));
    
    const alphabeticallySorted = [...processedProjects].sort((a, b) => 
      a.title.localeCompare(b.title)
    );
    setSortedProjects(alphabeticallySorted);
  }, []);

  useEffect(() => {
    const uniqueProfessors = new Set();
    projectsData.forEach((project) => {
      if (project.faculties && Array.isArray(project.faculties)) {
        project.faculties.forEach((faculty) => {
          if (faculty && faculty.name) {
            uniqueProfessors.add(faculty.name);
          }
        });
      }
    });
    const professorsArray = Array.from(uniqueProfessors);
    const sortedProfessors = professorsArray.sort((a, b) => {
      const aName = a.startsWith("Prof.") ? a.substring(5) : a;
      const bName = b.startsWith("Prof.") ? b.substring(5) : b;
      
      return aName.localeCompare(bName);
    });
    
    setProfessorsList(sortedProfessors);
  }, []);

  

  // Handle clicks outside of filter dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        filterDropdownRef.current &&
        !filterDropdownRef.current.contains(event.target)
      ) {
        setShowProfessorFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileScreen(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = sortedProjects.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        (project.faculties && 
          project.faculties.some((faculty) =>
            faculty.name.toLowerCase().includes(query)
          ))
    );

    setSuggestions(matches.slice(0, 5));
  };

  const toggleProfessorFilter = () => {
    setShowProfessorFilter(!showProfessorFilter);
  };

  const selectProfessor = (professorName) => {
    if (selectedProfessor === professorName) {
      // Deselect if the same professor is clicked
      setSelectedProfessor(null);
    } else {
      setSelectedProfessor(professorName);
    }
    setShowProfessorFilter(false);
  };

  const clearFilter = () => {
    setSelectedProfessor(null);
  };

  const selectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.title);
    setSuggestions([]);
    setSelectedProjectId(suggestion.uniqueId);
    
    // Scroll to the selected project
    setTimeout(() => {
      const element = document.getElementById(`project-${suggestion.uniqueId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  // Filter projects based on search query and selected professor
  const filteredProjects = sortedProjects.filter((project) => {
    // Check if the project matches the search query
    const matchesSearch = !searchQuery || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.faculties && project.faculties.some(faculty => 
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));

    // Check if the project matches the selected professor
    const matchesProfessor = !selectedProfessor || 
      (project.faculties && project.faculties.some(faculty => 
        faculty.name === selectedProfessor
      ));

    return matchesSearch && matchesProfessor;
  });

  return (
    <div className="relative max-w-full mx-auto bg-gray-950 text-white min-h-screen py-24">
      {!isMobileScreen && (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
          <Spotlight />
        </div>
      )}
 <div className="relative w-full overflow-hidden mb-6">
      <div className="flex">
        <div 
          className="text-neutral-400 text-sm whitespace-nowrap"
          style={{
            animation: 'scroll-left 15s linear infinite',
            paddingLeft: '100%', 
          }}
        >
          last updated in March 2025
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>

        
        <h1 className="text-2xl md:text-3xl font-bold text-center mt-8 mb-12 text-yellow-400">
          Ongoing Projects in Department
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 px-4">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Search by Project Title or Professor"
              value={searchQuery}
              onChange={handleSearch}
              className="w-full p-3 border border-gray-600 rounded-lg bg-gradient-to-b from-neutral-900 to-neutral-950 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            {suggestions.length > 0 && (
              <ul className="absolute top-14 left-0 w-full bg-gray-950 border border-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto z-40">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.uniqueId}
                    className="p-3 hover:bg-yellow-400 cursor-pointer text-sm hover:text-gray-950"
                    onClick={() => selectSuggestion(suggestion)}
                  >
                    {suggestion.title} 
                    {suggestion.faculties && suggestion.faculties.length > 0 && (
                      <span> (by {suggestion.faculties.map(f => f.name).join(", ")})</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full md:w-auto">
            <div
              className="relative flex-1 md:flex-initial"
              ref={filterDropdownRef}
            >
              <button
                onClick={toggleProfessorFilter}
                className={`flex items-center justify-center gap-2 ${
                  selectedProfessor
                    ? "bg-yellow-400 text-gray-950"
                    : "bg-gray-800 text-white"
                } px-4 py-2 rounded-lg hover:bg-yellow-300 hover:text-gray-950 w-full h-11 whitespace-nowrap`}
              >
                <FaFilter />
                {selectedProfessor ? (
                  <span className="truncate max-w-32"> {selectedProfessor}</span>
                ) : (
                  <>
                    <span className="hidden md:inline">
                      Filter by Professor
                    </span>
                    <span className="md:hidden">Filter</span>
                  </>
                )}
              </button>

              {/* Professor Filter Dropdown */}
              {showProfessorFilter && (
                <div className="absolute left-0 md:right-0 md:left-auto mt-2 w-72 bg-gray-950 border border-gray-800 rounded-lg shadow-lg z-50">
                  <div className="flex justify-between items-center p-3 border-b border-gray-800">
                    <h3 className="font-medium text-gray-200">
                      Filter by Professor
                    </h3>
                    {selectedProfessor && (
                      <button
                        onClick={clearFilter}
                        className="text-xs text-yellow-400 hover:underline"
                      >
                        Clear Filter
                      </button>
                    )}
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {professorsList.map((professorName) => (
                      <div
                        key={professorName}
                        className={`p-3 cursor-pointer hover:bg-gray-800 text-sm ${
                          selectedProfessor === professorName
                            ? "bg-yellow-400 text-gray-950"
                            : "text-gray-300"
                        }`}
                        onClick={() => selectProfessor(professorName)}
                      >
                        {professorName}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            No projects found matching your criteria. Try adjusting your search or filters.
          </div>
        ) : (
          <div className="max-w-full mx-auto md:px-12 px-4">
            <HoverEffect items={filteredProjects} selectedId={selectedProjectId} />
          </div>
        )}
      </div>
    </div>
  );
}