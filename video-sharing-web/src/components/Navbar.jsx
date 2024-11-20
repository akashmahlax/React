import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon , FiSun } from 'react-icons/fi';


const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-gray-900 text-white dark:bg-gray-800 px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold hover:text-blue-500">
          iTube
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/upload" className="hover:text-blue-500">Upload</Link>
          <Link to="/profile" className="hover:text-blue-500">Profile</Link>
          <Link to="/login" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600">
            Login
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none"
        >
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden mt-4">
        <Link to="/" className="block text-white hover:text-blue-500">Home</Link>
        <Link to="/upload" className="block text-white hover:text-blue-500">Upload</Link>
        <Link to="/profile" className="block text-white hover:text-blue-500">Profile</Link>
        <Link to="/login" className="block text-white hover:text-blue-500">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;