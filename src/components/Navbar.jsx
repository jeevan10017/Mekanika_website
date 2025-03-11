import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../components/Images/mekalogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { id: 1, text: "Home", link: "/" },
    {
      id: 2,
      text: "Blogs",
      subItems: [
        { id: 21, text: "Intern Chronicles", link: "/intern-chronicles" },
        { id: 22, text: "Core Expedition", link: "/core-expedition" },
      ],
    },
    { id: 3, text: "Events", link: "/events" },
    { id: 4, text: "Materials", link: "/course-material" },
    { id: 5, text: "Department Projects",
      subItems: [
        { id: 51, text: "Research areas", link: "/research-areas" },
        { id: 52, text: "Research Projects", link: "/projects" },
    ]
    },
    {
      id: 6,
      text: "more",
      subItems: [
        { id: 61, text: "Team", link: "/team" },
        // { id: 62, text: "Video", link: "/under-construction" },
        { id: 63, text: "gallery", link: "/gallery" },
        { id: 64, text: "registration", link: "/under-construction" },
      ],
    },
  ];

  return (
    <div
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "backdrop-blur-md bg-black/70 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-14 md:h-16 lg:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Mekanika"
            className=" h-8 md:h-10 w-auto mr-3  rounded"
          />
          <h1 className="md:text-3xl text-2xl font-bold text-yellow-400">
            MEKANIKA
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) =>
            item.subItems ? (
              <li
                key={item.id}
                className="relative p-6 cursor-pointer mx-auto duration-300 group text-gray-200 font-bold"
                onMouseEnter={() => setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span>{item.text}</span>
                <span className="absolute left-0 bottom-3 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                <div
                  className={`absolute left-0 top-full bg-gray-900 opacity-90 text-gray-300 shadow-lg rounded-md ${
                    activeDropdown === item.id ? "block" : "hidden"
                  }`}
                  style={{ width: "200px" }}
                >
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.id}
                      to={subItem.link}
                      className="block px-4 py-2 hover:bg-gray-950 rounded-md relative group"
                    >
                      {subItem.text}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                      {/* <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-600 transition-all duration-300 group-hover:w-full"></span> */}
                    </Link>
                  ))}
                </div>
              </li>
            ) : (
              <li
                key={item.id}
                className="p-6 cursor-pointer mx-auto duration-300 relative group text-gray-300 font-bold"
              >
                <Link to={item.link}>
                  {item.text}
                  <span className="absolute left-0 bottom-3 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="block md:hidden text-gray-300 font-extrabold"
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed md:hidden top-0 left-0 w-[60%] h-screen z-50 border-r border-yellow-400 bg-gray-950 transform transition-transform duration-500 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-2xl font-bold text-yellow-400 m-4">MEKANIKA</h1>
          <ul className="bg-gray-950 h-full">
            {navItems.map((item) =>
              item.subItems ? (
                <li key={item.id} className="p-4 border-b border-gray-600">
                  <div
                    className="text-[#c9c7c2] hover:text-white cursor-pointer"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    {item.text}
                  </div>
                  {activeDropdown === item.id && (
                    <ul className="text-gray-300 bg-gray-950">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id} className="p-2 bg-gray-950">
                          <Link to={subItem.link} onClick={() => setNav(false)}>
                            {subItem.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li
                  key={item.id}
                  className="p-4 border-b text-[#c9c7c2] border-gray-600 bg-gray-950 hover:bg-yellow-400 duration-300 hover:text-white cursor-pointer"
                >
                  <Link to={item.link} onClick={() => setNav(false)}>
                    {item.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
