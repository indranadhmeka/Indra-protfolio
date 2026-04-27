import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from './emailjs-config';
import profileImg from "./assets/Indraphoto.jpeg";
import robngrabImg from "./assets/robngrab-project.jpg";
import hospitalImg from "./assets/hospital-project.jpg";
import lauratekImg from "./assets/lauratek-project.jpg";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaExternalLinkAlt, 
  FaDownload, 
  FaCode, 
  FaBriefcase, 
  FaFolder, 
  FaUser,
  FaReact,
  FaNodeJs,
  FaPalette,
  FaHtml5,
  FaCss3Alt,
  FaPhoneAlt,
  FaDatabase,
  FaServer,
  FaClipboardList,
  FaFileMedical,
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaLaptopCode,
  FaBook,
  FaFileAlt,
  FaTools,
  FaFire
} from "react-icons/fa";
import {
  SiTypescript,
  SiFramer,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbWorld } from "react-icons/tb";
import { MdOutlineDataObject, MdWorkOutline } from "react-icons/md";

const sectionTitle =
  "text-center font-bold text-[28px] sm:text-[36px] lg:text-[48px] mb-12 lg:mb-16 bg-[linear-gradient(135deg,#667eea_0%,#764ba2_25%,#f093fb_50%,#f5576c_75%,#fda085_100%)] bg-clip-text text-transparent font-[Azonix]";

const skills = [
  {
    name: "React.js",
    icon: <SiReact size={24} className="text-cyan-400" />,
    color: "text-cyan-400"
  },
  {
    name: "React Native",
    icon: <FaReact size={24} className="text-cyan-500" />,
    color: "text-cyan-500"
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs size={24} className="text-white" />,
    color: "text-white"
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={24} className="text-cyan-400" />,
    color: "text-cyan-400"
  }
];

const allSkills = [
  // Frontend Technologies
  { name: "React.js", icon: <SiReact size={20} className="text-cyan-400" />, category: "frontend" },
  { name: "React Native", icon: <FaReact size={20} className="text-cyan-500" />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={20} className="text-white" />, category: "frontend" },
  { name: "JavaScript", icon: <SiJavascript size={20} className="text-yellow-400" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript size={20} className="text-blue-400" />, category: "frontend" },
  { name: "HTML5", icon: <FaHtml5 size={20} className="text-orange-500" />, category: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt size={20} className="text-blue-500" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={20} className="text-cyan-400" />, category: "frontend" },
  
  // Backend & Database
  { name: "Node.js", icon: <FaNodeJs size={20} className="text-green-400" />, category: "backend" },
  { name: "FastAPI", icon: <FaServer size={20} className="text-green-500" />, category: "backend" },
  { name: "PostgreSQL", icon: <FaDatabase size={20} className="text-blue-500" />, category: "backend" },
  { name: "Firebase", icon: <FaFire size={20} className="text-orange-400" />, category: "backend" },
  
  // Tools & Others
  { name: "Git", icon: <FaGithub size={20} className="text-white" />, category: "tools" },
  { name: "Framer Motion", icon: <SiFramer size={20} className="text-fuchsia-400" />, category: "tools" },
  { name: "Bootstrap", icon: <FaPalette size={20} className="text-purple-400" />, category: "tools" },
  
  // Design & Documentation
  { name: "UI/UX Design", icon: <FaPalette size={20} className="text-pink-400" />, category: "design" },
  { name: "Documentation", icon: <FaBook size={20} className="text-purple-400" />, category: "design" },
  { name: "Responsive Design", icon: <FaLaptopCode size={20} className="text-blue-400" />, category: "design" }
];

const experience = [
  {
    role: "Front End Developer",
    company: "SecurXpert Technologies Pvt Ltd.",
    duration: "Jul 2025 - Present",
    description:
      "Develop responsive UI components for large-scale learning platforms using React and Next.js while integrating FastAPI services for seamless data flow.",
    tech: [
      "React",
      "TailwindCSS",
      "Javascript",
      "Git",
      "Html",
      "CSS",
      "BootStrap",
      "Typescript",
      "firebase"
    ],
  },
];

