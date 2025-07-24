import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [initials, setInitials] = useState("");

  useEffect(() => {
    let currentUser = { firstName: '', lastName: '' };
    try {
      currentUser = JSON.parse(localStorage.getItem('currentUser')) || { firstName: '', lastName: '' };
    } catch (e) {}
    setInitials(
      `${currentUser.firstName?.[0] || ''}${currentUser.lastName?.[0] || ''}`.toUpperCase()
    );
  }, []);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between" style={{ minHeight: '80px' }}>
        <div className="flex items-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-12" />
        </div>
        <nav className="flex items-center space-x-10">
          <div className="relative">
            <button
              className="text-black text-lg font-semibold hover:text-teal flex items-center gap-1 focus:outline-none"
              onClick={() => setHomeDropdown((open) => !open)}
            >
              Home
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {homeDropdown && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10"
              >
                <Link to="/home" className="block px-4 py-3 text-black text-base hover:bg-ice" onClick={() => setHomeDropdown(false)}>Main Homepage</Link>
                <Link to="/detailedhome" className="block px-4 py-3 text-black text-base hover:bg-blue-100" onClick={() => setHomeDropdown(false)}>Detailed Homepage</Link>
              </div>
            )}
          </div>
          <a href="#" className="text-black text-lg font-semibold hover:text-teal">About Us</a>
          <div className="relative">
            <button
              className="text-black text-lg font-semibold hover:text-teal flex items-center gap-1 focus:outline-none"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
              onFocus={() => setServicesDropdown(true)}
              onBlur={() => setServicesDropdown(false)}
            >
              Services
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {servicesDropdown && (
              <div
                className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <a href="#" className="block px-4 py-3 text-black text-base hover:bg-ice">services</a>
                <a href="#" className="block px-4 py-3 text-black text-base hover:bg-ice">More Services</a>
              </div>
            )}
          </div>
          <a href="#" className="text-black text-lg font-semibold hover:text-teal">Blog</a>
          <a href="#" className="text-black text-lg font-semibold hover:text-teal">Contact Us</a>
          <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center text-white font-bold text-base cursor-pointer">{initials}</div>
        </nav>
      </div>
    </header>
  );
} 