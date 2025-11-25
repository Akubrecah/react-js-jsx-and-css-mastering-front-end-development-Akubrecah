import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'react-feather';

const Navbar = () => {
  const linkClass = "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300";
  const activeLinkClass = "text-blue-600 dark:text-blue-400 font-bold";

  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">TaskManager</NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Home</NavLink>
          <NavLink to="/task-manager" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Task Manager</NavLink>
          <NavLink to="/api-data" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>API Data</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Contact</NavLink>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col items-center space-y-4">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkClass} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink to="/task-manager" className={({ isActive }) => isActive ? activeLinkClass : linkClass} onClick={() => setIsMenuOpen(false)}>Task Manager</NavLink>
          <NavLink to="/api-data" className={({ isActive }) => isActive ? activeLinkClass : linkClass} onClick={() => setIsMenuOpen(false)}>API Data</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkClass} onClick={() => setIsMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : linkClass} onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <button
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false);
            }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 flex items-center gap-2"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            <span>Change Theme</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;