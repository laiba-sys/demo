import React, { useState, useEffect } from "react";
import "/src/App.css";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    projects: false,
    pages: false,
    blog: false,
    contact: false,
  });
  const [current, setCurrent] = useState(0);

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const sliderData = [
    { image: "https://www.shutterstock.com/image-photo/content-male-construction-architect-formal-600nw-1999193561.jpg", category: "RESIDENTIAL", title: "Art Deco Revival", link: "#" },
    { image: "https://www.shutterstock.com/image-photo/smiling-confident-mature-businessman-leader-600nw-2014536944.jpg", category: "SINGLE HOME", title: "Nordic Minimalist Loft", link: "#" },
    { image: "https://media.licdn.com/dms/image/v2/C4E12AQGO5k-e0_yjbQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1565907906082?e=2147483647&v=beta&t=zn-sWNCMgICeYx62NlUk96PpdUgXwbYVmqZFXCpy50E", category: "RESIDENTIAL", title: "Art Deco Revival", link: "#" },
    { image: "https://www.mikencube.co.uk/wp-content/uploads/2022/01/ppc-for-architects.jpg", category: "SINGLE HOME", title: "Nordic Minimalist Loft", link: "#" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: false } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: false } },
    ],
  };

  const stats = [
    { number: 2013, suffix: "", title: "Years Experience", description: "Improving homes with expert craftsmanship for years" },
    { number: 190, suffix: "+", title: "Projects Completed", description: "Over 250 successful projects delivered with quality and care" },
    { number: 260, suffix: "+", title: "Skilled Tradespeople", description: "Our team of 30 experts ensures top-quality results" },
    { number: 328, suffix: "+", title: "Client Satisfaction", description: "All of our clients are satisfied with our work and service" },
  ];

  const slides = [
    { image: "https://hips.hearstapps.com/hmg-prod/images/edc080122nahem-makoid-009new-1652459060.jpg?crop=1xw:1xh;center,top", title: "Designing Dreams Into Reality", text: "We transform ideas into modern, elegant, and timeless architectural masterpieces." },
    { image: "https://static.dezeen.com/uploads/2016/11/the-middle-house-hu-mn-architecture-residential-california-usa_dezeen_hero-852x479.jpg", title: "Modern Architecture for Modern Living", text: "Combining creativity and functionality to build spaces that inspire comfort and style." },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Custom cursor
  useEffect(() => {
    const moveCursor = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll(
      "a, button, li, h1, h2, h3, h4, p, span, .hover-target:not(.no-cursor-hover)"
    );

    const handleEnter = () => setHovering(true);
    const handleLeave = () => setHovering(false);

    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-orange-500 pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - (hovering ? 35 : 6),
          y: position.y - (hovering ? 35 : 6),
          width: hovering ? 70 : 12,
          height: hovering ? 70 : 12,
          opacity: hovering ? 0.95 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 120, damping: 25, mass: 0.6 }}
        style={{
          boxShadow: hovering ? "0 0 70px 30px rgba(251,146,60,0.6)" : "0 0 25px 10px rgba(251,146,60,0.4)",
          zIndex: 9999,
        }}
      />

      {/* Navbar */}
      <nav className="w-full py-5 bg-transparent absolute top-0 left-0 z-30">
        <div className="w-full px-6 lg:px-8 flex justify-between items-center">
          {/* Logo + Desktop Menu */}
          <div className="flex items-center space-x-10">
            <div className="text-3xl font-bold text-white tracking-wide no-cursor-hover">
              <img
                className="w-30"
                src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/logo.svg"
                alt=""
              />
            </div>
            <ul className="hidden md:flex space-x-8 text-white font-medium">
              {["Home", "Services", "Project", "Pages", "Blog"].map((menu, index) => (
                <li key={index} className="relative group cursor-pointer no-cursor-hover">
                  <span
                    className={`inline-flex items-center gap-1 pb-0.5 border-b-2 transition-all ${
                      menu === "Home"
                        ? "border-yellow-500"
                        : "border-transparent group-hover:border-yellow-500"
                    }`}
                    style={{ borderBottomWidth: '1px' }}
                  >
                    {menu}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6 text-white font-medium">
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-3xl text-yellow-500" />
              <div className="flex flex-col">
                <p className="text-base font-semibold">Call Us</p>
                <span className="text-sm font-semibold text-yellow-500">(+480) 123 678 900</span>
              </div>
            </div>
            <div>
              <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold text-lg shadow-md transition">
                Get A Quote
              </button>
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-900 rounded-full cursor-pointer">
              <FaSearch className="text-white text-lg" />
            </div>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white no-cursor-hover"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden bg-black/90 text-white py-4 space-y-2 px-6">
            {["services", "projects", "pages", "blog", "contact"].map((menu) => (
              <li key={menu} className="relative">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleDropdown(menu)}
                >
                  <span className="capitalize">{menu}</span>
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
                {dropdownOpen[menu] && (
                  <ul className="mt-2 pl-4 space-y-1">
                    {menu === "services" && ["Web Design", "App Development", "SEO Services"].map((p, i) => <li key={i}>{p}</li>)}
                    {menu === "projects" && ["Project A", "Project B", "Project C"].map((p, i) => <li key={i}>{p}</li>)}
                    {menu === "pages" && ["About Us", "Team", "Services Page"].map((p, i) => <li key={i}>{p}</li>)}
                    {menu === "blog" && ["Blog Grid", "Blog Single"].map((p, i) => <li key={i}>{p}</li>)}
                    {menu === "contact" && ["Contact Form", "Location"].map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Header Slider */}
      <header className="relative w-full h-screen overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ y: -window.innerHeight }}
            animate={{ y: 0 }}
            exit={{ y: window.innerHeight }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 20,
            }}
          >
            <motion.div
              initial={{ y: -window.innerHeight, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: window.innerHeight, opacity: 0 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-black/50"
            ></motion.div>

            <div className="relative z-20 flex flex-col justify-center items-start h-full text-left text-white px-10 md:px-20">
              <motion.h1
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight drop-shadow-lg"
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                className="text-base md:text-xl mb-10 text-gray-200 max-w-xl"
              >
                {slides[current].text}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Downward Arrow */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer">
          <button
            onClick={() => document.getElementById("next-section")?.scrollIntoView({ behavior: "smooth" })}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl font-bold transition-transform hover:scale-110"
            style={{ color: "#CAA05C" }}
          >
            ↓
          </button>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white py-12" ref={ref} id="next-section">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <h2 className="text-6xl font-bold text-gray-900">
                {inView ? <CountUp start={0} end={stat.number} duration={2} suffix={stat.suffix} /> : "0"}
              </h2>
              <div className="h-px w-16 bg-gray-200 my-4"></div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
              <p className="mt-5 text-gray-600 text-lg">{stat.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ width: "50px", backgroundColor: "#9F9FA4" }}
          className="fixed bottom-6 right-6 font-bold text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 no-cursor-hover"
        >
          ↑
        </button>
      </section>

      {/* Projects Slider */}
      <section className="relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Creative <span className="text-[#b8904c]">Projects That Define</span> Our Style
          </h2>
          <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
            We specialize in creating spaces that reflect your personality and lifestyle while staying timeless and elegant.
          </p>
          <Slider {...settings}>
            {sliderData.map((slide, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover-target">
                  <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover" />
                  <div className="p-4">
                    <span className="text-sm text-gray-500">{slide.category}</span>
                    <h3 className="text-lg font-semibold mt-2">{slide.title}</h3>
                    <a href={slide.link} className="text-orange-500 mt-2 inline-block hover:underline no-cursor-hover">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}
