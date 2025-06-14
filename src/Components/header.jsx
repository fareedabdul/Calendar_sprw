import React, { useState } from "react";
import { Sun, Moon, User, LogOut, Settings, ChevronDown } from "lucide-react";

const DashboardHeader = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle user dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      {/* Left: Logo and Search */}
      <div className="flex items-center gap-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent hover:from-blue-600 hover:to-teal-500 transition-all duration-300">
            Sparrow X Kochi 
          </span>
        </div>

        {/* Search bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search events, contacts..."
            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200 w-64 hover:w-72"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-300">
            🔍
          </span>
        </div>
      </div>

      {/* Right: View Mode + Add Button + User Profile */}
      <div className="flex items-center gap-4">
        {/* View mode buttons */}
        <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-md p-1">
          <button className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 transition-all duration-200">
            Weekly
          </button>
          <button className="px-3 py-1 bg-black dark:bg-blue-600 text-white rounded-md hover:bg-gray-800 dark:hover:bg-blue-700 transition-all duration-200">
            Monthly
          </button>
          <button className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-600 transition-all duration-200">
            Timeline
          </button>
        </div>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600 dark:text-gray-300" />}
        </button>

        {/* Add Event Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2">
          <span>+ Add Country</span>
        </button>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              AF
            </div>
            <ChevronDown size={16} className={`text-gray-600 dark:text-gray-300 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="py-2">
                <div className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700">
                  John Doe
                </div>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <User size={16} /> Profile
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <Settings size={16} /> Settings
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200">
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;