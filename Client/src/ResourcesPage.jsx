import React from 'react';
import { Book, Video, Code, Download, ExternalLink, BookOpen, FileText, Github, Youtube, Database } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with new color scheme */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Decorative circles in background */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-teal-300 opacity-10 rounded-full translate-x-16 translate-y-16"></div>
            
            <h1 className="text-5xl font-bold mb-6 text-center relative z-10">Learning Resources</h1>
            <p className="text-xl text-center max-w-3xl mx-auto relative z-10">
              Curated collection of the best AI and Data Science learning materials, tools, and documentation to support your journey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content - Updated accent colors to match new theme */}
      <div className="container mx-auto px-6 py-16">
        {/* Learning Paths Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-emerald-500 mr-3" />
                <h3 className="text-xl font-semibold">Beginner Path</h3>
              </div>
              <p className="text-gray-600 mb-4">Start your journey in AI and Data Science with fundamental concepts and basic tools.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Python Basics
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Data Analysis Fundamentals
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Intro to Machine Learning
                </li>
              </ul>
              <a href="/resources/basic" className="text-emerald-500 hover:text-emerald-600 font-medium">Get Started →</a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-500">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-teal-500 mr-3" />
                <h3 className="text-xl font-semibold">Intermediate Path</h3>
              </div>
              <p className="text-gray-600 mb-4">Deepen your knowledge with advanced concepts and practical applications.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Deep Learning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Natural Language Processing
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                  Computer Vision
                </li>
              </ul>
              <a href="#" className="text-teal-500 hover:text-teal-600 font-medium">Continue Learning →</a>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-emerald-600">
              <div className="flex items-center mb-4">
                <Database className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-xl font-semibold">Advanced Path</h3>
              </div>
              <p className="text-gray-600 mb-4">Master complex algorithms and cutting-edge AI technologies.</p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                  Reinforcement Learning
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                  GANs & Transformers
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></span>
                  AI Research Papers
                </li>
              </ul>
              <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">Explore Advanced →</a>
            </div>
          </div>
        </section>

        {/* Tools & Software Section */}
        <section className="mb-20">
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Tools & Software</h2>
  <div className="grid md:grid-cols-4 gap-6">
    {[
      {
        icon: <Github className="w-6 h-6" />,
        name: "GitHub Repos",
        desc: "Essential AI/ML repositories",
        link: "https://github.com/aiclub-igdtuw/AIMLMonth2023" // Add your GitHub link here
      },
      {
        icon: <Youtube className="w-6 h-6" />,
        name: "Video Tutorials",
        desc: "Step-by-step guides",
        link: "https://www.youtube.com/watch?v=i_LwzRVP7bg&list=PLWKjhJtqVAblStefaz_YOVpDWqcRScc2s" // Add your YouTube link here
      },
      {
        icon: <FileText className="w-6 h-6" />,
        name: "Documentation",
        desc: "Detailed references",
        link: "https://pytorch.org/" // Add your documentation link here
      },
      {
        icon: <Download className="w-6 h-6" />,
        name: "Downloads",
        desc: "Useful tools & datasets",
        link: "https://huggingface.co/" // Add your download link here
      }
    ].map((tool, index) => (
      <a
        key={index}
        href={tool.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
      >
        <div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4 mx-auto">
          <div className="text-emerald-600">{tool.icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-center mb-2">{tool.name}</h3>
        <p className="text-gray-600 text-center text-sm">{tool.desc}</p>
      </a>
    ))}
  </div>
</section>


        {/* Latest Resources */}
        <NewsSection />
      </div>
    </div>
  );
};

export default ResourcesPage;
const NewsSection=()=>{
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch News Data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=AI OR Machine Learning&sortBy=publishedAt&apiKey=YOUR_API_KEY`
        );
        const data = await response.json();
        setNews(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Latest Resources</h2>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {news.slice(0, 4).map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">New</span>
                  <span className="ml-2 text-gray-500 text-sm">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{article.source.name}</span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-500 hover:text-emerald-600"
                  >
                    Access Resource
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

