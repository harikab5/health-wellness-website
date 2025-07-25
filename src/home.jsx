import React, { useState, useEffect } from "react";
import homeheroVideo from "./assets/homehero.mp4";
import missionImg from "./assets/mission.jpeg";
import yogaImg from "./assets/yoga.jpeg";
import nutritionImg from "./assets/nutrition.jpeg";
import fitnessImg from "./assets/fitness.jpeg";
import sleepImg from "./assets/sleep.jpeg";
import badgeIcon from "./assets/logo.png";
import why1 from "./assets/why1.jpg";
import user1 from "./assets/user1.jpeg";
import user2 from "./assets/user2.jpeg";
import user3 from "./assets/user3.jpeg";
import { Link } from "react-router-dom";
import Header from "./Header";

function Hero() {
  return (
    <section className="w-full min-h-[70vh] relative overflow-hidden flex flex-col items-center justify-center py-36 px-4 text-center">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={homeheroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-8 drop-shadow">Empower Your Wellness Journey</h1>
        <p className="text-2xl md:text-3xl text-white mb-12 max-w-2xl mx-auto">Discover holistic health, expert guidance, and a supportive community. Your path to a healthier, happier you starts here.</p>
        <button className="bg-[#26A0A2] text-white font-semibold px-12 py-5 rounded-full shadow hover:bg-charcoal transition text-xl">Start Your Journey</button>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="w-full py-12 px-2 md:px-0 bg-white">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row bg-white">
        {/* Left: Vision (solid teal bg, white text) */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-12 text-left" style={{ background: '#16b39b' }}>
          {/* Remove the SVG here */}
          <div className="z-10 relative">
            <div className="flex items-center mb-4">
              {/* Eye Icon */}
              <svg className="w-8 h-8 mr-3 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z" /><circle cx="12" cy="12" r="3.5" fill="white" stroke="#20c997" strokeWidth="2" /></svg>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide">OUR VISION</h2>
            </div>
            <p className="text-white text-lg md:text-xl mb-8 max-w-md">Empowering individuals to achieve holistic wellness and a balanced lifestyle through innovation, compassion, and community support.</p>
          </div>
        </div>
        {/* Right: Mission (white bg, teal text) */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 md:p-12 bg-white">
          <div className="flex items-center mb-4">
            {/* Target Icon */}
            <svg className="w-8 h-8 mr-3 text-[#0f766e]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#20c997" strokeWidth="2" /><circle cx="12" cy="12" r="5" stroke="#0f766e" strokeWidth="2" /><path d="M12 7v5l3 3" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" /></svg>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0f766e] tracking-wide">OUR MISSION</h2>
          </div>
          <p className="text-[#0f766e] text-lg md:text-xl mb-8 max-w-md">To provide expert guidance, personalized plans, and a supportive community, helping you achieve your health and wellness goals with confidence and care.</p>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const services = [
    {
      img: yogaImg,
      title: "Yoga & Meditation",
      tagline: "Balance mind and body with guided sessions.",
      details: "Join our expert-led yoga and meditation classes to improve flexibility, reduce stress, and enhance your overall well-being. Suitable for all levels."
    },
    {
      img: nutritionImg,
      title: "Diet & Nutrition",
      tagline: "Personalized nutrition plans for your goals.",
      details: "Get customized meal plans and nutrition advice from certified dietitians. Achieve your health goals with science-backed guidance."
    },
    {
      img: fitnessImg,
      title: "Fitness Programs",
      tagline: "Modern fitness routines for all levels.",
      details: "Access a variety of fitness programs, from strength training to cardio, designed to keep you motivated and fit."
    },
    {
      img: sleepImg,
      title: "Sleep Therapy",
      tagline: "Improve sleep quality with expert help.",
      details: "Overcome sleep issues with our therapy sessions and expert tips for restful, rejuvenating sleep every night."
    }
  ];
  return (
    <section className="w-full py-16 px-4" style={{ background: 'linear-gradient(135deg,#a0f0ed,#1abc9c)' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">Our Top Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="relative group w-full h-[360px] bg-white rounded-[10px] overflow-hidden shadow-md transition-transform hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col"
            >
              {/* Image always visible */}
              <div className="w-full h-[250px] bg-cover bg-center" style={{ backgroundImage: `url(${s.img})` }} />
              {/* Title (default) in white area */}
              <div className="flex-1 w-full min-h-[60px] flex items-center justify-center">
                <h3 className="text-lg font-bold text-[#26A0A2] uppercase tracking-wide text-center mt-2 group-hover:opacity-0 transition-opacity duration-300">{s.title}</h3>
              </div>
              {/* Overlay: covers entire card on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <h3 className="text-xl md:text-2xl font-bold text-[#26A0A2] uppercase tracking-wide text-center mb-2">{s.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 mb-2 text-center font-semibold">{s.tagline}</p>
                <p className="text-base md:text-lg text-gray-700 mb-2 text-center">{s.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Headline */}
        <div className="text-center mb-8">
          <span
            className="inline-block px-4 py-1 rounded-full font-extrabold text-2xl md:text-3xl mb-4 bg-clip-text text-transparent"
            style={{ background: 'linear-gradient(135deg, #20c997, #0f766e)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Empowering Your Success with Wellness Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our certified experts, personalized plans, and supportive community help you achieve your health and wellness goals with confidence and care.</p>
        </div>
        {/* Main content grid: only one image and progress bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[300px]">
          {/* Left: Single Image */}
          <div className="flex flex-col justify-center h-full">
            <img src={why1} alt="Wellness" className="rounded-xl w-full h-full min-h-[300px] object-cover" />
          </div>
          {/* Right: Progress Bars with heading and intro text */}
          <div className="flex flex-col gap-6 justify-center h-full min-h-[300px]">
            <h3 className="text-xl md:text-2xl font-bold text-[#26A0A2] m-0 p-0">Our Unique Approach</h3>
            <p className="text-base md:text-lg text-gray-700 m-0 p-0">
              We believe in a holistic approach to wellness, combining expert guidance, innovative programs, and a caring community. Our personalized plans and proven support systems ensure you get the results you deserve.
            </p>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold">Personalized Plans</span>
                <span className="text-[#26A0A2] font-bold">95%</span>
              </div>
              <div className="w-full h-3 bg-[#C9FFE9] rounded-full">
                <div className="h-3 bg-[#26A0A2] rounded-full" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold">Community & Innovation</span>
                <span className="text-[#26A0A2] font-bold">90%</span>
              </div>
              <div className="w-full h-3 bg-[#C9FFE9] rounded-full">
                <div className="h-3 bg-[#26A0A2] rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-black font-semibold">Support & Results</span>
                <span className="text-[#26A0A2] font-bold">98%</span>
              </div>
              <div className="w-full h-3 bg-[#C9FFE9] rounded-full">
                <div className="h-3 bg-[#26A0A2] rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
          </div>
        </div>
        {/* Stats at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          {[
            { value: '3k+', label: 'Happy Clients' },
            { value: '200+', label: 'Expert Team' },
            { value: '350+', label: 'Wellness Programs' },
            { value: '16+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div
              key={i}
              className="relative transition-colors duration-300 rounded-xl p-4 hover:bg-[#26A0A2] group cursor-pointer overflow-hidden shadow-md hover:shadow-xl transform transition-transform hover:-translate-y-2"
            >
              {/* Hologram animated gradient overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500 z-10"
                style={{
                  background: 'linear-gradient(120deg,rgba(255,255,255,0.2) 0%,rgba(32,201,151,0.15) 40%,rgba(15,118,110,0.15) 100%)',
                  mixBlendMode: 'lighten',
                  animation: 'holoMove 2s linear infinite',
                }}
              />
              <div className="relative z-20">
                <div className="text-2xl font-bold text-[#26A0A2] group-hover:text-white transition-colors duration-300">{stat.value}</div>
                <div className="text-gray-600 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        {/* Hologram keyframes */}
        <style>{`
          @keyframes holoMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
        `}</style>
      </div>
    </section>
  );
}

function QuickTestimonialsPreview() {
  const testimonials = [
    {
      quote: "This platform has transformed my wellness journey. The personalized plans and community support are unmatched!",
      name: "Ava Patel",
      role: "Yoga Enthusiast",
      photo: user1,
    },
    {
      quote: "I love the expert guidance and the easy-to-follow fitness programs. I feel healthier and more confident than ever!",
      name: "Liam Chen",
      role: "Fitness Member",
      photo: user2,
    },
    {
      quote: "The nutrition advice and sleep therapy tips have made a huge difference in my daily life. Highly recommended!",
      name: "Sophia Garcia",
      role: "Wellness Seeker",
      photo: user3,
    },
  ];
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[index];
  return (
    <section className="w-full py-16 px-4 flex flex-col items-center justify-center" style={{ background: '#2ad2bb' }}>
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">What Our Users Say</h2>
      <div className="max-w-3xl w-full mx-auto bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center relative">
        {/* Arrows */}
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors" aria-label="Previous testimonial">
          &#60;
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#26A0A2] hover:text-[#0f766e] text-3xl p-2 rounded-full transition-colors" aria-label="Next testimonial">
          &#62;
        </button>
        {/* Quote */}
        <blockquote className="text-2xl md:text-3xl font-serif text-center text-[#222836] mb-8 leading-relaxed">
          “{t.quote}”
        </blockquote>
        {/* User info */}
        <div className="flex items-center gap-4 mt-2">
          <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#26A0A2]" />
          <div className="text-left">
            <div className="text-[#26A0A2] font-bold uppercase text-sm tracking-wide">{t.name}</div>
            <div className="text-gray-500 text-xs italic">{t.role}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToActionBanner() {
  return (
    <section className="w-full py-16 px-2 md:px-0 flex justify-center items-center bg-white relative overflow-hidden">
      {/* Right: Radial Gradient Circles (teal shades, no white) */}
      <div className="absolute right-0 top-0 bottom-0 h-full w-2/5 hidden md:block z-0 flex items-center justify-end pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="300" cy="150" r="120" fill="#16b39b" fillOpacity="0.18" />
          <circle cx="300" cy="150" r="90" fill="#26A0A2" fillOpacity="0.32" />
          <circle cx="300" cy="150" r="60" fill="#2ad2bb" fillOpacity="0.5" />
        </svg>
      </div>
      <div className="max-w-5xl w-full relative rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-stretch justify-between px-10 py-12 bg-transparent z-10">
        {/* Left: Text and Buttons */}
        <div className="flex-1 flex flex-col justify-center text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#26A0A2] mb-2">Take the first step towards better health.</h2>
          <p className="text-[#0f766e] text-base md:text-lg mb-6">Join our wellness community and start your journey today!</p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-black text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-[#26A0A2]/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105">Join Now</button>
            <button className="bg-[#26A0A2] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-2xl focus:ring-4 focus:ring-[#26A0A2]/40 transform transition-all duration-200 hover:-translate-y-1 hover:scale-105">Book a Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
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
    <div className="min-h-screen bg-[#f6fffd]">
      <Header />
      <Hero />
      <MissionVisionSection />
      <ServicesOverview />
      <WhyChooseUs />
      <QuickTestimonialsPreview />
      <CallToActionBanner />
    </div>
  );
}
