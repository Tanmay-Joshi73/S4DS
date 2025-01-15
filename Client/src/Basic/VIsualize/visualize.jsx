import React, { useState } from 'react';
import { BookOpen, Info, ChevronDown, ChevronUp } from 'lucide-react';
import Data_VIsualiaze_Image from "../../assets/Data_VIsualiaze_IMG.png"
import RelationShipImage from "../../assets/Relationship.png"
import Category from "../../assets/Categorial_Data.png"
const DataDistribution = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
            <div className="border-l-4 border-green-500 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-purple-500 mr-2" />
                        <h2 className="text-2xl font-bold">Data Distribution</h2>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Info className="w-4 h-4 mr-1" />
                        <span>Histograms & Density Plots</span>
                    </div>
                </div>

                <div className="text-gray-600 mb-8">
                    <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-3 text-purple-800">Concept:</h3>
                        <p className="leading-relaxed">
                            Data distribution visualizations like histograms and density plots help in understanding the spread and shape of data. Histograms show the frequency of data within intervals (bins), while density plots smooth the distribution to display probability density.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <button
                        onClick={() => setIsCodeVisible(!isCodeVisible)}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <span className="text-lg font-semibold">Implementation Code</span>
                        {isCodeVisible ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </button>

                    {isCodeVisible && (
                        <>
                            <div className="bg-gray-900 rounded-lg p-6 mt-4 overflow-x-auto">
                                <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Generate sample data
np.random.seed(42)
data = np.random.normal(loc=0, scale=1, size=1000)

# Create figure with subplots
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

# Plot Histogram
ax1.hist(data, bins=30, alpha=0.6, color='skyblue', edgecolor='black')
ax1.set_title('Histogram of Data')
ax1.set_xlabel('Value')
ax1.set_ylabel('Frequency')

# Plot Density Plot
sns.kdeplot(data=data, ax=ax2, shade=True, color='red')
ax2.set_title('Density Plot of Data')
ax2.set_xlabel('Value')
ax2.set_ylabel('Density')

plt.tight_layout()
plt.show()`}
                                </pre>
                            </div>

                            <div className="bg-green-50 border-l-4 border-green-500 p-6 mt-4">
                                <h4 className="font-semibold text-green-800 mb-3">Code Explanation:</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-3">
                                    <li><code className="bg-green-100 px-2 py-1 rounded">np.random.normal</code>: Generates normally distributed data with a mean of 0 and standard deviation of 1.</li>
                                    <li><code className="bg-green-100 px-2 py-1 rounded">plt.subplots</code>: Creates a figure with two vertically stacked subplots for better comparison.</li>
                                    <li><code className="bg-green-100 px-2 py-1 rounded">ax1.hist</code>: Plots a histogram of the data with customized appearance.</li>
                                    <li><code className="bg-green-100 px-2 py-1 rounded">sns.kdeplot</code>: Creates a density plot with shaded area for better visualization.</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Output Visualization:</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <img
                            src={Data_VIsualiaze_Image}
                            alt="Data Distribution Visualization"
                            className="max-w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Example visualization of normal distribution with histogram and density plot
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


const RelationshipVisualization = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
            <div className="border-l-4 border-blue-500 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
                        <h2 className="text-2xl font-bold">Relationship Visualization</h2>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Info className="w-4 h-4 mr-1" />
                        <span>Scatter Plots & Heatmaps</span>
                    </div>
                </div>

                <div className="text-gray-600 mb-8">
                    <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold mb-3 text-blue-800">Concept:</h3>
                        <p className="leading-relaxed">
                            Relationship visualizations help identify connections between variables. Scatter plots reveal correlations between two continuous variables, while heatmaps are useful for visualizing correlation matrices between multiple features.
                        </p>
                    </div>
                </div>

                <div className="mb-8">
                    <button
                        onClick={() => setIsCodeVisible(!isCodeVisible)}
                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <span className="text-lg font-semibold">Implementation Code</span>
                        {isCodeVisible ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </button>

                    {isCodeVisible && (
                        <>
                            <div className="bg-gray-900 rounded-lg p-6 mt-4 overflow-x-auto">
                                <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

# Generate sample data
np.random.seed(42)
x = np.random.rand(100)
y = x * 2 + np.random.normal(0, 0.1, 100)

# Scatter Plot
plt.figure(figsize=(8, 6))
plt.scatter(x, y, alpha=0.7, color='blue', edgecolor='black')
plt.title('Scatter Plot')
plt.xlabel('X Variable')
plt.ylabel('Y Variable')
plt.grid(True)
plt.show()

# Heatmap
data = np.random.rand(10, 10)
sns.heatmap(data, annot=True, cmap='coolwarm')
plt.title('Heatmap')
plt.show()`}
                                </pre>
                            </div>

                            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-4">
                                <h4 className="font-semibold text-blue-800 mb-3">Code Explanation:</h4>
                                <ul className="list-disc list-inside text-gray-700 space-y-3">
                                    <li><code className="bg-blue-100 px-2 py-1 rounded">plt.scatter</code>: Creates a scatter plot to visualize relationships between two continuous variables.</li>
                                    <li><code className="bg-blue-100 px-2 py-1 rounded">sns.heatmap</code>: Generates a heatmap to visualize data correlations with a color gradient.</li>
                                    <li><code className="bg-blue-100 px-2 py-1 rounded">np.random.normal</code>: Adds noise to simulate realistic data for scatter plot.</li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Output Visualization:</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <img
                            src={RelationShipImage}
                            alt="Relationship Visualization"
                            className="max-w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Example visualization of a scatter plot and a heatmap showing relationships between variables.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CategoricalDataVisualization = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
            <div className="border-l-4 border-blue-500 p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <BookOpen className="w-6 h-6 text-blue-500 mr-2" />
                        <h2 className="text-2xl font-bold">Categorical Data Visualization</h2>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <Info className="w-4 h-4 mr-1" />
                        <span>Bar Plot, Count Plot, Pie Chart</span>
                    </div>
                </div>

                <div className="text-gray-600 mb-8">
                    <p>Visualizations like bar plots, count plots, and pie charts help compare discrete categories and understand their distributions.</p>
                </div>

                <button
                    onClick={() => setIsCodeVisible(!isCodeVisible)}
                    className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                    <span className="text-lg font-semibold">Implementation Code</span>
                    {isCodeVisible ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {isCodeVisible && (
                    <div className="bg-gray-900 rounded-lg p-6 mt-4 overflow-x-auto">
                        <pre className="text-green-400 font-mono text-sm leading-relaxed">
{`import seaborn as sns
import matplotlib.pyplot as plt

data = sns.load_dataset('titanic')

# Bar Plot
sns.barplot(x='class', y='fare', data=data)
plt.title('Average Fare by Class')
plt.show()

# Count Plot
sns.countplot(x='embarked', data=data)
plt.title('Port of Embarkation Count')
plt.show()

# Pie Chart
data['class'].value_counts().plot.pie(autopct='%1.1f%%')
plt.title('Passenger Class Distribution')
plt.show()`}
                        </pre>
                    </div>
                )}

                <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Output Visualization:</h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <img 
                            src={Category} 
                            alt="Categorical Data Visualization" 
                            className="max-w-full h-auto rounded-lg"
                        />
                        <p className="text-sm text-gray-500 mt-2 text-center">
                            Example visualization of bar plots, count plots, and pie charts showing categorical data distributions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};


// 2. Multivariate Visualization Component
// const MultivariateVisualization = () => {
//     const [isCodeVisible, setIsCodeVisible] = useState(false);

//     return (
//         <section className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
//             <div className="border-l-4 border-purple-500 p-8">
//                 <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center">
//                         <BookOpen className="w-6 h-6 text-purple-500 mr-2" />
//                         <h2 className="text-2xl font-bold">Multivariate Visualization</h2>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                         <Info className="w-4 h-4 mr-1" />
//                         <span>Bubble, Parallel Coordinates, Radar Charts</span>
//                     </div>
//                 </div>
//                 <button
//                     onClick={() => setIsCodeVisible(!isCodeVisible)}
//                     className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
//                     <span>Implementation Code</span>
//                     {isCodeVisible ? <ChevronUp /> : <ChevronDown />}
//                 </button>
//                 {isCodeVisible && (
//                     <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
// {`import matplotlib.pyplot as plt
// import pandas as pd
// from pandas.plotting import parallel_coordinates

// # Bubble Chart
// plt.scatter(x=[1,2,3], y=[4,5,6], s=[100, 200, 300])
// plt.title('Bubble Chart')
// plt.show()

// # Parallel Coordinates
// data = pd.read_csv('iris.csv')
// parallel_coordinates(data, 'species')
// plt.title('Parallel Coordinates Plot')
// plt.show()`}
//                     </pre>
//                 )}
//             </div>
//         </section>
//     );
// };

// 3. Time Series Visualization Component
// const TimeSeriesVisualization = () => {
//     const [isCodeVisible, setIsCodeVisible] = useState(false);

//     return (
//         <section className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-8">
//             <div className="border-l-4 border-green-500 p-8">
//                 <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center">
//                         <BookOpen className="w-6 h-6 text-green-500 mr-2" />
//                         <h2 className="text-2xl font-bold">Time Series Visualization</h2>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500">
//                         <Info className="w-4 h-4 mr-1" />
//                         <span>Line, Area, Lag Plots</span>
//                     </div>
//                 </div>
//                 <button
//                     onClick={() => setIsCodeVisible(!isCodeVisible)}
//                     className="flex items-center justify-between w-full px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200">
//                     <span>Implementation Code</span>
//                     {isCodeVisible ? <ChevronUp /> : <ChevronDown />}
//                 </button>
//                 {isCodeVisible && (
//                     <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
// {`import matplotlib.pyplot as plt
// import pandas as pd
// from pandas.plotting import lag_plot

// data = pd.Series([1, 3, 5, 7, 9, 11])

// # Line Plot
// data.plot(title='Line Plot')
// plt.show()

// # Area Plot
// data.plot.area(title='Area Plot')
// plt.show()

// # Lag Plot
// lag_plot(data)
// plt.title('Lag Plot')
// plt.show()`}
//                     </pre>
//                 )}
//             </div>
//         </section>
//     );
// };



export { DataDistribution ,RelationshipVisualization,CategoricalDataVisualization};