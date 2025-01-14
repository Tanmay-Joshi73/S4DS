import React from 'react';
import { BookOpen, ChevronRight } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Data_Analysis = () => {
  // Chart data configuration
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Breadcrumb navigation */}
            <div className="flex items-center space-x-2 text-sm mb-4">
              <a href="/resources" className="hover:text-emerald-200">Resources</a>
              <ChevronRight className="w-4 h-4" />
              <a href="/resources/beginner" className="hover:text-emerald-200">Beginner Path</a>
              <ChevronRight className="w-4 h-4" />
              <span>Data Analytics</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">Data Analysis Fundamentals</h1>
            <p className="text-xl opacity-90">Master the fundamentals of Data Analysis</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">1. Introduction to Data Analytics</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Data Analytics involves inspecting, cleaning, transforming, and modeling data to discover useful information,
                conclude, and support decision-making. It is a critical process in today's data-driven world.
              </p>
            </div>
          </section>

          {/* Fundamentals Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">2. Fundamentals of Data Analysis</h2>
              </div>
              <p className="text-gray-600 mb-6">
                The fundamentals of Data Analysis include understanding the context of the data, identifying trends, 
                cleaning the data for consistency, and extracting insights that are actionable. A solid foundation is necessary 
                to interpret the data correctly.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Data Collection: Gathering the right data is the first step in the analysis process.</li>
                <li>Data Cleaning: Ensuring that the data is accurate, complete, and formatted correctly.</li>
                <li>Data Analysis: Applying statistical techniques and algorithms to derive insights.</li>
                <li>Data Visualization: Presenting data in a way that is easy to understand and interpret.</li>
              </ul>
            </div>
          </section>

          {/* Data Optimization Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">3. Data Optimization: Why It Matters & How to Optimize</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Data optimization is essential to make data more efficient for analysis. This includes optimizing the 
                storage, querying, and processing of data. By optimizing data, you can make faster, more accurate decisions 
                and reduce operational costs.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Reduce Redundancy: Eliminate unnecessary duplicates to save space and improve performance.</li>
                <li>Indexing: Implement indexing to speed up data retrieval operations.</li>
                <li>Normalization: Standardize data to avoid inconsistencies and improve quality.</li>
                <li>Data Compression: Compress data to reduce storage needs without losing essential information.</li>
              </ul>
            </div>
          </section>

          {/* Analysis Techniques Section */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">4. Different Data Analysis Techniques</h2>
              </div>
              <p className="text-gray-600 mb-6">
                There are several techniques used in data analysis to extract meaningful insights. Some of the most common 
                techniques include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Descriptive Analysis: Summarizing data to describe its basic features.</li>
                <li>Exploratory Data Analysis (EDA): Using visual methods to explore data sets and find patterns.</li>
                <li>Predictive Analysis: Using historical data to make predictions about future events.</li>
                <li>Prescriptive Analysis: Using data and algorithms to suggest actions for optimal outcomes.</li>
              </ul>
            </div>
          </section>

          {/* Example Section with Chart */}
          <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-emerald-500 p-8">
              <div className="flex items-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                <h2 className="text-2xl font-bold">5. Data Analysis Example: Monthly Revenue</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Below is an example of how to visualize monthly revenue data using a line graph:
              </p>
              <div className="mb-6 h-96 w-full">
                {/* <Line data={data} options={options} /> */}
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>The line graph shows the trend of monthly revenue across different months.</li>
                <li>It helps to visually analyze the patterns, peaks, and troughs in the data.</li>
                <li>The data is represented by points connected by lines to show the movement over time.</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation Buttons - Increased space between buttons */}
        <div className="flex justify-center space-x-8 pt-8">
         <a href='/resources/basic'> <button className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            ← Previous Topic
          </button>
          </a>
          <a href="/resources/MachineLearning">
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Next Topic →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Data_Analysis;