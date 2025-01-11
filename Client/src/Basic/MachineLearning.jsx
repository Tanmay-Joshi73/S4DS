import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { 
  BookOpen, 
  Code, 
  ChevronRight, 
  BarChart2, 
  TrendingUp, 
  Grid,
  Menu,
  X
} from 'lucide-react';

//Importing all the necessary files for the Unsupervised Learning Seaction
import {DBSCAN, Intro,KClustering,DimensionalityReduction,PCA, TSNE ,AnomalyDetection,SelfOrganizingMaps} from "./UnsupervisedLearning/Unsupervisedlearning";





//Data for the labels
import { ScatterChart, Scatter } from 'recharts';

const labeledDataGraph = [
  { x: 1, y: 1, label: 'A' },
  { x: 2, y: 2, label: 'B' },
  { x: 3, y: 3, label: 'C' },
  { x: 4, y: 4, label: 'D' },
  { x: 5, y: 5, label: 'E' },
];
import machine_learning_img from "../assets/machine-learning-image.webp";
import LabelldataImg from "../assets/Labelleddata.webp"
import Feature from "../assets/FeatureEnginering.jpg"
import Algorithm from "../assets/algorithm.jpg"
// Sample data for the ML accuracy graph
const mlAccuracyData = [
  { name: 'Day 1', training: 65, validation: 60 },
  { name: 'Day 5', training: 75, validation: 70 },
  { name: 'Day 10', training: 82, validation: 76 },
  { name: 'Day 15', training: 87, validation: 80 },
  { name: 'Day 20', training: 90, validation: 82 },
  { name: 'Day 25', training: 92, validation: 83 },
  { name: 'Day 30', training: 95, validation: 85 },
];
const LabeledDataGraph = () => (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Labeled Data Visualization</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" dataKey="x" name="Feature 1" unit=" units" />
            <YAxis type="number" dataKey="y" name="Label" unit=" units" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Labeled Data" data={labeledDataGraph} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

const topics = [
  {
    id: 'intro',
    title: 'Introduction to ML',
    icon: BookOpen,
    color: 'emerald',
    content: {
      description: 'Machine Learning (ML) is a field of artificial intelligence (AI) that focuses on building systems that can learn from and adapt to data without being explicitly programmed.',
      features: [
        'Automates decision-making processes',
        'Improves over time with more data',
        'Finds patterns in complex datasets'
      ],
      additionalContent: {
        detailedDescription: `Machine Learning bridges the gap between traditional programming and intelligent systems. Instead of explicitly coding every step, ML enables systems to adapt and find solutions based on patterns in data. This transformative approach underpins many modern applications like recommendation engines, autonomous vehicles, and speech recognition systems.`,
        keyConcepts: [
          'Training and Testing Data: Training data is used to build the model, while testing data evaluates its performance.',
          'Feature Engineering: Selecting and transforming data attributes to improve model predictions.',
          'Evaluation Metrics: Metrics like accuracy, precision, and recall assess model performance.'
        ]
      }
    }
  },
  {
    id: 'supervised',
    title: 'Supervised Learning',
    icon: TrendingUp,
    color: 'purple',
    content: {
      description: 'Supervised learning involves training a model on a labeled dataset. Each input data point has a corresponding output label, and the model learns to map inputs to outputs.',
      algorithms: [
        'Linear Regression',
        'Logistic Regression',
        'Decision Trees',
        'Support Vector Machines (SVM)',
        'Neural Networks'
      ],
      code: `# Example: Linear Regression in Python
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)`
    }
  },
  {
    id: 'unsupervised',
    title: 'Unsupervised Learning',
    icon: Grid,
    color: 'green',
    content: {
      description: 'Unsupervised learning deals with data that has no labels. The model learns patterns and structures from the input data on its own.',
      algorithms: [
        // 'K-Means Clustering',
        // 'Hierarchical Clustering',
        // 'Principal Component Analysis (PCA)',
        // 'Autoencoders'
      ],
      // code: `# Example: K-Means Clustering in Python
// from sklearn.cluster import KMeans
// kmeans = KMeans(n_clusters=3)
// kmeans.fit(data)
// labels = kmeans.labels_`
    }
  },
  {
    id: 'visualization',
    title: 'Visualizing ML',
    icon: BarChart2,
    color: 'indigo',
    content: {
      description: 'Visual aids like graphs can help users understand the behavior and performance of machine learning models.'
    }
  }
];

const MLAccuracyGraph = () => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <h3 className="text-lg font-semibold mb-4">Model Performance Over Time</h3>
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={mlAccuracyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="training"
            stroke="#10B981"
            name="Training Accuracy"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="validation"
            stroke="#6366F1"
            name="Validation Accuracy"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const MachineLearning = () => {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedTopicData = topics.find(topic => topic.id === selectedTopic);

  const renderContent = (topic) => {
    const colorClass = `border-${topic.color}-500`;
  
    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className={`border-l-4 ${colorClass} p-8`}>
            <div className="flex items-center mb-4">
              <topic.icon className={`w-6 h-6 text-${topic.color}-500 mr-2`} />
              <h2 className="text-2xl font-bold">{topic.title}</h2>
            </div>
            <p className="text-gray-600 mb-6">{topic.content.description}</p>
    
            {/* New Section: Labeled Data */}
            {topic.id === 'supervised' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Labeled Data:</h4>
                <p className="text-gray-700 mb-4">
                  Labeled data is a dataset where each input (data point) is associated with the correct output (label). In supervised learning, the model is trained using this labeled data to learn the relationship between the input features and the output labels.
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                <LabeledDataGraph />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            )}
    
            {/* New Section: Feature Engineering */}
           
            {topic.id === 'supervised' && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Feature Engineering:</h4>
                <p className="text-gray-700 mb-4">
                  Feature engineering involves selecting and transforming input data to improve model performance. The goal is to extract meaningful features from raw data that help the model make accurate predictions. Feature scaling, normalization, and dimensionality reduction are common techniques used in this process.
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={Feature} 
                    alt="Feature Engineering Example" 
                    className="w-full object-cover object-center rounded-xl"
                    style={{ height: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            )}
            {/* {New section for Labels} */}
            {topic.id === 'supervised' && (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
    <h4 className="font-semibold text-blue-800 mb-2">Labels:</h4>
    <p className="text-gray-700 mb-4">
      In supervised learning, labels are the target output that the model aims to predict. For every input data point, there is an associated label that represents the correct output. The model uses these labels during training to learn the mapping between inputs and the correct outputs. Labels are essential for training the model and evaluating its performance.
    </p>
    <p className="text-gray-700 mb-4">
      For example, in a classification problem, the label might be a category (e.g., "cat" or "dog"), while in a regression problem, the label might be a continuous value (e.g., a house price).
    </p>
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img 
        src={LabelldataImg} 
        alt="Labels Example" 
        className="w-full object-cover object-center rounded-xl"
        style={{ height: '400px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  </div>
)}


    {/* Algorithm */}
          {topic.id === 'supervised' && (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
    <h4 className="font-semibold text-blue-800 mb-2">Algorithm:</h4>
    <p className="text-gray-700 mb-4">
    An algorithm is a finite set of well-defined instructions designed to solve a specific problem or perform a computation. In the context of machine learning, algorithms are the backbone of learning processes, determining how models analyze data and make predictions.
    </p>
    <p className="text-gray-700 mb-4">
      {/* For example, in a classification problem, the label might be a category (e.g., "cat" or "dog"), while in a regression problem, the label might be a continuous value (e.g., a house price). */}
    </p>
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img 
        src={Algorithm} 
        alt="Algotirhm" 
        className="w-full object-cover object-center rounded-xl"
        style={{ height: '400px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  </div>
)}
 {topic.id === 'supervised' && (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
    <h4 className="font-semibold text-blue-800 mb-2">Labels:</h4>
    <p className="text-gray-700 mb-4">
      In supervised learning, labels are the target output that the model aims to predict. For every input data point, there is an associated label that represents the correct output. The model uses these labels during training to learn the mapping between inputs and the correct outputs. Labels are essential for training the model and evaluating its performance.
    </p>
    <p className="text-gray-700 mb-4">
      For example, in a classification problem, the label might be a category (e.g., "cat" or "dog"), while in a regression problem, the label might be a continuous value (e.g., a house price).
    </p>
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img 
        src={LabelldataImg} 
        alt="Labels Example" 
        className="w-full object-cover object-center rounded-xl"
        style={{ height: '400px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  </div>
)}
 {topic.id === 'supervised' && (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
    <h4 className="font-semibold text-blue-800 mb-2">Labels:</h4>
    <p className="text-gray-700 mb-4">
      In supervised learning, labels are the target output that the model aims to predict. For every input data point, there is an associated label that represents the correct output. The model uses these labels during training to learn the mapping between inputs and the correct outputs. Labels are essential for training the model and evaluating its performance.
    </p>
    <p className="text-gray-700 mb-4">
      For example, in a classification problem, the label might be a category (e.g., "cat" or "dog"), while in a regression problem, the label might be a continuous value (e.g., a house price).
    </p>
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <img 
        src={LabelldataImg} 
        alt="Labels Example" 
        className="w-full object-cover object-center rounded-xl"
        style={{ height: '400px' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    </div>
  </div>
)}   


        {/* Unsupervised Learning */}
    
        {topic.id === 'unsupervised' && (
          <div>
          <Intro />
          <KClustering />
          <DBSCAN />
          <DimensionalityReduction />
          <PCA />
          <TSNE />
         
          <AnomalyDetection />
          <SelfOrganizingMaps />
         </div>
)}


            {/* Existing Content */}
            {topic.content.features && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {topic.content.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
    
            {topic.content.additionalContent && (
              <div className="space-y-8">
                <p className="text-gray-700">{topic.content.additionalContent.detailedDescription}</p>
    
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Key Concepts:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-3">
                    {topic.content.additionalContent.keyConcepts.map((concept, index) => (
                      <li key={index}>{concept}</li>
                    ))}
                  </ul>
                </div>
    
                <div className="space-y-4">
                  <h3 className="font-semibold">Performance Metrics:</h3>
                  <MLAccuracyGraph />
                </div>
    
                {topic.id === 'intro' && (
                  <div className="mt-8">
                    <h3 className="font-semibold mb-4">Visual Overview:</h3>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <img 
                        src={machine_learning_img} 
                        alt="Machine Learning Overview" 
                        className="w-full object-cover object-center rounded-xl"
                        style={{ height: '400px' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {topic.content.algorithms && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Algorithms:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {topic.content.algorithms.map((algorithm, index) => (
                      <li key={index}>{algorithm}</li>
                    ))}
                  </ul>
                </div>
                {topic.content.code && (
                  <div className="bg-gray-900 rounded-lg p-4">
                    <code className="text-green-400 whitespace-pre-line">
                      {topic.content.code}
                    </code>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      );
    };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center space-x-2 text-sm mb-4">
            <a href="/resources" className="hover:text-emerald-200">Resources</a>
            <ChevronRight className="w-4 h-4" />
            <a href="/resources/beginner" className="hover:text-emerald-200">Beginner Path</a>
            <ChevronRight className="w-4 h-4" />
            <span>Machine Learning Basics</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Machine Learning</h1>
          <p className="text-xl opacity-90">Learn the foundations of Machine Learning step by step</p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <button
            className="lg:hidden mb-4 p-2 bg-white rounded-lg shadow-lg"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <div className="flex items-center">
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              <span className="ml-2">Toggle Topics</span>
            </div>
          </button>

          {/* Left sidebar - keeping it the same */}
          <div className={`lg:block ${isSidebarOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-6">Course Content</h2>
              <nav className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      setSelectedTopic(topic.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`
                      w-full flex items-center space-x-2 px-4 py-2 rounded-lg
                      ${selectedTopic === topic.id 
                        ? `bg-${topic.color}-100 text-${topic.color}-700` 
                        : 'hover:bg-gray-100'}
                    `}
                  >
                    <topic.icon className={`w-6 h-6 text-${topic.color}-500`} />
                    <span>{topic.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main content - adding max-width */}
          <div className="lg:col-span-3">
            <div className="max-w-4xl"> {/* Added max-width constraint */}
              {renderContent(selectedTopicData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MachineLearning;