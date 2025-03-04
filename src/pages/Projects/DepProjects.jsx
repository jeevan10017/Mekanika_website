import React, { useState } from "react";
import { HoverEffect } from "../../components/ui/hoverEffect.jsx";
import projectsData from "../../components/assets/ProjectsData.js";
import { FaSort, FaMicrophone } from "react-icons/fa";

export function DepProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortedProjects, setSortedProjects] = useState(projectsData);
  const [sortOrder, setSortOrder] = useState("asc");
  const [suggestions, setSuggestions] = useState([]);

  const handleSort = () => {
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

  const filteredProjects = sortedProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery) ||
      project.faculties.some((faculty) =>
        faculty.name.toLowerCase().includes(searchQuery)
      )
  );

  return (
    <div className="max-w-full mx-auto bg-gray-950 text-white min-h-screen py-24 ">
      {/* Centered Heading */}
      <h1 className="text-3xl font-bold text-center mt-8 mb-12 text-yellow-400">
        Ongoing Projects in Department
      </h1>

      {/* Search Bar, Sort Button, and Voice Search */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 px-4">
        {/* Input Field */}
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search by Project Title or Professor"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full p-3 border border-gray-600 rounded-lg  bg-gradient-to-b from-neutral-900  to-neutral-950 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute top-14 left-0 w-full bg-gray-950 border border-gray-800 rounded-lg shadow-lg max-h-60 overflow-y-auto z-40">
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.id}
                  className="p-3 hover:bg-yellow-400 cursor-pointer text-sm hover:text-gray-950"
                  onClick={() => setSearchQuery(suggestion.title)}
                >
                  {suggestion.title} (by{" "}
                  {suggestion.faculties.map((f) => f.name).join(", ")})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* Voice Search Icon */}
          <button
            onClick={handleVoiceSearch}
            className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-600"
          >
            <FaMicrophone className="text-gray-300 text-xl" />
          </button>
          {/* Sort Icon */}
          <button
            onClick={handleSort}
            className="flex items-center gap-2 bg-yellow-400 text-gray-950 px-4 py-2 rounded-lg hover:bg-yellow-300 w-full md:w-auto"
          >
            <FaSort />
            <span>Sort by Date</span>
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-full mx-auto md:px-12 px-4">
        <HoverEffect items={filteredProjects} />
      </div>
    </div>
  );
}