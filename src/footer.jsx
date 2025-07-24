import React, { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaSpa, FaAppleAlt, FaBrain, FaDumbbell, FaBed, FaUserTie } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3s
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 pt-10 pb-4 px-4 md:px-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 pb-8">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-start space-y-3">
          <img src="/src/assets/logo.png" alt="Logo" className="h-16 w-16 object-contain" />
          <span className="font-bold text-lg text-green-700">Health & Wellness</span>
          <span className="text-sm text-gray-500">Empowering healthy lifestyles every day.</span>
        </div>
        {/* Quick Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Services</a></li>
          </ul>
        </div>
        {/* Explore Services */}
        <div>
          <h3 className="font-semibold mb-3">Explore Services</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2"><FaSpa className="text-green-600" /><a href="#" className="hover:text-blue-600">Yoga & Meditation</a></li>
            <li className="flex items-center gap-2"><FaAppleAlt className="text-green-600" /><a href="#" className="hover:text-blue-600">Diet & Nutrition</a></li>
            <li className="flex items-center gap-2"><FaBrain className="text-green-600" /><a href="#" className="hover:text-blue-600">Mental Wellness</a></li>
            <li className="flex items-center gap-2"><FaDumbbell className="text-green-600" /><a href="#" className="hover:text-blue-600">Fitness Programs</a></li>
            <li className="flex items-center gap-2"><FaBed className="text-green-600" /><a href="#" className="hover:text-blue-600">Sleep Therapy</a></li>
            <li className="flex items-center gap-2"><FaUserTie className="text-green-600" /><a href="#" className="hover:text-blue-600">Lifestyle Coaching</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">📍 Address:</span> 123 Wellness Ave, Healthy City</li>
            <li><span className="font-medium">📞 Phone:</span> (123) 456-7890</li>
            <li><span className="font-medium">📧 Email:</span> <a href="mailto:support@healthsite.com" className="hover:text-blue-600">support@healthsite.com</a></li>
            <li><span className="font-medium">🕒 Hours:</span> Mon–Fri, 9 AM – 6 PM</li>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div>
          <h3 className="font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-2">Get weekly wellness tips and updates in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400 flex-1 min-w-0"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <div className="mt-2 text-green-600 text-sm font-semibold">Thanks for subscribing!</div>
          )}
        </div>
      </div>
      {/* Social & Legal */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-gray-100 pt-4 gap-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram size={20} /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaFacebookF size={20} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaLinkedinIn size={20} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600"><FaYoutube size={20} /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-green-600"><FaWhatsapp size={20} /></a>
        </div>
        {/* Legal Links */}
        <div className="flex flex-wrap gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="hover:text-blue-600">Terms & Conditions</a>
          <a href="#" className="hover:text-blue-600">Disclaimer</a>
        </div>
      </div>
      {/* Copyright */}
      <div className="max-w-7xl mx-auto text-center text-xs text-gray-400 pt-4">
        © 2025 Health & Wellness. All rights reserved.
      </div>
    </footer>
  );
} 