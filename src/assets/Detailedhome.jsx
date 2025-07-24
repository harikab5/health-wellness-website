import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1Img from './assets/service1.jpg';
import expert1 from './assets/expert1.jpg';
import beforeImg from './assets/before.jpg';
import afterImg from './assets/after.jpg';
import eventImg from './assets/event.jpg';

const DetailedHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { title: "Personal Training", desc: "Customized sessions to achieve your fitness goals.", img: service1Img },
    { title: "Nutrition Guidance", desc: "Expert advice for a healthier you.", img: service1Img },
    { title: "Group Workouts", desc: "Fun, high-energy group classes for all levels.", img: service1Img },
  ];

  const experts = [
    { name: "John Doe", title: "Certified Trainer", img: expert1 },
    { name: "Jane Smith", title: "Nutritionist", img: expert1 },
    { name: "Emily Brown", title: "Yoga Coach", img: expert1 },
  ];

  const faqs = [
    { q: "How do I enroll in a program?", a: "Click 'Get Started' and choose your preferred program." },
    { q: "Are your coaches certified?", a: "Yes, all our experts are certified." },
    { q: "Can I cancel anytime?", a: "Absolutely! You control your membership." },
    { q: "Do you offer trial classes?", a: "Yes, we offer free trial classes." },
    { q: "Can I switch programs?", a: "Yes, contact support or use your dashboard." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="font-sans">
      {/* Intro Banner */}
      <section className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-down">Transform Your Health Journey</h1>
        <p className="text-lg max-w-xl mx-auto" data-aos="fade-up">Join thousands who’ve unlocked their potential with our personalized wellness programs.</p>
        <button className="mt-6 bg-white text-teal-600 font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition">Get Started</button>
      </section>

      {/* Services */}
      <section className="py-14 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="zoom-in">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center" data-aos="fade-up">
              <img src={s.img} alt={s.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold text-gray-700">{s.title}</h3>
              <p className="text-gray-500 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experts */}
      <section className="py-14 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">Meet Our Experts</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {experts.map((e, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center w-64" data-aos="fade-up">
              <img src={e.img} alt={e.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h4 className="text-lg font-semibold">{e.name}</h4>
              <p className="text-sm text-gray-500">{e.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Transformations */}
      <section className="py-14 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-down">Client Transformations</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="w-64 text-center" data-aos="fade-up">
            <img src={beforeImg} alt="Before" className="rounded-xl shadow-md mb-2" />
            <p className="text-gray-500">Before</p>
          </div>
          <div className="w-64 text-center" data-aos="fade-up">
            <img src={afterImg} alt="After" className="rounded-xl shadow-md mb-2" />
            <p className="text-gray-500">After</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gradient-to-br from-teal-100 to-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="zoom-in">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className={`p-4 border rounded-md cursor-pointer transition ${openIndex === idx ? 'bg-teal-50' : 'bg-white'}`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              data-aos="fade-up"
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-800">{item.q}</h4>
                <span>{openIndex === idx ? '▲' : '▼'}</span>
              </div>
              {openIndex === idx && <p className="mt-2 text-gray-600">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="py-14 px-4 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800" data-aos="fade-up">Upcoming Events</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <img src={eventImg} alt="Event" className="w-full md:w-1/2 rounded-lg shadow-md" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700">Health & Wellness Retreat</h3>
            <p className="text-gray-600 mt-2">Join us for a full-day retreat focused on mind and body wellness. Register now to reserve your spot!</p>
            <button className="mt-4 bg-teal-500 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition">Register</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedHome;
