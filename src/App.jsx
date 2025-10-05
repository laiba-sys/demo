import React, { useState, useEffect } from "react";
import "/src/App.css";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";


export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const sliderData = [
  {
    image: "https://www.shutterstock.com/image-photo/content-male-construction-architect-formal-600nw-1999193561.jpg",  // replace with your path or url
    category: "RESIDENTIAL",
    title: "Art Deco Revival",
    link: "#",
  },
  {
    image: "https://www.shutterstock.com/image-photo/smiling-confident-mature-businessman-leader-600nw-2014536944.jpg", // replace with your path or url
    category: "SINGLE HOME",
    title: "Nordic Minimalist Loft",
    link: "#",
  },
  {
    image: "https://media.licdn.com/dms/image/v2/C4E12AQGO5k-e0_yjbQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1565907906082?e=2147483647&v=beta&t=zn-sWNCMgICeYx62NlUk96PpdUgXwbYVmqZFXCpy50E",  // replace with your path or url
    category: "RESIDENTIAL",
    title: "Art Deco Revival",
    link: "#",
  },
  {
    image: "https://www.mikencube.co.uk/wp-content/uploads/2022/01/ppc-for-architects.jpg", // replace with your path or url
    category: "SINGLE HOME",
    title: "Nordic Minimalist Loft",
    link: "#",
  },
  {
    image: "https://hoa.org.uk/wp-content/smush-webp/2022/10/questions-to-ask-architect-352x240.jpg.webp",  // replace with your path or url
    category: "RESIDENTIAL",
    title: "Art Deco Revival",
    link: "#",
  },
  {
    image: "https://www.onlinedegree.com/wp-content/uploads/2016/11/architect.jpg", // replace with your path or url
    category: "SINGLE HOME",
    title: "Nordic Minimalist Loft",
    link: "#",
  },
  {
    image: "https://fairygodboss.com/_next/image?url=https%3A%2F%2Fd207ibygpg2z1x.cloudfront.net%2Fimage%2Fupload%2Fdpr_1%2Cq_auto%2Cc_scale%2Cf_webp%2Cw_669%2Farticles_upload%2Fmain%2Ffadv3ugx8dwy2arbyfwn%3Ftemp%3D1&w=3840&q=75",  // replace with your path or url
    category: "RESIDENTIAL",
    title: "Art Deco Revival",
    link: "#",
  },
  {
    image: "https://www.re-thinkingthefuture.com/wp-content/uploads/2024/01/A11854-Diverse-Career-Paths-for-Architects-1.jpg?w=999", // replace with your path or url
    category: "SINGLE HOME",
    title: "Nordic Minimalist Loft",
    link: "#",
  },
  // Add more items if needed
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, centerMode: false }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: false }
      }
    ]
  };
   const stats = [
    {
      number: 2013,
      suffix: "",
      title: "Years Experience",
      description: "Improving homes with expert craftsmanship for years",
    },
    {
      number: 190,
      suffix: "+",
      title: "Projects Completed",
      description: "Over 250 successful projects delivered with quality and care",
    },
    {
      number: 260,
      suffix: "+",
      title: "Skilled Tradespeople",
      description: "Our team of 30 experts ensures top-quality results",
    },
    {
      number: 328,
      suffix: "+",
      title: "Client Satisfaction",
      description: "All of our clients are satisfied with our work and service",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // only once
    threshold: 0.3,     // start animating when 30% visible
  });
  const slides = [
    {
      image:
        "https://hips.hearstapps.com/hmg-prod/images/edc080122nahem-makoid-009new-1652459060.jpg?crop=1xw:1xh;center,top",
      title: "Designing Dreams Into Reality",
      text: "We transform ideas into modern, elegant, and timeless architectural masterpieces.",
    },
    {
      image:
        "https://static.dezeen.com/uploads/2016/11/the-middle-house-hu-mn-architecture-residential-california-usa_dezeen_hero-852x479.jpg",
      title: "Modern Architecture for Modern Living",
      text: "Combining creativity and functionality to build spaces that inspire comfort and style.",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:2000/1*FV14UFz2fV_wS_X3hZgkog.jpeg",
      title: "Crafting Beautiful Interiors",
      text: "Our design team brings precision, emotion, and innovation into every project we create.",
    },
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cursor movement
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Hover detection (excluding arrow button)
  useEffect(() => {
    const hoverTargets = document.querySelectorAll(
      "a, button:not(.no-cursor-hover), li, h1, h2, h3, h4, p, span, .hover-target"
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
    <>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* 🟠 Custom Orange Cursor */}
        <motion.div
          className="fixed top-0 left-0 rounded-full bg-orange-500 pointer-events-none mix-blend-difference"
          animate={{
            x: position.x - (hovering ? 35 : 6),
            y: position.y - (hovering ? 35 : 6),
            width: hovering ? 70 : 12,
            height: hovering ? 70 : 12,
            opacity: hovering ? 0.95 : 0.8,
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
            mass: 0.6,
          }}
          style={{
            boxShadow: hovering
              ? "0 0 70px 30px rgba(251,146,60,0.6)"
              : "0 0 25px 10px rgba(251,146,60,0.4)",
            zIndex: 9999,
          }}
        />

        {/* Navbar */}
        <nav
          className={`w-full py-5 fixed top-0 left-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-black/70 backdrop-blur-md shadow-md"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center space-x-10">
              <div className="text-3xl font-bold text-white tracking-wide hover-target">
                Antra<span className="text-orange-400">.</span>
              </div>

              <ul className="hidden md:flex space-x-8 text-white font-medium">
                {["Home", "About", "Projects", "Services", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="relative cursor-pointer hover:text-orange-400 transition hover-target"
                    >
                      {item}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-400 transition-all duration-400 hover:w-full"></span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="hidden md:flex items-center space-x-6 text-white font-medium">
              <p className="text-sm hover-target">
                Call us on:{" "}
                <span className="font-semibold text-orange-400 hover-target">
                  +92 300 1234567
                </span>
              </p>
              <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold transition shadow-md hover-target">
                Register
              </button>
            </div>

            <button className="md:hidden text-white hover-target">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        <header className="relative w-full h-screen overflow-hidden">
          <AnimatePresence mode="sync">
            {slides.map((slide, index) =>
              index === current ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 1.08, y: 80 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.08, y: -80 }}
                  transition={{
                    duration: 2,
                    ease: [0.45, 0, 0.2, 1],
                  }}
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.9)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

                  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
                    <motion.h1
                      key={slide.title}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.5, ease: [0.45, 0, 0.2, 1] }}
                      className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg hover-target"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      key={slide.text}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 1.5,
                        ease: [0.45, 0, 0.2, 1],
                      }}
                      className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto hover-target"
                    >
                      {slide.text}
                    </motion.p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="px-10 py-3 bg-orange-500 rounded-full font-semibold shadow-xl hover:bg-orange-600 transition hover-target"
                    >
                      Explore Projects
                    </motion.button>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-400 ease-out ${
                  index === current ? "bg-orange-500 scale-125" : "bg-white/50"
                }`}
              ></button>
            ))}
          </div>
        </header>

        {/* WHO WE ARE SECTION */}
        {/* ...remaining section code stays exactly the same ... */}

         <section className="relative bg-gray-50 py-24 overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 mb-6 text-sm font-semibold text-gray-800 border border-gray-300 rounded-full hover-target"
          >
            WHO WE ARE
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 hover-target"
          >
            Experience{" "}
            <span className="text-orange-500 hover-target">
              The Art Of Interior
            </span>{" "}
            Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-gray-600 max-w-2xl mx-auto mb-20 leading-relaxed text-lg hover-target"
          >
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects
            crafted with precision, creativity, and a timeless touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Architectural Design",
                text: "From modern masterpieces to classic elegance — we craft structures that speak innovation and style.",
                icon: "🏛️",
              },
              {
                title: "Interior Design & Planning",
                text: "Breathe life into your space with designs that blend comfort, color, and creativity.",
                icon: "🎨",
              },
              {
                title: "Consulting Services",
                text: "Our experts guide your ideas from dream to design, ensuring excellence at every step.",
                icon: "💡",
              },
              {
                title: "Project Management",
                text: "From concept to completion — we manage it all, delivering results that exceed expectations.",
                icon: "📋",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer hover-target"
              >
                <div className="text-4xl mb-4 text-orange-500 group-hover:scale-125 transition-transform duration-300 hover-target">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover-target">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed hover-target">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll to Top Button (excluded from hover) */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{width:"50px"}}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 no-cursor-hover"
        >
          ↑
        </button>
      </section>
      <section
      id="services"
      className="relative w-full py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-3d-illustration-of-architectural-sketch-for-a-residential-building-image_3797105.jpg')",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side (Text) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-200 leading-relaxed mb-8 text-lg">
            We provide innovative interior solutions that blend beauty and
            functionality. Our experts craft unique designs that reflect your
            personality and enhance your living experience.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 bg-orange-500 rounded-full font-semibold shadow-lg hover:bg-orange-600 transition"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Right Side (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="https://www.maramani.com/cdn/shop/products/ContemporaryHouseDesign-ID26706-Perspective_2.jpg?crop=center&height=1200&v=1664772156&width=1200"
            alt="Modern Interior"
            className="rounded-3xl border-4 border-white/60 shadow-2xl w-[85%] md:w-[450px] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
     <section className="bg-white py-12" ref={ref}>
  <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {stats.map((stat, index) => (
      <div key={index} className="text-left">
        <h2 className="text-4xl font-bold text-gray-900">
          {inView ? (
            <CountUp
              start={0}
              end={stat.number}
              duration={2}
              suffix={stat.suffix}
            />
          ) : (
            "0"
          )}
        </h2>
        <div className="h-px w-16 bg-gray-200 my-4"></div>
        <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{stat.description}</p>
      </div>
    ))}
  </div>