const projects = [
  {
    title: (
              <span className="font-[Azonix] bg-[linear-gradient(135deg,#FF69B4_0%,#FFC67D_50%,#8BC34A_100%)] bg-clip-text text-transparent">
                RobnGrab – Job Portal Platform
              </span>
            ),
    tech: ["Next.js", "FastAPI", "React", "Tailwind CSS", "PostgreSQL"],
    desc: "Developed a modern job portal with dynamic job listings, search interfaces, reusable UI components, and responsive layouts.",
    live: "ongoing work",
    github: "#",
    image: robngrabImg
  },
  {
    title: (
              <span className="font-[Azonix] bg-[linear-gradient(135deg,#667eea_0%,#764ba2_50%,#f093fb_100%)] bg-clip-text text-transparent">
                Hospital Management System Frontend
              </span>
            ),
    tech: ["React.js", "API Integration", "JavaScript", "CSS", "HTML"],
    desc: "Built frontend modules for managing patient records, dashboards, form workflows, and responsive admin interfaces.",
    live: "ongoing work",
    github: "#",
    image: hospitalImg
  },
  {
    title: (
              <span className="font-[Azonix] bg-[linear-gradient(135deg,#fda085_0%,#f5576c_50%,#f093fb_100%)] bg-clip-text text-transparent">
                Lauratek Documentation & UI Support
              </span>
            ),
    tech: ["React.js", "Documentation", "UI/UX", "TypeScript", "Git"],
    desc: "Designed and documented UI components, frontend workflows, APIs, and system usage for better onboarding and clarity.",
    live: "ongoing work",
    github: "#",
    image: lauratekImg
  },
];

const Portfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'mekaindranadh@gmail.com'
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setFormStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top_left,#111827,#000000_45%,#020617_100%)] text-white overflow-hidden">
      {/* PREMIUM LIVE BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[320px] h-[320px] bg-pink-500/20 rounded-full blur-[120px] animate-floatSlow"></div>

        <div className="absolute top-[15%] right-[-100px] w-[300px] h-[300px] bg-cyan-500/20 rounded-full blur-[120px] animate-floatMedium"></div>

        <div className="absolute bottom-[-100px] left-[20%] w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-[120px] animate-floatFast"></div>

        <div className="absolute bottom-[10%] right-[15%] w-[250px] h-[250px] bg-blue-500/10 rounded-full blur-[120px] animate-floatSlow"></div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between">
          <h1 className="text-lg sm:text-xl font-bold tracking-widest">
            INDRANADH MEKA
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            
            <h1
              className="
                text-center lg:text-left
                font-bold
                text-[28px]
                sm:text-[38px]
                lg:text-[56px]
                leading-[1.3]
                mb-6
                bg-[linear-gradient(135deg,#FF69B4_0%,#FFC67D_25%,#8BC34A_50%,#03A9F4_75%,#03A9F4_100%)]
                bg-clip-text
                text-transparent
                font-[Azonix]
              "
            >
              MEKA <br /> INDRANADH
            </h1>

            <p className="max-w-2xl text-gray-300 gap-4 text-sm sm:text-base lg:text-lg leading-8 mb-8 mx-auto lg:mx-0">
              Frontend-focused Software Engineer passionate about building
              clean, responsive, and scalable web applications using
              <span className=" mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                <SiReact size={14} className="text-cyan-400" /> React.js
              </span>{' '}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                <FaReact size={14} className="text-cyan-500" /> Typescript
              </span>{' '}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                <SiNextdotjs size={14} className="text-white" /> javascripts
              </span>{' '}
              <span className=" mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white font-semibold">
                <SiTailwindcss size={14} className="text-cyan-400" /> Tailwind CSS
              </span>.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-white  font-semibold hover:scale-105 transition duration-300"
              >
                View Projects
              </a>

              <a
                href="/INDRANADH MEKA.pdf"
                download
                className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-white font-semibold hover:bg-white hover:text-black transition duration-300 inline-flex items-center gap-2"
              >
              <FaDownload size={18} />Resume
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 text-gray-300 text-sm">
              <a
                href="mailto:mekaindranadh@gmail.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaEnvelope size={16} /> Email
              </a>
              <a
                href="tel:+919989256248"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaPhoneAlt size={16} /> Call
              </a>
              <a
                href="https://github.com/indranadhmeka"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/indranadh-meka-5064712a4?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                <FaLinkedin size={20} /> LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-2xl" />
              <div className="relative w-[260px] sm:w-[320px] lg:w-[380px] rounded-full overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                <img
                  src={profileImg}
                  alt="Meka Indranadh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-2 max-w-5xl mx-auto px-4">

        {/* MAIN HEADING */}
        <h2
          className="
            text-center
            font-[Azonix]
            text-[28px]
            sm:text-[36px]
            lg:text-[48px]
            mb-12
            bg-[linear-gradient(99.87deg,#FFFFFF_11.68%,rgba(255,255,255,0.2)_100%)]
            bg-clip-text
            text-transparent
          "
        >
          About Me
        </h2>

        <div className="space-y-10 text-gray-300 leading-8 text-base sm:text-lg">

          {/* PERSONAL PROFILE */}
          <div>
            <h3 className="text-red text-xl sm:text-2xl font-semibold mb-4 bg-[linear-gradient(135deg,#FF69B4_0%,#FFC67D_50%,#8BC34A_100%)] bg-clip-text text-transparent font-[Azonix]">
              Personal Profile
            </h3>

            <p>
              I'm <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Meka Indranadh</span>, a
              <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Frontend Developer</span> based in{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Hyderabad</span>, passionate
              about building modern, responsive, and user-friendly web applications.

              

              I enjoy creating clean UI, reusable components, and seamless user
              experiences using{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                React.js
              </span>
              ,{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                JavaScript
              </span>
              ,{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Next.js
              </span>
              ,{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                React Native
              </span>
              , and{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Tailwind CSS
              </span>
              .
            </p>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-blue text-xl sm:text-2xl font-semibold mb-4 bg-[linear-gradient(135deg,#f093fb_0%,#f5576c_100%)] bg-clip-text text-transparent font-[Azonix]">
              Education
            </h3>

            <p>
              I completed my{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                B.Tech in Computer Science & Engineering
              </span>{" "}
              in <span className="text-white font-semibold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">2024</span> from{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Eluru College of Engineering & Technology
              </span>.

    

              My academic background helped me build a strong foundation in
              <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> programming</span>,{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> web development</span>, and{" "}
              <span className="text-white font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"> software engineering concepts</span>.
            </p>
          </div>

          {/* EXPERIENCE HIGHLIGHTS */}
          <div>
            <h3 className="text-navy text-xl sm:text-2xl font-semibold mb-4 bg-[linear-gradient(135deg,#fda085_0%,#f5576c_100%)] bg-clip-text text-transparent font-[Azonix]">
              Experience Highlights
            </h3>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                Working as a{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Jr. Software Engineer (Frontend Developer)
                </span>{" "}
                at <span className="text-white font-semibold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">SecurXperts Technologies Pvt. Ltd.</span>.
              </li>

              <li>
                Developed scalable and responsive web applications using{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">React.js</span>,{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">JavaScript</span>, and{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">Tailwind CSS</span>.
              </li>

              <li>
                Built reusable <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">UI components</span> to improve development efficiency and
                design consistency.
              </li>

              <li>
                Integrated <span className="text-white font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">REST APIs</span> and improved data handling in frontend
                applications.
              </li>

              <li>
                Optimized performance using{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">lazy loading</span>,{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">code splitting</span>, and best
                practices.
              </li>

              <li>
                Ensured <span className="text-white font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">responsive design</span> and{" "}
                <span className="text-white font-semibold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">cross-browser compatibility</span>.
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECHNICAL TOOLKIT */}
      <section id="skills" className="relative w-full min-h-screen overflow-hidden px-6 py-24 sm:px-10 lg:px-20">

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center">
            <h2 className="text-[2.3rem] sm:text-[3rem] md:text-[4.2rem] font-extrabold uppercase tracking-wide bg-gradient-to-r from-violet-500 via-pink-400 to-yellow-300 bg-clip-text text-transparent font-[Azonix]">
              Technical Toolkit
            </h2>

            <p className="mt-5 text-gray-400 uppercase tracking-[0.18em] text-[11px] sm:text-sm md:text-lg">
              Technologies and Tools I Use to Bring Ideas to Life
            </p>
          </div>

          {/* React Technology Tags */}
          <div className="mt-16">
            <h3 className="text-center text-xl sm:text-2xl font-semibold mb-8 text-gray-300">
              React Ecosystem Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {skill.icon}
                  <span className="text-gray-300 text-sm sm:text-base font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Comprehensive Skills Tags Section */}
          <div className="mt-20">
            <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mb-12 text-gray-300 font-[Azonix] uppercase tracking-wide">
              Complete Technical Skillset
            </h3>
            
            {/* Frontend Skills */}
            <div className="mb-12">
              <h4 className="text-center text-lg font-medium mb-6 text-cyan-400">
                Frontend Development
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.filter(skill => skill.category === 'frontend').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300"
                  >
                    {skill.icon}
                    <span className="text-gray-200 text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="mb-12">
              <h4 className="text-center text-lg font-medium mb-6 text-green-400">
                Backend & Database
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.filter(skill => skill.category === 'backend').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/30 hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300"
                  >
                    {skill.icon}
                    <span className="text-gray-200 text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Skills */}
            <div className="mb-12">
              <h4 className="text-center text-lg font-medium mb-6 text-purple-400">
                Development Tools
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.filter(skill => skill.category === 'tools').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/30 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
                  >
                    {skill.icon}
                    <span className="text-gray-200 text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Skills */}
            <div className="mb-12">
              <h4 className="text-center text-lg font-medium mb-6 text-pink-400">
                Design & Documentation
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {allSkills.filter(skill => skill.category === 'design').map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-400/30 hover:from-pink-500/20 hover:to-rose-500/20 transition-all duration-300"
                  >
                    {skill.icon}
                    <span className="text-gray-200 text-sm sm:text-base font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

         

          
        </div>
      </section>

      {/* EXPERIENCE */}
<section
  id="experience"
  className="relative w-full min-h-screen overflow-hidden px-6  sm:px-10 lg:px-15"
>
  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-[2.3rem] sm:text-[3rem] md:text-[4.2rem] font-extrabold uppercase tracking-wide bg-gradient-to-r from-violet-500 via-pink-400 to-yellow-300 bg-clip-text text-transparent font-[Azonix]">
        Experience
      </h2>

      <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-xl">
        My professional journey and the roles that have shaped my expertise in
        web development
      </p>
    </div>

    <div className="mt-20 space-y-8">
      {experience.map((item, index) => (
        <div
          key={index}
          className="rounded-[28px] border border-white/10 bg-[rgba(10,10,20,0.72)] backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.35)] p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-violet-400/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-white text-[1.5rem] sm:text-[2.2rem] md:text-[2.5rem] font-[Azonix] uppercase leading-tight">
                {item.role}
              </h3>

              <p className="mt-5 text-blue-400 text-lg sm:text-xl font-semibold">
                {item.company}
              </p>

              <p className="mt-8 text-gray-300 text-base sm:text-lg md:text-[1rem] leading-9 max-w-5xl">
                {item.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {item.tech.map((tech, i) => {
                  const getTechIcon = (techName) => {
                    switch(techName.toLowerCase()) {
                      case 'react':
                        return <SiReact size={16} className="text-cyan-400" />;
                      case 'tailwindcss':
                        return <SiTailwindcss size={16} className="text-cyan-400" />;
                      case 'next.js':
                        return <SiNextdotjs size={16} className="text-white" />;
                      case 'javascript':
                        return <SiJavascript size={16} className="text-yellow-400" />;
                      case 'typescript':
                        return <SiTypescript size={16} className="text-blue-400" />;
                      case 'html':
                      case 'css':
                        return <FaHtml5 size={16} className="text-orange-500" />;
                      case 'git':
                        return <FaGithub size={16} className="text-white" />;
                      case 'firebase':
                        return <FaFire size={16} className="text-orange-400" />;
                      default:
                        return <FaCode size={16} className="text-gray-400" />;
                    }
                  };
                  
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#2b2b34] border border-white/10 text-gray-300 text-sm sm:text-base shadow-[inset_0_1px_2px_rgba(255,255,255,0.06)] hover:bg-[#33333d] transition"
                    >
                      {getTechIcon(tech)}
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="lg:pt-8">
              <div className="flex items-center gap-3 text-gray-400 text-lg sm:text-xl whitespace-nowrap">
                <MdWorkOutline className="text-violet-400" size={24} />
                <span>{item.duration}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
        <h2 className={sectionTitle}>Projects</h2>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 hover:-translate-y-2 hover:border-white/20 transition-all duration-500 backdrop-blur-md opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 200}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* PROJECT IMAGE */}
                <div className="lg:w-1/3">
                  <div className="w-full h-48 lg:h-64 rounded-2xl bg-white/10 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                  </div>
                </div>

                {/* PROJECT CONTENT */}
                <div className="lg:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => {
                      const getProjectTechIcon = (techName) => {
                        switch(techName.toLowerCase()) {
                          case 'react.js':
                          case 'react':
                            return <SiReact size={14} className="text-cyan-400" />;
                          case 'next.js':
                            return <SiNextdotjs size={14} className="text-white" />;
                          case 'tailwind css':
                          case 'tailwindcss':
                            return <SiTailwindcss size={14} className="text-cyan-400" />;
                          case 'javascript':
                            return <SiJavascript size={14} className="text-yellow-400" />;
                          case 'typescript':
                            return <SiTypescript size={14} className="text-blue-400" />;
                          case 'api integration':
                            return <FaServer size={14} className="text-green-400" />;
                          case 'css':
                          case 'html':
                            return <FaHtml5 size={14} className="text-orange-500" />;
                          case 'postgresql':
                            return <FaDatabase size={14} className="text-blue-500" />;
                          case 'fastapi':
                            return <FaNodeJs size={14} className="text-green-500" />;
                          case 'documentation':
                            return <FaBook size={14} className="text-purple-400" />;
                          case 'ui/ux':
                            return <FaPalette size={14} className="text-pink-400" />;
                          case 'git':
                            return <FaGithub size={14} className="text-white" />;
                          default:
                            return <FaCode size={14} className="text-gray-400" />;
                        }
                      };
                      
                      return (
                        <span 
                          key={index} 
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-xs text-gray-300 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          {getProjectTechIcon(tech)}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                    <p className="text-gray-300 leading-8 mb-6">{project.desc}</p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="px-4 py-2 rounded-xl bg-white text-black font-medium inline-flex items-center gap-2 hover:scale-105 transition duration-300"
                    >
                      <FaExternalLinkAlt size={16} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-4 py-2 rounded-xl border border-white/15 bg-white/5 text-white font-medium inline-flex items-center gap-2 hover:bg-white/10 transition duration-300"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-10 text-center backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(135deg,rgba(102,126,234,0.05)_0%,rgba(118,75,162,0.05)_50%,rgba(240,147,251,0.05)_100%)]"></div>
          <div className="relative z-10">
            <h2 className={sectionTitle}>Resume</h2>

            
             
                
                
              
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/INDRANADH MEKA.pdf"
                download
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
              >
                <FaDownload size={18} />
                Download Resume
              </a>
              <a
                href="/INDRANADH MEKA.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition duration-300"
              >
                <FaExternalLinkAlt size={18} />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20">
        <h2 className={sectionTitle}>LET'S COLLABORATE</h2>
        <p className="text-gray-300 text-center mb-6">AVAILABLE FOR NEW OPPORTUNITIES AND EXCITING PROJECTS</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-6">
              <FaBriefcase size={24} />
              <h3 className="text-2xl font-semibold">DIRECT CONTACT</h3>
            </div>

            

            <div className="space-y-5 text-gray-300">
              <a href="mailto:mekaindranadh@gmail.com" className="flex items-center gap-3 hover:text-white">
                <FaEnvelope size={20} /> mekaindranadh@gmail.com
              </a>
              <a href="tel:+919989256248" className="flex items-center gap-3 hover:text-white">
                <FaPhoneAlt size={20} /> +91 9989256248
              </a>
              <a
                href="https://linkedin.com/in/indranadh-meka-5064712a4"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <FaLinkedin size={20} /> LinkedIn Profile
              </a>
              <a
                href="https://github.com/indranadhmeka"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-white"
              >
                <FaGithub size={20} /> GitHub Profile
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <form 
              className="space-y-5"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                placeholder="Your Message"
                required
                className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 text-white placeholder-gray-400 resize-none"
              />
              
              {formStatus && (
                <div className={`p-3 rounded-xl text-sm font-medium ${
                  formStatus.includes('successfully') 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  {formStatus}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-semibold transition duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-white text-black hover:scale-[1.01]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-400 text-sm px-6">
        &copy; 2026 Meka Indranadh • Frontend Developer • Built with React + Tailwind CSS
      </footer>
    </div>
  );
};

export default Portfolio;