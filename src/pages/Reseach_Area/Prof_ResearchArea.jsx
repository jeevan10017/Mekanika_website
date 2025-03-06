import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { professors } from "../../components/assets/Prof_Data"; 
import { FaFilter } from "react-icons/fa";
import { Spotlight } from "../../components/ui/spotlight-new.jsx";

export function ProfResearchArea() {
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showProfessorFilter, setShowProfessorFilter] = useState(false);
  const [showResearchFilter, setShowResearchFilter] = useState(false);
  const [selectedProfessors, setSelectedProfessors] = useState([]);
  const [selectedResearchAreas, setSelectedResearchAreas] = useState([]);
  const [professorsList, setProfessorsList] = useState([]);
  const [researchAreasList, setResearchAreasList] = useState([]);
  
  const ref = useRef(null);
  const searchRef = useRef(null);
  const profFilterDropdownRef = useRef(null);
  const researchFilterDropdownRef = useRef(null);
  const profListContainerRef = useRef(null);
  const id = useId();

  // Initialize lists of professors and research areas
  useEffect(() => {
    // Get unique professors (already sorted in the main data)
    setProfessorsList(professors.map(prof => prof.profName));
    const uniqueResearchAreas = new Set();
    professors.forEach(prof => {
      prof.researchAreas.forEach(area => {
        uniqueResearchAreas.add(area);
      });
    });
    // Make sure research areas are properly sorted alphabetically
    setResearchAreasList(Array.from(uniqueResearchAreas).sort((a, b) => a.localeCompare(b)));
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  useOutsideClick(searchRef, () => setSuggestions([]));
  
  // Handle outside clicks for filter dropdowns
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        profFilterDropdownRef.current &&
        !profFilterDropdownRef.current.contains(event.target)
      ) {
        setShowProfessorFilter(false);
      }
      
      if (
        researchFilterDropdownRef.current &&
        !researchFilterDropdownRef.current.contains(event.target)
      ) {
        setShowResearchFilter(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    
    // Search through professors and their research areas
    const filteredSuggestions = professors
      .filter(prof => {
        // Search in professor name
        if (prof.profName.toLowerCase().includes(query.toLowerCase())) return true;
        
        // Search in research areas
        const researchAreasMatch = prof.researchAreas.some(area => 
          area.toLowerCase().includes(query.toLowerCase())
        );
        
        return researchAreasMatch;
      })
      .map(prof => {
        // Find matching research areas
        const matchingAreas = prof.researchAreas.filter(area => 
          area.toLowerCase().includes(query.toLowerCase())
        );
        
        return {
          profName: prof.profName,
          matchingAreas: matchingAreas.length > 0 ? matchingAreas : [prof.researchAreas[0]]
        };
      })
      .slice(0, 5); 
    
    setSuggestions(filteredSuggestions);
  };
  
  // Toggle professor filter dropdown
  const toggleProfessorFilter = () => {
    setShowProfessorFilter(!showProfessorFilter);
    if (showResearchFilter) setShowResearchFilter(false);
  };
  
  // Toggle research area filter dropdown
  const toggleResearchFilter = () => {
    setShowResearchFilter(!showResearchFilter);
    if (showProfessorFilter) setShowProfessorFilter(false);
  };
  
  // Toggle professor in selected list
  const toggleProfessor = (profName) => {
    // Clear research areas filter when selecting professors
    setSelectedResearchAreas([]);
    
    setSelectedProfessors(prev => {
      if (prev.includes(profName)) {
        return prev.filter(p => p !== profName);
      } else {
        return [...prev, profName];
      }
    });
  };
  
  const toggleResearchArea = (area) => {
    setSelectedProfessors([]);
    
    setSelectedResearchAreas(prev => {
      if (prev.includes(area)) {
        return prev.filter(a => a !== area);
      } else {
        return [...prev, area];
      }
    });
  };
  
  // Remove a single professor filter
  const removeProfessorFilter = (profName) => {
    setSelectedProfessors(prev => prev.filter(p => p !== profName));
  };
  
  // Remove a single research area filter
  const removeResearchAreaFilter = (area) => {
    setSelectedResearchAreas(prev => prev.filter(a => a !== area));
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSelectedProfessors([]);
    setSelectedResearchAreas([]);
  };

  // Filter professors based on search query, selected professors, and selected research areas
  const filteredProfessors = professors
    .filter(prof => {
      // Filter by search query
      const matchesSearch = searchQuery.trim() === "" ||
        prof.profName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prof.researchAreas.some(area => 
          area.toLowerCase().includes(searchQuery.toLowerCase())
        );
      
      // Filter by selected professors (if any are selected)
      const matchesProfessor = selectedProfessors.length === 0 || 
        selectedProfessors.includes(prof.profName);
      
      // Filter by selected research areas (if any are selected)
      const matchesResearchArea = selectedResearchAreas.length === 0 || 
        prof.researchAreas.some(area => selectedResearchAreas.includes(area));
      
      return matchesSearch && matchesProfessor && matchesResearchArea;
    })
    .sort((a, b) => a.profName.localeCompare(b.profName)); // Sort alphabetically by professor name

  // Custom checkbox component for dark mode
  const DarkModeCheckbox = ({ checked, onChange, className }) => {
    return (
      <div 
        className={`relative w-4 h-4 mr-2 ${className}`}
        onClick={onChange}
      >
        <div className={`w-4 h-4 border ${checked ? 'border-yellow-500 bg-yellow-500' : 'border-gray-500 bg-gray-700'} rounded transition-colors`}>
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 absolute top-0.5 left-0.5 text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-gray-950 pt-12 md:pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-[80rem]">
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
    </div>

        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black h-full w-full z-10" 
            />
          )}
        </AnimatePresence>
        
        {/* Modal View */}
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0 grid place-items-center z-[100] px-4">
              <motion.button
                key={`close-${active.profName}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.05 },
                }}
                className="flex absolute top-12 right-4 items-center justify-center bg-yellow-500 rounded-full h-8 w-8"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              
              <motion.div
                layoutId={`card-${active.profName}-${id}`}
                ref={ref}
                className="w-full min-w-full md:min-w-[800px] max-w-[90vw] h-full md:h-fit md:max-h-[90%] max-h-[80vh] flex flex-col bg-gray-900 border border-neutral-700 sm:rounded-xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #1a1a1a 0%, #2d2d2d 100%)"
                }}
              >
                <div className="flex justify-between items-start p-6 border-b border-neutral-700">
                  <div>
                    <h3 className="font-bold text-xl text-white">
                      Prof. {active.profName}
                    </h3>
                  </div>

                  <motion.a
                    href={active.link}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-yellow-500  text-black hover:from-yellow-400 hover:to-amber-400 transition-all text-center"
                  >
                    View Profile
                  </motion.a>
                </div>
                
                <div className="pt-4 px-6 pb-6 overflow-y-auto">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-300 text-sm md:text-base flex flex-col items-start gap-4"
                  >
                    <h4 className="font-medium text-lg text-white">Research Areas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      {active.researchAreas.map((area, idx) => (
                        <div 
                          key={idx} 
                          className="px-4 py-3 bg-gray-800/50 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          {area}
                        </div>
                      ))}
                    </div>
                    
                    {active.researchStatement && (
                      <>
                        <h4 className="font-medium text-lg text-white mt-4">Research Statement:</h4>
                        <div className="max-h-64 overflow-y-auto w-full bg-gray-800/50 p-4 rounded-lg">
                          {active.researchStatement.split('/n/n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4 last:mb-0">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        

        <div className="sticky top-0 z-30 bg-gray-950 md:pt-4 pb-6 border-b border-neutral-800">
           <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
                     <Spotlight />
                   </div> 
          {/* Search Bar */}
          <div className="relative mb-4" ref={searchRef}>
            <div className="flex items-center border-2 border-gray-800 rounded-lg overflow-hidden bg-gray-800">
              <input
                type="text"
                placeholder="Search professors or research areas..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-4 focus:outline-none bg-zinc-800 text-white placeholder:text-neutral-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="p-3 text-neutral-400 hover:text-white"
                >
                  <CloseIcon />
                </button>
              )}
            </div>
            
            {/* Search suggestions */}
            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-1 bg-neutral-800 rounded-lg shadow-xl border border-neutral-700">
                {suggestions.map((suggestion, index) => (
                  <div 
                    key={index}
                    className="p-4 hover:bg-neutral-700 cursor-pointer border-b last:border-b-0 border-zinc-700"
                    onClick={() => {
                      setSearchQuery(suggestion.profName);
                      setSuggestions([]);
                    }}
                  >
                    <div className="font-medium text-white">
                      Prof. {suggestion.profName}
                    </div>
                    <div className="text-sm text-neutral-400">
                      {suggestion.matchingAreas[0]}
                      {suggestion.matchingAreas.length > 1 && ' ...'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            {/* Professor Filter Button */}
            <div className="relative w-full sm:w-1/2" ref={profFilterDropdownRef}>
              <button
                onClick={toggleProfessorFilter}
                className={`flex items-center justify-center gap-2 ${
                  selectedProfessors.length > 0
                    ? "bg-yellow-500 text-black"
                    : "bg-neutral-800 text-white"
                } px-4 py-3 rounded-lg hover:bg-yellow-400 hover:text-black w-full`}
              >
                <FaFilter />
                {selectedProfessors.length > 0 ? (
                  <span>{selectedProfessors.length} Professor{selectedProfessors.length !== 1 ? 's' : ''} Selected</span>
                ) : (
                  <span>Filter by Professor</span>
                )}
              </button>

              {/* Professor Filter Dropdown */}
              {showProfessorFilter && (
                <div className="absolute left-0 mt-2 w-full bg-gray-900 border border-neutral-700 rounded-lg shadow-lg z-50">
                  <div className="flex justify-between items-center p-3 border-b border-neutral-700">
                    <h3 className="font-medium text-white">Filter by Professor</h3>
                    {(selectedProfessors.length > 0 || selectedResearchAreas.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-yellow-500 hover:underline"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {professorsList.map((profName) => (
                      <div
                        key={profName}
                        className={`p-3 cursor-pointer hover:bg-gray-800 text-sm ${
                          selectedProfessors.includes(profName)
                            ? "bg-yellow-500 text-black"
                            : "text-neutral-300"
                        }`}
                        onClick={() => toggleProfessor(profName)}
                      >
                        <div className="flex items-center">
                          <DarkModeCheckbox 
                            checked={selectedProfessors.includes(profName)}
                            onChange={() => toggleProfessor(profName)}
                          />
                          Prof. {profName}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Research Area Filter Button */}
            <div className="relative w-full sm:w-1/2" ref={researchFilterDropdownRef}>
              <button
                onClick={toggleResearchFilter}
                className={`flex items-center justify-center gap-2 ${
                  selectedResearchAreas.length > 0
                    ? "bg-yellow-500 text-black"
                    : "bg-neutral-800 text-white"
                } px-4 py-3 rounded-lg hover:bg-yellow-400 hover:text-black w-full`}
              >
                <FaFilter />
                {selectedResearchAreas.length > 0 ? (
                  <span>{selectedResearchAreas.length} Research Area{selectedResearchAreas.length !== 1 ? 's' : ''} Selected</span>
                ) : (
                  <span>Filter by Research Area</span>
                )}
              </button>

              {/* Research Area Filter Dropdown */}
              {showResearchFilter && (
                <div className="absolute left-0 mt-2 w-full bg-gray-900 border border-zinc-700 rounded-lg shadow-lg z-50">
                  <div className="flex justify-between items-center p-3 border-b border-neutral-700">
                    <h3 className="font-medium text-white">Filter by Research Area</h3>
                    {(selectedProfessors.length > 0 || selectedResearchAreas.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-yellow-500 hover:underline"
                      >
                        Clear All Filters
                      </button>
                    )}
                  </div>
                  <div className="max-h-60 overflow-y-auto">
                    {researchAreasList.map((area) => (
                      <div
                        key={area}
                        className={`p-3 cursor-pointer hover:bg-gray-800 text-sm ${
                          selectedResearchAreas.includes(area)
                            ? "bg-yellow-500 text-black"
                            : "text-gray-300"
                        }`}
                        onClick={() => toggleResearchArea(area)}
                      >
                        <div className="flex items-center">
                          <DarkModeCheckbox 
                            checked={selectedResearchAreas.includes(area)}
                            onChange={() => toggleResearchArea(area)}
                          />
                          {area}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Active Filters Display */}
          {(selectedProfessors.length > 0 || selectedResearchAreas.length > 0) && (
            <div className="w-full mb-4">
              <div className="flex flex-wrap gap-2">
                {selectedProfessors.map(profName => (
                  <div key={profName} className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                    <span>Prof. {profName}</span>
                    <button 
                      onClick={() => removeProfessorFilter(profName)}
                      className="hover:text-red-500"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
                {selectedResearchAreas.map(area => (
                  <div key={area} className="flex items-center gap-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">
                    <span>{area}</span>
                    <button 
                      onClick={() => removeResearchAreaFilter(area)}
                      className="hover:text-zinc-700 "
                    >
                      <CloseIcon />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div 
          className="mt-4  overflow-y-auto"
          ref={profListContainerRef}
        >
          {/* No Results Message */}
          {filteredProfessors.length === 0 && (
            <div className="w-full text-center py-8 text-neutral-400">
              No professors match your search or filter criteria. Try adjusting your filters.
            </div>
          )}
          
          {/* Professors List */}
          <ul className="w-full">
            {filteredProfessors.map((prof) => (
              <motion.div
                layoutId={`card-${prof.profName}-${id}`}
                key={`card-${prof.profName}-${id}`}
                onClick={() => setActive(prof)}
                className="p-5 flex flex-col justify-between hover:bg-gray-800 rounded-xl cursor-pointer border border-neutral-700 mb-4 bg-neutral-850"
                style={{
                  background: "linear-gradient(145deg, #252525 0%, #1a1a1a 100%)"
                }}
              >
                <div className="w-full">
                  <h3 className="font-medium text-lg text-white">
                    Prof. {prof.profName}
                  </h3>
                  <div className="text-neutral-400 mt-2">
                    <div>
                      {prof.researchAreas.join(", ")}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};