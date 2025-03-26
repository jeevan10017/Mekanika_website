import React, { useState, useRef, useMemo, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { X, Search } from 'lucide-react';

const DepMap = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const modalRef = useRef(null);
  const searchRef = useRef(null);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
    setIsSearchActive(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => {
      setIsSearchFocused(false);
      setIsSearchActive(false);
    }, 200);
  };

   const roomData = {
    '   MAIN BUILDING - Ground Floor': [
      { number: '1', name: 'Common Room', keywords: ['common', 'room'] },
      { number: '2', name: 'Prof. Soumitra Paul (HOD)', keywords: ['soumitra', 'paul', 'hod'] },
      { number: '3', name: 'Office', keywords: ['office'] },
      { number: '4', name: 'Ladies Washroom', keywords: ['ladies', 'washroom'] },
      { number: '5', name: 'Room no 104', keywords: ['room 104'] },
      { number: '6', name: 'Store', keywords: ['store'] },
      { number: '7', name: 'Gents Toilet', keywords: ['gents', 'toilet'] },
      { number: '8', name: 'Prof. Soumitra Paul', keywords: ['soumitra', 'paul'] },
      { number: '9', name: 'Machining Tool and Machining Lab', keywords: ['machining', 'lab'] },
      { number: '10', name: 'CAD CAM Centre', keywords: ['cad', 'cam', 'centre'] },
      { number: '11', name: 'Direct Digital Manufacturing Lab', keywords: ['digital', 'manufacturing', 'lab'] },
      { number: '12', name: 'Material Testing Lab', keywords: ['material', 'testing', 'lab'] }
    ],
    'MAIN BUILDING - 1st Floor': [
      { number: '14', name: 'Prof. Manas Chandra Ray', keywords: ['manas', 'ray'] },
      { number: '15', name: 'Prof. Jeevanjyoti Chakraborty', keywords: ['jeevanjyoti', 'chakraborty'] },
      { number: '16', name: 'Prof. Sankha Deb', keywords: ['sankha', 'deb'] },
      { number: '17', name: 'Prof. Abhijit Guha', keywords: ['abhijit', 'guha'] },
      { number: '18', name: 'Prof. Archana Arbind', keywords: ['archana', 'arbind'] },
      { number: '19', name: 'Ladies Washroom', keywords: ['ladies', 'washroom'] },
      { number: '20', name: 'Prof. Sanjay Gupta', keywords: ['sanjay', 'gupta'] },
      { number: '21', name: 'Prof. Atul Jain', keywords: ['atul', 'jain'] },
      { number: '22', name: 'Prof. Korak Sarkar', keywords: ['korak', 'sarkar'] },
      { number: '23', name: 'Mech Inst and Control Lab', keywords: ['mech', 'control', 'lab'] },
      { number: '24', name: 'Tribiology Laboratory (208)', keywords: ['tribiology', 'lab'] },
      { number: '25', name: 'BioMechanics Lab', keywords: ['biomechanics', 'lab'] },
      { number: '26', name: 'Electrophysical Processing Lab', keywords: ['electrophysical', 'processing'] },
      { number: '27', name: 'Seminar Room', keywords: ['seminar', 'room'] },
      { number: '28', name: 'Tribiology Laboratory', keywords: ['tribiology', 'lab']},
      { number: '30', name: 'Prof. Somnath Roy', keywords: ['somnath', 'roy'] },
      { number: '31', name: 'Prof. BM Belgaumkar Seminar Hall', keywords: ['belgaumkar', 'seminar','new'] },
      { number: '32', name: 'Prof. Sati Nath Bhattacharyya', keywords: ['sati', 'bhattacharyya'] },
      { number: '33', name: 'Prof. Anirvan Dasgupta', keywords: ['anirvan', 'dasgupta'] },
      { number: '34', name: 'Prof. Kingshook Bhattacharyya', keywords: ['kingshook', 'bhattacharyya'] },
      { number: '35', name: 'Prof. Suriya Kanta Pal', keywords: ['suriya', 'pal'] },
      { number: '36', name: 'Prof. Siddharth Tamang', keywords: ['siddharth', 'tamang'] },
      { number: '37', name: 'Prof. S.Roy', keywords: ['s', 'roy'] },
      { number: '38', name: 'Prof. Partha Pratim Bandyopadhyay', keywords: ['partha', 'bandyopadhyay'] },
      { number: '39', name: 'Prof. Mihir Sarangi', keywords: ['mihir', 'sarangi'] },
      { number: '40', name: 'Prof. Partha Saha', keywords: ['partha', 'saha'] },
      { number: '41', name: 'Prof. Sushanta Kumar Panda', keywords: ['sushanta', 'panda'] },
      { number: '42', name: 'Gents Toilet', keywords: ['gents', 'toilet'] }
    ],
    'MAIN BUILDING - 2nd Floor': [
      { number: '43', name: 'Digital Repository', keywords: ['digital', 'repository'] },
      { number: '44', name: 'Stress Analysis', keywords: ['stress', 'analysis'] },
      { number: '45', name: 'Mechanical Engineering Society', keywords: ['mechanical', 'society'] },
      { number: '46', name: 'Research Scholar', keywords: ['research', 'scholar'] },
      { number: '47', name: 'Room no 306', keywords: ['room 306'] },
      { number: '48', name: 'Drawing Hall', keywords: ['drawing', 'hall'] },
      { number: '49', name: 'Room no 308', keywords: ['room 308'] },
      { number: '50', name: 'Room no 309', keywords: ['room 309'] },
      { number: '51', name: 'Room no 310', keywords: ['room 310'] },
      { number: '52', name: 'Prof. Vikranth Racherla', keywords: ['vikranth', 'racherla'] },
      { number: '53', name: 'Prof. Rajaram Lakkaraju', keywords: ['rajaram', 'lakkaraju'] },
      { number: '54', name: 'Prof. Poonam Sundriyal', keywords: ['poonam', 'sundriyal'] },
      { number: '55', name: 'Room no 312', keywords: ['room 312'] },
      { number: '56', name: 'Gents Toilet', keywords: ['gents', 'toilet'] }
    ],
      
    'MAIN BUILDING EXTENSION AREA': [
      { number: '57a', name: 'Hydraulics Lab - Prof. K Pratihar', keywords: ['hydraulics', 'pratihar'] },
      { number: '57b', name: 'Prof. MVN Vamshi', keywords: ['mvn', 'vamshi'] },
      { number: '57c', name: 'Electronic Thermal Management Lab - Prof. Anandaroop Bhattacharya', keywords: ['electronic', 'thermal', 'bhattacharya'] },
      { number: '57d', name: 'Soft Computing Lab', keywords: ['soft', 'computing', 'lab'] },
      { number: '57e', name: 'Prof. Ajay M Sidpara', keywords: ['ajay', 'sidpara'] },
      { number: '57f', name: 'A Roy Chowdhury', keywords: ['roy', 'chowdhury'] },
      { number: '57g', name: 'Prof. Niranjan Das Chakladar', keywords: ['niranjan', 'chakladar'] },
      { number: '57h', name: 'Soft Computing Lab', keywords: ['soft', 'computing', 'lab'] },
      { number: '57i', name: 'Toilet', keywords: ['toilet'] },
      { number: '58a', name: 'Prof. A K Mohanty Seminar Hall', keywords: ['mohanty', 'seminar'] },
      { number: '58b', name: 'Prof. Sandipan Ghosh Maulik', keywords: ['sandipan', 'maulik'] },
      { number: '58c', name: 'Prof. M Ramgopal', keywords: ['ramgopal'] },
      { number: '59a', name: 'Prof. Purbarun Dhar', keywords: ['purbarun', 'dhar'] },
      { number: '59b', name: 'Prof. Saurav Mitra', keywords: ['saurav', 'mitra'] },
      { number: '60', name: 'Energy System Lab', keywords: ['energy', 'system', 'lab'] },
      { number: '61', name: 'Washroom', keywords: ['washroom'] },
      { number: '62', name: 'Hydrodynamics and Thermal Multiphase Lab', keywords: ['hydrodynamics', 'thermal', 'multiphase'] },
      { number: '63', name: 'Acoustic and Condition Monitoring Lab', keywords: ['acoustic', 'condition', 'monitoring'] },
      { number: '64', name: 'Metrology Lab', keywords: ['metrology', 'lab'] },
      { number: '65', name: 'System and Dynamics Lab', keywords: ['system', 'dynamics', 'lab'] },
      { number: '66', name: 'Welding Lab', keywords: ['welding', 'lab'] }
    ],
    'FLUIDS MECHANICS BLOCK': [
      { number: '67', name: 'Covirap/PINA Manufacturing Lab', keywords: ['covirap', 'pina', 'manufacturing'] },
      { number: '68', name: 'Combustion Lab', keywords: ['combustion', 'lab'] },
      { number: '69', name: 'CFO Lab', keywords: ['cfo', 'lab'] },
      { number: '70', name: 'Microfluid and Microscale Transport Process Lab', keywords: ['microfluid', 'microscale', 'transport'] },
      { number: '71', name: 'Toilet', keywords: ['toilet'] },
      { number: '72', name: 'Prof. Suman Chakraborty', keywords: ['suman', 'chakraborty'] },
      { number: '73', name: 'Prof. S K Das', keywords: ['sk', 'das'] },
      { number: '74', name: 'Prof. Aditya Bandyopadhyay', keywords: ['aditya', 'bandyopadhyay'] },
      { number: '75', name: 'Prof. V Mahendra Reddy', keywords: ['mahendra', 'reddy'] }
    ]
  };


  const flatRoomData = Object.entries(roomData).flatMap(([floor, rooms]) => 
    rooms.map(room => ({
      ...room,
      floor,
      fullName: `${room.number} - ${room.name} (${floor})`
    }))
  );

  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    return flatRoomData.filter(room => 
      room.keywords.some(keyword => keyword.toLowerCase().includes(lowerSearchTerm)) ||
      room.name.toLowerCase().includes(lowerSearchTerm) ||
      room.number.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm, flatRoomData]);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setSearchTerm('');
    setIsSearchActive(false);
  };


  const clearSearch = () => {
    setSearchTerm('');
    setSelectedRoom(null);
    setIsSearchActive(false);
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        selectedRoom && 
        modalRef.current && 
        !modalRef.current.contains(event.target)
      ) {
        setSelectedRoom(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedRoom]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                    min-h-screen flex flex-col items-center justify-center p-4">
      {isSearchFocused && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={handleSearchBlur}
        />
      )}

      {/* Search Container */}
      <div 
        ref={searchRef}
        className={`relative z-40 w-full max-w-[20rem] md:max-w-4xl transition-all duration-300 ease-in-out 
          ${isSearchFocused 
            ? 'scale-110 translate-y-[-50px] md:translate-y-[100px]' 
            : 'md:mt-12 mb-4'}`}
      >
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search rooms, labs, professors..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsSearchActive(true);
            }}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className="w-full p-2 pl-10 border rounded-lg 
              bg-gray-800 text-gray-100 border-gray-700
              focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <Search 
            className="absolute left-3 top-3 text-yellow-400" 
            size={20} 
          />
          {searchTerm && (
            <button 
              onClick={clearSearch}
              className="absolute right-3 top-3 text-yellow-400"
            >
              <X size={20} />
            </button>
          )}

          {isSearchActive && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 
              bg-gray-800 
              border border-gray-700
              rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {Object.entries(
                searchResults.reduce((acc, room) => {
                  if (!acc[room.floor]) acc[room.floor] = [];
                  acc[room.floor].push(room);
                  return acc;
                }, {})
              ).map(([floor, rooms]) => (
                <div key={floor}>
                  <div className="px-4 py-2 bg-gray-950 text-sm font-semibold text-yellow-200">
                    {floor}
                  </div>
                  {rooms.map(room => (
  <button
    key={room.number}
    onMouseDown={() => handleRoomSelect(room)} 
    className="w-full text-left px-4 py-2 
      hover:bg-gray-700
      focus:outline-none"
  >
    <div className="font-medium text-gray-100">
      {room.number} - {room.name}
    </div>
  </button>
))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

{/* Room Details Modal */}
      {selectedRoom && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div 
      ref={modalRef}
      className="bg-gray-800 rounded-lg p-6 w-full max-w-md mx-4"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-100">Room Details</h2>
        <button 
          onClick={() => setSelectedRoom(null)}
          className="text-gray-100 hover:text-gray-300 transition-colors"
        >
          <X size={24} />
        </button>
      </div>
      <div className="grid grid-cols-[35%_65%] gap-4">
        <div className="text-left pr-4">
          <p className="text-gray-100 font-semibold">Room Number:</p>
          <p className="text-gray-100 font-semibold">Name:</p>
          <p className="text-gray-100 font-semibold">Floor:</p>
        </div>
        <div className="text-left">
          <p className="text-yellow-400">{selectedRoom.number}</p>
          <p className="text-yellow-400">{selectedRoom.name}</p>
          <p className="text-yellow-400">{selectedRoom.floor}</p>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-300 text-sm">
          Refer to Room {selectedRoom.number} on the map
        </p>
      </div>
    </div>
  </div>
)}
      <div className="w-full max-w-6xl md:h-[80vh] relative overflow-hidden border-2 border-yellow-400 rounded-lg shadow-lg">
        <TransformWrapper
          initialScale={1}
          minScale={0.5}
          maxScale={4}
          wheel={{
            step: 0.15,
            smooth: true,
            disableLimitsOnWheel: true,
          }}
          pinch={{
            step: 5,
          }}
          doubleClick={{
            step: 1.2,
          }}
          smooth
          velocity={{
            touch: 0.1,
            mouse: 0.02,
          }}
          alignmentAnimation={{
            sizeX: 300,
            sizeY: 300,
            disable: false,
          }}
          centerZoomedOut={true}
          limitToBounds={false}
        >
          {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
            <>
              <div className="absolute bottom-4 right-4 z-10 flex gap-2">
                <button
                  onClick={() => zoomIn()}
                  className="p-2 px-3 bg-gray-800 text-yellow-400 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  +
                </button>
                <button
                  onClick={() => zoomOut()}
                  className="p-2 px-3 bg-gray-800 text-yellow-400 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  -
                </button>
                <button
                  onClick={() => resetTransform()}
                  className="p-2 bg-gray-800 text-yellow-400 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Reset
                </button>
              </div>
              
              <TransformComponent
                wrapperStyle={{
                  width: "100%",
                  height: "100%",
                  cursor: 'grab',
                }}
                contentStyle={{
                  cursor: 'grab',
                }}
              >
                <img 
                  src="/map/depMap.jpg" 
                  alt="Department Map" 
                  className="w-full h-full object-contain select-none"
                  draggable="false"
                  onMouseDown={(e) => {
                    e.currentTarget.style.cursor = 'grabbing';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.cursor = 'grab';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.cursor = 'grab';
                  }}
                />
              </TransformComponent>
            </>
          )}
        </TransformWrapper>
      </div>
    </div>
  );
};

export default DepMap;