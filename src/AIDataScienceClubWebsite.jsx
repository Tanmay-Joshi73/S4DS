import React, { useState, useEffect } from 'react';
import chatbotImage from './assets/ai-chatbot.webp';
import SpamEmail from "./assets/Spam-Email-Classfier.webp"
import ironMAN from "./assets/Iron-MAN.mp4"
import sitting from "./assets/sitting-NoBG.gif"
import Random from "./assets/random.mp4"
import eating from "./assets/eating.mp4"
import skeleton from "./assets/skeleton.mp4"
import Animation from "./assets/animation.mp4"
// import sample from "./assets/sample.mp4"
import "./index.css"
import { 
  Code, Database, Brain, Cpu, 
  TrendingUp, Users, Book, GitBranch, 
  Award, Target, Zap, Server, 
  Rocket, Terminal, Globe, Moon, Sun, Mail, Phone, MapPin ,Github,Eye
} from 'lucide-react';

// Theme Toggle Component
const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button 
    onClick={toggleTheme} 
    className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:rotate-12"
  >
    {isDarkMode ? (
      <Sun className="w-6 h-6 text-yellow-500" />
    ) : (
      <Moon className="w-6 h-6 text-indigo-600" />
    )}
  </button>
);
// About the introduction
const AboutStanfordAIClub = () => {
  return (
    <section className="bg-white py-16 px-8 md:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold text-black dark:text-gray-800 mb-6">About S4DS AI Club</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            The Stanford AI Club (SAIC) is the premier AI club at Stanford. We are dedicated to fostering an inclusive and vibrant community for students interested in artificial intelligence. We aim to provide all students from established AI researchers to folks wanting to get into the field with the knowledge and opportunity to engage with AI research & development. Our vision is to serve as a centralized hub for the AI community on campus, connecting everyone from domain experts and practitioners to theorists.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We offer a wide range of activities such as student-led research projects, reading groups, workshops, and classes designed to equip members with essential AI skills.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            We also engage with non-profit organizations with the shared vision of democratizing AI and reducing global inequalities. By hosting small-group discussions and lectures with leading experts like Sam Altman, the club provides invaluable networking and learning opportunities for students passionate about AI.
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
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Header with Glowing Effect */}
      <header className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-700 text-white py-28 text-center overflow-hidden w-full max-w-full px-6 min-h-[80vh]">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-70 blur-3xl animate-pulse"></div>
  <div className="relative z-20 max-w-6xl mx-auto">
    <h1 className="text-7xl font-extrabold mb-4 mt-12 animate-fadeInUp text-white drop-shadow-lg">
      AI & Data Science Club
    </h1>
    <p className="text-3xl max-w-5xl mt-8 mx-auto animate-fadeInUp delay-200 text-gray-100">
      Pioneering the future of technology through innovative artificial intelligence and data-driven solutions
    </p>
  </div>
</header>

        {/* About Yourself Component */}
        <AboutStanfordAIClub />

      {/* Featured Highlights */}
      <FeaturedHighlights />

      {/* Project section   */}
      {/* <Projects /> */}
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
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
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Phone className="w-6 h-6" />
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