</section>


<section className="relative">
  {/* Background image with white overlay */}
  <div
    className="absolute inset-0 bg-white opacity-50 z-0"
    style={{
      backgroundImage: `url('/mnt/data/1b05ca28-abbb-44dd-9631-6dac9939d8b0.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-4xl font-bold text-center mb-4">
      Creative <span className="text-[#b8904c]">Projects That Define</span> Our Style
    </h2>
    <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
      Our portfolio showcases a diverse range of projects, from beautifully crafted residential spaces functional and stylish commercial interiors
    </p>

    <Slider {...settings}>
      {sliderData.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="px-3 outline-none focus:outline-none"
        >
          <div className="rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-white">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-t-2xl"
              />
              <span className="absolute top-3 left-3 bg-white bg-opacity-30 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {item.category}
              </span>
            </div>
            <h3 className="text-lg font-bold p-4 text-gray-900">{item.title}</h3>
          </div>
        </a>
      ))}
    </Slider>
  </div>
</section>

<footer className="text-gray-200">
      {/* 🔹 Top Section with background + overlay + footer content */}
      <section
        className="relative py-16 px-6 md:px-16"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Footer Content */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-12">
          {/* Logo & Address */}
          <div>
            <div className="flex items-center mb-4">
              <div className="text-yellow-500 text-3xl font-bold">⌘</div>
              <span className="text-3xl font-bold ml-2 text-white">antra</span>
            </div>
            <p className="font-semibold leading-snug text-gray-300">
              We Transform Your Vision Into Beautifully Crafted Spaces.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              5609 E Sprague Ave, Spokane Valley, WA 99212, USA
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">About Us</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Services", "Careers", "Our Team", "Blog", "Contact Us"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="font-bold mb-4 text-white text-lg">Our Projects</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Partners",
                "Partners Program",
                "Affiliate Program",
                "Terms & Conditions",
                "Support Center",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-500 cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-yellow-500 text-lg font-semibold mb-2">
              +(084) 456-0789
            </p>
            <p className="text-white text-xl font-bold mb-4">
              support@example.com
            </p>

            <div className="flex space-x-4 text-gray-300 mb-6">
              <FaFacebookF className="hover:text-yellow-500 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
              <FaInstagram className="hover:text-yellow-500 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
              <FaYoutube className="hover:text-yellow-500 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
              <FaTwitter className="hover:text-yellow-500 cursor-pointer transition-transform duration-300 transform hover:scale-110" />
            </div>

            <div>
              <p className="text-white font-semibold mb-2">
                Subscribe to our Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-md text-black outline-none"
                />
                <button className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-gray-400">
          <p>
            © Copyright 2025{" "}
            <span className="text-yellow-500 font-semibold">Antra.</span> All
            rights reserved.
          </p>
          <p className="mt-2 md:mt-0">Designed with ❤️ by Antra Team</p>
        </div>
      </section>

      {/* 🔸 Bottom Section with large ANTRA text */}
      <div className="bg-black py-10 flex justify-center items-center">
        <h1 className="text-[6rem] md:text-[10rem] font-extrabold text-yellow-500 opacity-90 tracking-widest drop-shadow-[0_0_15px_rgba(255,215,0,0.6)]">
          ANTRA .
        </h1>
      </div>
    </footer>


      </div>
    </>
  );
}
