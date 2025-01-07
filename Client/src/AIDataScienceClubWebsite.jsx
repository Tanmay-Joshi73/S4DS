import React, { useState, useEffect } from 'react';
import chatbotImage from './assets/ai-chatbot.webp';
import SpamEmail from "./assets/Spam-Email-Classfier.webp"
import ironMAN from "./assets/Iron-MAN.mp4"
import sitting from "./assets/sitting-NoBG.gif"
import Random from "./assets/random.mp4"
import eating from "./assets/eating.mp4"
import skeleton from "./assets/skeleton.mp4"
import Animation from "./assets/animation.mp4"
import PowerBI from "./assets/PowerBI.webp"
import AI_Theme_Animation from "./AI-Theme_Animation.jsx"
// import sample from "./assets/sample.mp4"
import { Network, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import "./index.css"
import {
  Code, Database, Brain, Cpu,
  TrendingUp, Users, Book, GitBranch,
  Award, Target, Zap, Server,
  Rocket, Terminal, Globe, Moon, Sun, Mail, Phone, MapPin, Github, Eye,
  Trophy, Star, Crown, Instagram
} from 'lucide-react';

// About the introduction
const AboutStanfordAIClub = () => {
  const springTransition = {
    type: "spring",
    stiffness: 70,  // Reduced for smoother animation
    damping: 17     // Adjusted for cleaner movement
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15  // Slightly faster stagger
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: springTransition
    }
  };

  return (
    <section className="bg-white py-20 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <motion.div 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={springTransition}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Welcome to S4DS AI Club
            </span>
          </h2>
          <motion.div 
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={springTransition}
          >
            <div className="h-[2px] w-16 bg-gradient-to-r from-blue-600 to-transparent"></div>
            <Cpu className="w-6 h-6 text-blue-600" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-purple-600 to-transparent"></div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <Brain className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Premier AI Community</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The S4DS Club is the premier AI club at Dy Patil Akurdi, fostering an inclusive and vibrant community for students passionate about artificial intelligence.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <Network className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Research & Development</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We provide opportunities for all students - from established researchers to newcomers - to engage with cutting-edge AI research and development projects.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300"
              >
                <Lightbulb className="w-8 h-8 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Impact & Innovation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Through partnerships with non-profit organizations, workshops, and expert-led sessions, we're working to democratize AI and reduce global inequalities.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={springTransition}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <video
                className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                muted
                loop
                autoPlay
                poster="/api/placeholder/600/400"
              >
                <source src={Animation} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



// Featured Highlights
const FeaturedHighlights = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fadeInUp text-black dark:text-gray-800">
          Core Activity
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <Rocket className="w-12 h-12 text-orange-500 dark:text-orange-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Innovation Hub</h3>
            <p className="text-black dark:text-gray-600">A dedicated space for members to collaborate on cutting-edge AI and data science projects.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <Globe className="w-12 h-12 text-teal-500 dark:text-teal-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Global Connections</h3>
            <p className="text-black dark:text-gray-600">Networking opportunities with international AI research communities and tech leaders.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <Terminal className="w-12 h-12 text-indigo-500 dark:text-indigo-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Hands-on Learning</h3>
            <p className="text-black dark:text-gray-600">Practical workshops with real-world tools and state-of-the-art technologies.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <Book className="w-12 h-12 text-red-500 dark:text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Extensive Library</h3>
            <p className="text-black dark:text-gray-600">Access to a comprehensive library of AI and data science research materials.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <Users className="w-12 h-12 text-green-500 dark:text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Engaged Community</h3>
            <p className="text-black dark:text-gray-600">A vibrant community of AI enthusiasts and data science experts.</p>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-[0_6px_15px_rgba(0,0,0,0.15)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-center mb-4 opacity-100">
              <TrendingUp className="w-12 h-12 text-blue-500 dark:text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-black dark:text-gray-700">Career Advancement</h3>
            <p className="text-black dark:text-gray-600">Opportunities to gain industry experience and boost your career in AI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={chatbotImage}
              alt="Chatbot Project"
              className="w-[65] h-[380px] object-cover" // Increased height dramatically
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">
                Chatbot Project
              </h3>
              <p className="text-gray-600">
                A brief description of the chatbot project goes here. It showcases our team's work on natural language processing and conversational AI.
              </p>
              <div className="mt-4 flex space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" /> View on GitHub
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
              <img
                src={SpamEmail}
                alt="Project Image"
                className="w-[65] h-[380px] object-cover" // Increased height
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-700">
                  Project Title
                </h3>
                <p className="text-gray-600">
                  A brief description of the chatbot project goes here. It showcases our team's work on natural language processing and conversational AI
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Project Image"
                className="w-full h-[300px] object-cover" // Increased height
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-700">
                  Project Title
                </h3>
                <p className="text-gray-600">
                  A brief description of the project goes here. Keep it short and to the point.
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-500 hover:underline font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// Nav bar
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-end">
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/resources"
              className="text-white text-2xl hover:text-blue-200 transition-colors duration-300"
            >
              Resources
            </a>
            <a
              href="/Playground"
              className="text-white text-2xl hover:text-blue-200 transition-colors duration-300"
            >
              Playground
            </a>
            <a
              href="#projects"
              className="text-white text-2xl hover:text-blue-200 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white text-2xl hover:text-blue-200 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-lg focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu with improved styling */}
        <div
          className={`
            fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm md:hidden
            transition-opacity duration-300 ease-in-out
            ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
          <div className={`
            flex flex-col items-center justify-center h-full space-y-8
            transform transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}>
            {/* Close button */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-8 text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <a
              href="/resources"
              className="text-white text-3xl hover:text-blue-200 transition-colors duration-300"
            >
              Resources
            </a>
            <a
              href="/"
              className="text-white text-3xl hover:text-blue-200 transition-colors duration-300"
            >
              Playground
            </a>
            <a
              href="#projects"
              className="text-white text-3xl hover:text-blue-200 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-white text-3xl hover:text-blue-200 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};


// Event Section


const EventSection = () => {
  const prizes = [
    {
      place: "InAugration",
      icon: Star,
      rewards: ["InAugration of AI Club",
        "Join us for the grand inauguration of our AI Club",
        " we unveil exciting plans and initiatives for the coming year",
        "Launch of the AI Club website."]
    },

    {
      place: "AI Hackathon (Upcoming)",
      icon: Award,
      rewards: [
        " A 48-hour coding challenge to create innovative AI applications",
        " Participants can form teams,",
        "there will be workshops",
        "mentoring sessions during the event",
      ],
      info: "Celebrate the achievements of our 3rd place winner and learn how they mastered their journey to success."
    }
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-6xl text-5xl font-bold text-black dark:text-gray-800 text-center mb-12">
          Events
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Container - 1st Place */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-purple-900 shadow-2xl rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.4),_transparent_70%)]"></div>
              <div className="p-10">
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="w-10 h-10 text-yellow-400" />
                  <h2 className="text-4xl font-bold text-white">PowerBI</h2>
                </div>
                <ul className="text-gray-200 text-lg space-y-3 mb-8">
                  {["Efficent Data Visualization", "Seemless Data Integretion", "Real Time Data Streaming", "Scalable And Secure"].map((reward, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                      {reward}
                    </li>
                  ))}
                </ul>
                <p className="text-gray-300 text-sm">
                  {/* Dive deep into advanced analytics with PowerBI and learn how to create impactful visualizations for data-driven decisions. */}
                </p>
              </div>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <img
                  src={PowerBI}
                  alt="PowerBI"
                  className="w-64 h-64 object-cover rounded-full border-4 border-white/20 shadow-2xl transform -translate-y-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Container - Other Prizes */}
          <div className="space-y-5">
            {prizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300 "></div>
                  <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-blue-400" />
                      <h3 className="text-3xl font-bold text-white">{prize.place}</h3>
                    </div>
                    <ul className="space-y-3">
                      {prize.rewards.map((reward, idx) => (
                        <li key={idx} className="text-gray-200 text-lg  flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                          {reward}
                        </li>
                      ))}
                    </ul>
                    {/* <p className="text-gray-400 text-sm mt-4">{prize.info}</p> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Section  // 

const FormSubmit = async (e) => {
  e.preventDefault()
  const formData = {
    Name: e.target.Name.value,
    Email: e.target.Email.value,
    Mes: e.target.Message.value
  }
  try {
    alert("Hey just before the Form Submition")
    const Responce = await fetch('http://localhost:8000/App/FormData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (Responce.ok) {
     
      e.target.reset()
    }
  }
  catch (err) {
    alert(err)
  }
}


import { Send, User, MessageSquare } from 'lucide-react';

const ModernContact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-indigo-50 rounded-full text-sm font-medium text-indigo-600 inline-block mb-4 shadow-sm">
            Contact Us
          </span>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-indigo-50">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-xl">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email Us</h3>
                  <p className="text-sm text-gray-600">We'll respond within 24h</p>
                </div>
              </div>
              <button className="group w-full flex items-center justify-between p-4 bg-white rounded-xl hover:bg-indigo-50 transition-colors">
                <span className="text-gray-600">s4dsdypcoe02@gmail.com</span>
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-indigo-600" />
              </button>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative overflow-hidden rounded-xl bg-white/90 p-6">
                <div className="relative z-10">
                  <h3 className="font-semibold mb-2 text-gray-800">Quick Response</h3>
                  <p className="text-sm text-gray-600">Available 24/7 for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 rounded-2xl p-8 shadow-lg">
              <form onSubmit={FormSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-white">Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-shadow"
                        placeholder="Your name"
                        name='Name'
                        required
                        minLength={10}
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-white">Email</label>
                    <div className="relative">
                      <input
                        type="email"
                        className="w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-shadow"
                        placeholder="your@email.com"
                        name='Email'
                        required
                        minLength={8}
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block mb-2 text-sm font-medium text-white">Message</label>
                    <div className="relative">
                      <textarea
                        rows="6"
                        className="w-full pl-12 pr-4 py-4 bg-white/90 rounded-xl focus:ring-2 focus:ring-indigo-300 focus:border-transparent transition-shadow resize-none"
                        placeholder="Your message here..."
                        name='Message'
                        minLength={10}
                        maxLength={50}
                        required
                      ></textarea>
                      <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-white text-indigo-600 rounded-xl transition-all duration-200 transform hover:scale-[1.02] hover:bg-indigo-50 focus:scale-[0.98] flex items-center justify-center space-x-2 font-medium"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};






// Main App Component
const AIDataScienceClubWebsite = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const [headerVisible, setHeaderVisible] = useState(false); // State to control header visibility

  // Use useEffect to handle the loading animation duration
  useEffect(() => {
    // Set a timer to simulate the loading animation duration (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false once animation is done
    }, 3000); // Change the time based on how long you want the animation to run

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Scroll event to check if the user has scrolled down to reveal the header
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setHeaderVisible(true); // Show the header when user scrolls down
    } else {
      setHeaderVisible(false); // Hide the header when at the top
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    };
  }, []);

  if (isLoading) {
    return <AI_Theme_Animation />; // Show the animation while loading
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100'} font-sans transition-colors duration-300`}>

     
      {/* Theme Toggle */}
      {/* <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} /> */}


      {/* Header with Glowing Effect  Header section */}
      <header className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-700 text-white min-h-screen flex items-center justify-center text-center overflow-hidden w-full max-w-full px-8">
        <Navigation />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-70 blur-3xl animate-pulse"></div>
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center justify-center">
          <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 animate-fadeInUp text-white drop-shadow-lg">
            AI & Data Science Club
          </h1>
          <p className="text-2xl lg:text-3xl max-w-4xl mx-auto animate-fadeInUp delay-200 text-gray-100 leading-relaxed">
            Pioneering the future of technology through innovative artificial intelligence and data-driven solutions
          </p>
        </div>
      </header>

     
      {/* About Yourself Component */}
      <AboutStanfordAIClub />

      {/* Featured Highlights */}
      <FeaturedHighlights />

      {/* Event Section */}
      <EventSection />
      <ModernContact />
      {/* Main Content
      <div className="container bg-white mx-auto px-4 py-16 relative z-10">

        {/* Footer */}
      <footer className="text-center py-8 bg-gray-900 dark:bg-black text-white rounded-xl shadow-lg">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/s4ds_dypcoe/" className="hover:text-blue-400 transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <MapPin className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-300 dark:text-gray-400">
          © 2024 AI & Data Science Club | Empowering Future Innovators
        </p>
      </footer>
    </div>
  );
};

export default AIDataScienceClubWebsite;