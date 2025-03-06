import React, { useState, useEffect, useRef } from "react";
import { HoverEffect } from "../../components/ui/hoverEffect.jsx";
import projectsData from "../../components/assets/ProjectsData.js";
import { FaSort, FaMicrophone, FaFilter } from "react-icons/fa";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

export function DepProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedProjects, setSortedProjects] = useState(projectsData);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortActive, setSortActive] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showProfessorFilter, setShowProfessorFilter] = useState(false);
  const [selectedProfessor, setSelectedProfessor] = useState(null);
  const [professorsList, setProfessorsList] = useState([]);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const filterDropdownRef = useRef(null);

  useEffect(() => {
    const uniqueProfessors = new Set();
    projectsData.forEach((project) => {
      project.faculties.forEach((faculty) => {
        uniqueProfessors.add(faculty.name);
      });
    });
    setProfessorsList(Array.from(uniqueProfessors).sort());
  }, []);

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

  const handleSort = () => {
    setSortActive(!sortActive);

    const sorted = [...sortedProjects].sort((a, b) => {
      const dateA = new Date(a.Startdate);
      const dateB = new Date(b.Startdate);
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });
    setSortedProjects(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleVoiceSearch = () => {
    alert("Voice search not implemented yet!");
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matches = projectsData.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.faculties.some((faculty) =>
          faculty.name.toLowerCase().includes(query)
        )
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

  const filteredProjects = sortedProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.faculties.some((faculty) =>
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesProfessor =
      selectedProfessor === null ||
      project.faculties.some((faculty) => faculty.name === selectedProfessor);

    return matchesSearch && matchesProfessor;
  });

  return (
    <div className="relative max-w-full mx-auto bg-gray-950 text-white min-h-screen py-24">
      {/* Conditionally render the Spotlight for non-mobile screens only */}
      {!isMobileScreen && (
        <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
          <Spotlight />
        </div>
      )}

      <div className="relative z-20">
        <h1 className="text-3xl font-bold text-center mt-8 mb-12 text-yellow-400">
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
                    key={suggestion.id}
                    className="p-3 hover:bg-yellow-400 cursor-pointer text-sm hover:text-gray-950"
                    onClick={() => {
                      setSearchQuery(suggestion.title);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.title} (by{" "}
                    {suggestion.faculties.map((f) => f.name).join(", ")})
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center gap-4 w-full md:w-auto">
            {/* Professor Filter Button */}
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
                  <span> {selectedProfessor}</span>
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

            {/* Sort Button */}
            {/* <button
              onClick={handleSort}
              className={`flex items-center justify-center gap-2 ${
                sortActive
                  ? "bg-yellow-400 text-gray-950"
                  : "bg-gray-800 text-white"
              } px-4 py-2 rounded-lg hover:bg-yellow-300 hover:text-gray-950 flex-1 md:flex-initial h-11 whitespace-nowrap`}
            >
              <FaSort />
              <span className="hidden md:inline">
                Sort by {sortOrder === "asc" ? "Oldest" : "Newest"}
              </span>
              <span className="md:hidden">
                Sort {sortOrder === "asc" ? "↑" : "↓"}
              </span>
            </button> */}
          </div>
        </div>

        <div className="max-w-full mx-auto md:px-12 px-4">
          <HoverEffect items={filteredProjects} />
        </div>
      </div>
    </div>
  );
}