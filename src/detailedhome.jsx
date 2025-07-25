import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

// Assets from detailed folder
import heroImg from './assets/detailed/yoga.jpg';
import coachImg from './assets/detailed/Karan Mehta.png';
import service1Img from './assets/detailed/Fitness Programs.jpg';
import service2Img from './assets/detailed/Diet & Nutrition.jpg';
import service3Img from './assets/detailed/Yoga & Meditation.webp';
import expert1 from './assets/detailed/Priya Sharma.jpeg.jpg';
import expert2 from './assets/detailed/Dr. Arjun Rao.jpeg.jpg';
import expert3 from './assets/detailed/Lina Gomez.avif';
import eventImg from './assets/detailed/Sleep Therapy.jpg';
import event1Img from './assets/detailed/yoga.jpg';
import event2Img from './assets/detailed/Diet & Nutrition.jpg';
import event3Img from './assets/detailed/Mental Wellness.jpeg.jpg';
import Header from "./Header";

const DetailedHome = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    { title: "Personal Training", desc: "Customized sessions to achieve your fitness goals.", img: service1Img },
    { title: "Nutrition Guidance", desc: "Expert advice for a healthier you.", img: service2Img },
    { title: "Group Workouts", desc: "Fun, high-energy group classes for all levels.", img: service3Img },
  ];

  const experts = [
    { name: "Priya Sharma", title: "Certified Trainer", img: expert1 },
    { name: "Dr. Arjun Rao", title: "Nutritionist", img: expert2 },
    { name: "Lina Gomez", title: "Yoga Coach", img: expert3 },
  ];

  const faqs = [
    { q: "How do I enroll in a program?", a: "Click 'Get Started' and choose your preferred program." },
    { q: "Are your coaches certified?", a: "Yes, all our experts are certified." },
    { q: "Can I cancel anytime?", a: "Absolutely! You control your membership." },
    { q: "Do you offer trial classes?", a: "Yes, we offer free trial classes." },
    { q: "Can I switch programs?", a: "Yes, contact support or use your dashboard." },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const instructorAvatars = {
    'Priya Sharma': expert1,
    'Dr. Arjun Rao': expert2,
    'Lina Gomez': expert3,
    'Karan Mehta': coachImg,
  };
  const [eventIndex, setEventIndex] = useState(0);
  const events = [
    // First set of cards (from second image)
    {
      img: event1Img,
      title: 'Sunrise Yoga & Meditation',
      time: 'Saturday, 7:00 AM',
      instructor: 'Priya Sharma',
    },
    {
      img: event2Img,
      title: 'Healthy Diet & Nutrition Q&A',
      time: 'Sunday, 11:00 AM',
      instructor: 'Dr. Arjun Rao',
    },
    {
      img: event3Img,
      title: 'Mindfulness for Mental Wellness',
      time: 'Monday, 6:00 PM',
      instructor: 'Priya Sharma',
    },
    // Second set of cards (from first image)
    {
      img: service1Img, // Fitness image
      title: 'Total Body Fitness Program',
      time: 'Tuesday, 5:30 PM',
      instructor: 'Karan Mehta',
    },
    {
      img: eventImg, // Sleep Therapy image
      title: 'Sleep Therapy Workshop',
      time: 'Wednesday, 8:00 PM',
      instructor: 'Dr. Arjun Rao',
    },
    {
      img: coachImg, // Lifestyle Coaching image
      title: 'Lifestyle Coaching Session',
      time: 'Friday, 4:00 PM',
      instructor: 'Karan Mehta',
    },
  ];
  // Carousel logic
  const visibleEvents = events.slice(eventIndex, eventIndex + 3);
  const canGoLeft = eventIndex > 0;
  const canGoRight = eventIndex + 3 < events.length;

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
      {/* Hero Section - Redesigned */}
      <section className="w-full min-h-[60vh] flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-16 bg-gradient-to-br from-[#26A0A2] to-[#20c997]">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform <span className="italic font-normal">Your Body</span> and <br /> <span className="block mt-2">Mind</span>
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-lg">
            Join us in transforming your body and mind through our comprehensive yoga and fitness programs.
          </p>
          <button className="bg-white text-[#26A0A2] font-semibold px-10 py-3 rounded-full shadow hover:bg-gray-100 transition text-lg">
            Join Member
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-end items-center mt-10 md:mt-0 md:ml-10">
          <img src={heroImg} alt="Yoga Meditation" className="w-full max-w-md rounded-2xl shadow-lg object-cover" />
        </div>
      </section>

      {/* Core Services Section */}
      <section className="w-full bg-[#f7f9fa] py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-[#17423b] mb-12">Our Core Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Yoga & Meditation',
              desc: 'Find balance and peace with guided yoga and meditation sessions.',
            },
            {
              title: 'Diet & Nutrition',
              desc: 'Personalized meal plans and nutrition advice for a healthier you.',
            },
            {
              title: 'Mental Wellness',
              desc: 'Mindfulness and stress management support for mental clarity.',
            },
            {
              title: 'Fitness Programs',
              desc: 'Custom fitness routines to help you reach your physical goals.',
            },
            {
              title: 'Sleep Therapy',
              desc: 'Improve your sleep quality with expert-backed therapy and tips.',
            },
            {
              title: 'Lifestyle Coaching',
              desc: 'One-on-one coaching to empower healthy lifestyle changes.',
            },
          ].map((service, idx) => (
            <div
              key={service.title}
              className="relative bg-white rounded-2xl shadow-md p-8 flex flex-col items-start transition duration-300 hover:bg-[#26A0A2] group cursor-pointer min-h-[200px]"
            >
              {/* Number badge */}
              <div className="absolute top-0 right-0 m-4 w-8 h-8 rounded-br-xl rounded-tl-xl bg-[#26A0A2] text-white font-bold flex items-center justify-center text-base group-hover:bg-white group-hover:text-[#26A0A2] transition duration-300">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-[#222836] group-hover:text-white transition duration-300">{service.title}</h3>
              <p className="text-lg text-[#13a3c7] group-hover:text-white transition duration-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Experts Section */}
      <section className="w-full bg-[#f7f9fa] py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-[#17423b] mb-12">Our Experts</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Priya Sharma',
              title: 'Certified Yoga Instructor',
              info: 'Priya has 10+ years of experience in yoga and mindfulness, helping hundreds achieve balance and peace.',
              img: expert1,
            },
            {
              name: 'Dr. Arjun Rao',
              title: 'Nutritionist & Wellness Coach',
              info: 'Dr. Rao specializes in holistic nutrition and personalized wellness plans for all ages.',
              img: expert2,
            },
            {
              name: 'Lina Gomez',
              title: 'Fitness & Lifestyle Expert',
              info: 'Lina is passionate about empowering clients with custom fitness routines and healthy habits.',
              img: expert3,
            },
          ].map((expert, idx) => (
            <div
              key={expert.name}
              className="relative bg-white rounded-2xl shadow-md flex flex-col items-center justify-end transition duration-300 group cursor-pointer min-h-[320px] overflow-hidden p-0"
            >
              {/* Expert image as card background */}
              <img src={expert.img} alt={expert.name} className="absolute inset-0 w-full h-full object-cover z-0 transition duration-300 group-hover:opacity-30" />
              {/* Overlay on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#26A0A2] bg-opacity-95 opacity-0 group-hover:opacity-100 transition duration-300 z-20">
                <h3 className="text-xl font-bold text-white mb-2 text-center">{expert.title.split('&')[0].trim()}</h3>
                <p className="text-base text-white mb-4 text-center w-full">{expert.info}</p>
                <div className="bg-white bg-opacity-20 rounded-lg px-4 py-2 mt-2 w-fit mx-auto">
                  <span className="text-white font-semibold text-center">{expert.name}</span>
                </div>
              </div>
              {/* Name pill (visible when not hovered) */}
              <div className="relative z-10 w-full flex justify-center group-hover:opacity-0 transition duration-300 pb-6">
                <div className="bg-white rounded-lg px-6 py-3 shadow text-[#17806d] font-bold text-lg">
                  {expert.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events & Classes Section */}
      <section className="w-full bg-gradient-to-br from-[#26A0A2] to-[#20c997] py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Upcoming Events & Classes</h2>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch mb-8">
            {visibleEvents.map((event, idx) => (
              <div key={event.title} className="bg-white rounded-2xl shadow-md flex flex-col w-full md:w-1/3 max-w-xs overflow-hidden">
                <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#17806d] mb-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{event.time}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <img src={instructorAvatars[event.instructor]} alt={event.instructor} className="w-7 h-7 rounded-full object-cover border-2 border-white shadow" />
                    <span className="text-[#17806d] font-semibold text-sm">{event.instructor}</span>
                  </div>
                  <button className="mt-auto bg-[#26A0A2] text-white font-semibold py-2 rounded-lg shadow hover:bg-[#17806d] transition">Join Now</button>
                </div>
              </div>
            ))}
          </div>
          {/* Carousel Arrows */}
          <div className="flex gap-4 items-center justify-center">
            <button
              onClick={() => canGoLeft && setEventIndex(eventIndex - 1)}
              disabled={!canGoLeft}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#17806d] shadow transition hover:bg-[#e0f7f5] disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
              onClick={() => canGoRight && setEventIndex(eventIndex + 1)}
              disabled={!canGoRight}
              className={`w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#17806d] shadow transition hover:bg-[#e0f7f5] disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="w-full bg-[#f7f9fa] py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#17423b] mb-12">Success Stories</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column (2 wide cards) */}
          <div className="flex flex-col gap-8 md:col-span-2">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
              <div className="text-[#17806d] text-3xl mb-2">“</div>
              <p className="text-[#17423b] text-lg mb-6">Joining this community was the best decision for my health. The expert trainers and personalized programs helped me lose weight and feel more energetic every day!</p>
              <div className="flex items-center gap-3 mt-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aarav" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-[#17806d]">Aarav</div>
                  <div className="text-xs text-gray-500">@aarav.brown</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
              <p className="text-[#17423b] text-lg mb-6">The expert nutritionists created a meal plan that fits my lifestyle. I feel healthier and more balanced than ever. The support here is unmatched!</p>
              <div className="flex items-center gap-3 mt-2">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Victoria Weirro" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="font-bold text-[#17806d]">Victoria Weirro</div>
                  <div className="text-xs text-gray-500">Femmetrain Oslo Co.</div>
                </div>
              </div>
            </div>
          </div>
          {/* Center column (2 tall cards) */}
          <div className="flex flex-col gap-8">
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-between relative">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Hindley Ernshaw" className="w-16 h-16 rounded-full object-cover absolute -top-8 left-1/2 -translate-x-1/2 border-4 border-white shadow" />
              <div className="mt-10 flex flex-col items-center">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <div className="font-bold text-[#17423b] text-lg">Hindley Ernshaw</div>
                <p className="text-[#17423b] text-center mt-2 mb-2">I love the yoga classes and nutrition guidance! The supportive coaches and friendly members make every session enjoyable. Highly recommend for anyone starting their wellness journey.</p>
                <div className="text-xs text-[#17806d]">@hindley.es</div>
              </div>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-between relative">
              <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Lina Gomez" className="w-24 h-24 rounded-2xl object-cover absolute -top-12 left-1/2 -translate-x-1/2 border-4 border-white shadow" />
              <div className="mt-16 flex flex-col items-center">
                <div className="font-bold text-[#17423b] text-lg">Lina Gomez</div>
                <p className="text-[#17806d] text-center mt-2 mb-2">The transformation programs are amazing! I gained confidence, strength, and a new group of friends. The community spirit keeps me motivated.</p>
                <div className="text-xs text-[#17806d]">Member</div>
              </div>
            </div>
          </div>
          {/* Right column (2 tall cards) */}
          <div className="flex flex-col gap-8 md:col-span-1">
            {/* Testimonial 5 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between h-full">
              <div className="font-bold text-[#17806d] text-lg mb-2">Our group sessions are so much fun! We encourage each other, share progress, and celebrate every milestone together. It truly feels like a family.</div>
              <div className="flex items-center gap-2 mt-4 mb-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Aarav" className="w-8 h-8 rounded-full object-cover" />
                <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Hindley Ernshaw" className="w-8 h-8 rounded-full object-cover" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Victoria Weirro" className="w-8 h-8 rounded-full object-cover" />
              </div>
              <div className="text-xs text-[#17806d]">Mina Whitaker</div>
            </div>
            {/* Testimonial 6 */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-between relative">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Basil Nishved" className="w-16 h-16 rounded-full object-cover absolute -top-8 left-1/2 -translate-x-1/2 border-4 border-white shadow" />
              <div className="mt-10 flex flex-col items-center">
                <div className="font-bold text-[#17423b] text-lg">Basil Nishved</div>
                <p className="text-[#17806d] text-center mt-2 mb-2">The wellness challenges and expert advice keep me on track. I have never felt more supported in my fitness journey. Thank you for this amazing platform!</p>
                <div className="text-xs text-[#17806d]">Co-Founder Grandca.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (styled as in image) */}
      <section className="w-full bg-gradient-to-br from-[#26A0A2] to-[#20c997] py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">Frequently Asked Questions</h2>
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6 md:p-8 flex flex-col gap-4">
          {[
            {
              q: 'How do I enroll in a program?',
              a: "Click 'Get Started' and choose your preferred program.",
            },
            {
              q: 'Are your coaches certified?',
              a: 'Yes, all our coaches are certified and experienced professionals.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely! You can cancel your membership at any time.',
            },
            {
              q: 'Do you offer trial classes?',
              a: 'Yes, we offer free trial classes for new members.',
            },
            {
              q: 'Can I switch programs after enrolling?',
              a: 'Yes, you can switch programs at any time from your dashboard.',
            },
          ].map((item, idx) => (
            <div key={idx} className="w-full">
              <button
                className="w-full flex items-center justify-between font-semibold text-left text-black py-4 px-4 rounded-lg focus:outline-none transition bg-[#fafaf9] hover:bg-[#f3f3f3]"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span>{item.q}</span>
                <svg
                  className={`w-6 h-6 ml-2 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-gray-700 animate-fade-in">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailedHome; 