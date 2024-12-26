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
// import sample from "./assets/sample.mp4"
import "./index.css"
import { 
  Code, Database, Brain, Cpu, 
  TrendingUp, Users, Book, GitBranch, 
  Award, Target, Zap, Server, 
  Rocket, Terminal, Globe, Moon, Sun, Mail, Phone, MapPin ,Github,Eye,
 Trophy, Star, Crown ,Instagram} from 'lucide-react';

// About the introduction
const AboutStanfordAIClub = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold text-black dark:text-gray-800 mb-6">About S4DS AI Club</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The S4DS Club (S4DS) is the premier AI club at Dy Patil Akurdi. We are dedicated to fostering an inclusive and vibrant community for students interested in artificial intelligence. We aim to provide all students from established AI researchers to folks wanting to get into the field with the knowledge and opportunity to engage with AI research & development. Our vision is to serve as a centralized hub for the AI community on campus, connecting everyone from domain experts and practitioners to theorists.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We offer a wide range of activities such as student-led research projects, reading groups, workshops, and classes designed to equip members with essential AI skills.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We also engage with non-profit organizations with the shared vision of democratizing AI and reducing global inequalities. By hosting small-group discussions and lectures with leading experts , the club provides invaluable networking and learning opportunities for students passionate about AI.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <video
            className="w-full rounded-lg shadow-lg"
            muted
            loop
            autoPlay
            poster="https://via.placeholder.com/400x300"
          >
            <source src={Animation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              href="/"
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
                  {["Efficent Data Visualization", "Seemless Data Integretion", "Real Time Data Streaming","Scalable And Secure"].map((reward, idx) => (
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



// Main App Component
const AIDataScienceClubWebsite = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

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

      {/* Main Content */}
      <div className="container bg-white mx-auto px-4 py-16 relative z-10">
        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 animate-fadeInUp">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-gray-600 dark:text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-600 dark:text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-600 dark:text-gray-300">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

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
    </div>
  );
};

export default AIDataScienceClubWebsite;