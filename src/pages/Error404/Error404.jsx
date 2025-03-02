import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-950 to-slate-950 text-white">
      <div className="max-w-lg w-full p-8 bg-gradient-to-b from-slate-950 to-gray-950 rounded-2xl shadow-lg text-center border border-yellow-500/30">
        <h1 className="text-9xl font-extrabold text-yellow-400 drop-shadow-lg">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-300">Oops! Page Not Found</p>
        <p className="mt-2 text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-block px-6 py-3 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:from-yellow-500 hover:to-yellow-700"
          >
            Go Home
          </Link>
        </div>

        <div className="mt-6 flex justify-center space-x-6 text-yellow-400">
          <Link to="/course-material" className="hover:text-yellow-300 transition duration-300">
            materials
          </Link>
          <Link to="/projects" className="hover:text-yellow-300 transition duration-300">
            Projects
          </Link>
          <Link to="/team" className="hover:text-yellow-300 transition duration-300">
            Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
