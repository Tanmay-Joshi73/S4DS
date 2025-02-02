import React from 'react';
import { Book, Video, Code, Download, ExternalLink, BookOpen, FileText, Github, Youtube, Database } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Skeleton } from '@/components/ui/skeleton';
import{ useState, useEffect } from 'react';
const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
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


const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const getNews = async () => {
    const apiKey = '5cYD0e694vpuVwDziK6RQHciPau1gbD2lTA2tqzzRNU6B7Fk';
    const url = `https://api.currentsapi.services/v1/latest-news?language=en&apiKey=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Filter out news articles without images
      const filteredNews = data.news.filter(article => article.image);

      // Ensure we have at least 6 articles with images, replacing those without images
      const finalNews = [];
      for (let i = 0; i < data.news.length && finalNews.length < 6; i++) {
        const article = data.news[i];

        // If the article doesn't have an image, replace it with one that does
        if (article.image) {
          finalNews.push(article);
        } else if (filteredNews.length > 0) {
          // Take a news article with an image from the filtered list
          finalNews.push(filteredNews.shift());
        }
      }

      setNews(finalNews);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching news:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-xl">Loading news...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8">AI & Data Science News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.length === 0 ? (
          <p>No AI-related news found.</p>
        ) : (
          news.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title || 'No image available'}
                  className="w-full h-56 object-cover"
                />
                <span className="absolute top-4 left-4 bg-black/75 text-white px-3 py-1 rounded text-sm">
                  {article.author || 'Unknown Author'}
                </span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold mb-2">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {article.title}
                  </a>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.description || 'No description available'}
                </p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(article.published).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};


export default ResourcesPage;