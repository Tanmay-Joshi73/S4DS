import React from "react"
import Kclustering_Image from '../../assets/KClustering.png'
import DBSCAN_Image from "../../assets/DBSCAN.png"
import PCA_Image from "../../assets/PCA.png"
import TSNE_Image from "../../assets/TSNE.png"
import AutoEncoder_Image from "../../assets/Autoencoder.png"
import Anamoly_Image from "../../assets/Anamoly.png"
const Intro = () => {
    return (
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">

            <p className="text-gray-700 mb-4">
                Common algorithms include Clustering (e.g., K-Means, DBSCAN) for grouping data and Dimensionality Reduction (e.g., PCA, t-SNE) for simplifying complex data. Applications range from customer segmentation to anomaly detection and recommendation systems.
            </p>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img

                    alt="Unsupervised Learning"
                    className="w-full object-cover object-center rounded-xl"
                    style={{ height: '400px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
        </div>
    )
}
import { BookOpen } from 'lucide-react';

const KClustering = () => {
    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-blue-500 p-8">
                <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                    <h2 className="text-2xl font-bold">K-Means Clustering</h2>
                </div>

                <div className="text-gray-600 mb-6">
                    <h3 className="text-lg font-semibold mb-3">Concept:</h3>
                    <p className="mb-4">
                        K-Means clustering partitions the data into k clusters, where each data point belongs to the cluster
                        with the nearest mean. The algorithm iterates through the following steps:
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Initialization:</strong> Choose k initial centroids randomly.</li>
                        <li><strong>Assignment:</strong> Assign each data point to the nearest centroid.</li>
                        <li><strong>Update:</strong> Recalculate the centroids as the mean of all data points assigned to each cluster.</li>
                        <li><strong>Repeat</strong> steps 2 and 3 until convergence (when the centroids do not change).</li>
                    </ol>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Implementation Code:</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                        <pre className="text-green-400 font-mono whitespace-pre">
                            {`import numpy as np
    import matplotlib.pyplot as plt
    from sklearn.cluster import KMeans
    from sklearn.datasets import make_blobs
    
    # Generate sample data
    X, y = make_blobs(n_samples=300, centers=4, random_state=42, cluster_std=1.0)
    
    # Apply K-Means
    kmeans = KMeans(n_clusters=4, random_state=42)
    kmeans.fit(X)
    
    # Plot results
    plt.scatter(X[:, 0], X[:, 1], c=kmeans.labels_, cmap='viridis', s=50)
    plt.scatter(kmeans.cluster_centers_[:, 0], 
               kmeans.cluster_centers_[:, 1], 
               color='red', marker='x', s=200)
    plt.title("K-Means Clustering")
    plt.xlabel("Feature 1")
    plt.ylabel("Feature 2")
    plt.show()`}</pre>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><code className="bg-blue-100 px-1 rounded">make_blobs</code>: Generates a synthetic dataset with 300 samples and 4 centers (clusters)</li>
                            <li><code className="bg-blue-100 px-1 rounded">KMeans(n_clusters=4)</code>: Initializes the K-Means model with 4 clusters</li>
                            <li><code className="bg-blue-100 px-1 rounded">kmeans.fit(X)</code>: Trains the model on the dataset</li>
                            <li>The plot shows data points colored by cluster assignment, with red X marks indicating cluster centroids</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">

                            {/* Place your output image here */}
                            <img
                                src={Kclustering_Image}
                                alt="K-Means Clustering Output"
                                className="max-w-full h-auto"
                            />

                            {/* <div className="mt-4">
                    <p className="text-sm text-gray-600">The plot above shows:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                      <li>Colored points represent different cluster assignments</li>
                      <li>Red X marks show the final centroid positions</li>
                      <li>Clear separation between the four clusters demonstrates successful clustering</li>
                    </ul>
                  </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};




const DBSCAN = () => {
    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden mt-5">
            <div className="border-l-4 border-blue-500 p-8">
                <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                    <h2 className="text-2xl font-bold">DBSCAN (Density-Based Spatial Clustering of Applications with Noise)</h2>
                </div>

                <div className="text-gray-600 mb-6">
                    <h3 className="text-lg font-semibold mb-3">Concept:</h3>
                    <p className="mb-4">
                        DBSCAN is a clustering algorithm that groups together points that are closely packed, marking as outliers points that lie alone in low-density regions.
                        The algorithm works by defining a cluster as a set of points that are directly reachable from each other. The steps are as follows:
                    </p>

                    <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Core Points:</strong> Points that have a minimum number of points within a specified radius.</li>
                        <li><strong>Border Points:</strong> Points that are within the neighborhood of a core point but do not have enough points themselves to be considered core points.</li>
                        <li><strong>Noise Points:</strong> Points that are not reachable from any core points.</li>
                        <li><strong>Expand:</strong> The algorithm iteratively expands clusters by finding reachable points and grouping them together.</li>
                    </ol>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Implementation Code:</h3>
                    <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
                        <pre className="text-green-400 font-mono whitespace-pre">
                            {`import numpy as np
import matplotlib.pyplot as plt
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_blobs

# Generate sample data
X, y = make_blobs(n_samples=300, centers=4, random_state=42, cluster_std=1.0)

# Apply DBSCAN
dbscan = DBSCAN(eps=0.3, min_samples=10)
dbscan.fit(X)

# Plot results
plt.scatter(X[:, 0], X[:, 1], c=dbscan.labels_, cmap='viridis', s=50)
plt.title("DBSCAN Clustering")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()`}</pre>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><code className="bg-blue-100 px-1 rounded">make_blobs</code>: Generates a synthetic dataset with 300 samples and 4 centers (clusters)</li>
                            <li><code className="bg-blue-100 px-1 rounded">DBSCAN(eps=0.3, min_samples=10)</code>: Initializes the DBSCAN model with a distance threshold (eps) of 0.3 and a minimum number of points (min_samples) required to form a cluster.</li>
                            <li><code className="bg-blue-100 px-1 rounded">dbscan.fit(X)</code>: Trains the model on the dataset</li>
                            <li>The plot shows data points colored by cluster assignment, with points labeled as noise (labeled -1) not included in any cluster.</li>
                        </ul>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
                        <div className="bg-white border border-gray-200 rounded-lg p-4">
                            {/* Place your output image here */}
                            <img
                                src={DBSCAN_Image}
                                alt="DBSCAN Clustering Output"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const DimensionalityReduction = () => {
    return (
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="border-l-4 border-blue-500 p-8">
                <div className="flex items-center mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
                    <h2 className="text-2xl font-bold">Dimensionality Reduction</h2>
                </div>

                <div className="text-gray-600 mb-6">
                    <h3 className="text-lg font-semibold mb-3">Concept:</h3>
                    <p className="mb-4">
                        Dimensionality reduction is a technique used to reduce the number of features (dimensions) in a dataset while maintaining
                        as much of the data's variance or information as possible. This is typically done when dealing with high-dimensional data
                        to improve model performance and reduce computational complexity.
                    </p>

                    <h3 className="text-lg font-semibold mt-6 mb-3">Key Techniques:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Principal Component Analysis (PCA):</strong> A linear technique that projects data onto the directions of maximum variance.</li>
                        <li><strong>t-SNE:</strong> A nonlinear technique that is often used for data visualization in 2D/3D.</li>
                        <li><strong>Linear Discriminant Analysis (LDA):</strong> A supervised dimensionality reduction technique used for classification tasks.</li>
                        <li><strong>Autoencoders:</strong> A neural network-based approach that learns a compressed representation of the data.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};


const PCA = () => {
    return (
      <section className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-l-4 border-blue-500 p-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
            <h2 className="text-2xl font-bold">Principal Component Analysis (PCA)</h2>
          </div>
  
          <div className="text-gray-600 mb-6">
            <h3 className="text-lg font-semibold mb-3">Concept:</h3>
            <p className="mb-4">
              PCA is a linear dimensionality reduction technique used to reduce the number of dimensions in a dataset while preserving
              as much variance as possible. It does so by transforming the original data into a new coordinate system, where the axes
              (called principal components) correspond to the directions of maximum variance in the data.
            </p>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Steps in PCA:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Compute Covariance Matrix:</strong> This step calculates how much each of the features vary with each other.</li>
              <li><strong>Compute Eigenvalues and Eigenvectors:</strong> Eigenvectors represent the directions of maximum variance, while eigenvalues indicate the magnitude of variance along those directions.</li>
              <li><strong>Sort the Eigenvalues:</strong> Sort the eigenvalues in descending order and pick the top k eigenvectors corresponding to the k largest eigenvalues.</li>
              <li><strong>Project the Data:</strong> Finally, project the original data onto the k eigenvectors to obtain the lower-dimensional representation.</li>
            </ol>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Implementation Code:</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-green-400 font-mono whitespace-pre">
  {`import numpy as np
  import matplotlib.pyplot as plt
  from sklearn.decomposition import PCA
  from sklearn.datasets import make_blobs
  
  # Generate sample data
  X, y = make_blobs(n_samples=300, centers=4, random_state=42, cluster_std=1.0)
  
  # Apply PCA
  pca = PCA(n_components=2)
  X_pca = pca.fit_transform(X)
  
  # Plot results
  plt.scatter(X_pca[:, 0], X_pca[:, 1], c=y, cmap='viridis', s=50)
  plt.title("PCA - Principal Component Analysis")
  plt.xlabel("Principal Component 1")
  plt.ylabel("Principal Component 2")
  plt.show()`}</pre>
            </div>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><code className="bg-blue-100 px-1 rounded">make_blobs</code>: Generates a synthetic dataset with 300 samples and 4 centers (clusters).</li>
                <li><code className="bg-blue-100 px-1 rounded">PCA(n_components=2)</code>: Reduces the dimensionality of the data to 2 components.</li>
                <li><code className="bg-blue-100 px-1 rounded">pca.fit_transform(X)</code>: Applies PCA and transforms the data into a lower-dimensional space.</li>
                <li>The plot shows the reduced data in a 2D space, with points colored according to their cluster assignment.</li>
              </ul>
            </div>
  
            {/* Output Image Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                
                <img 
                  src={PCA_Image} 
                  alt="PCA Clustering Output" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const TSNE = () => {
    return (
      <section className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-l-4 border-blue-500 p-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
            <h2 className="text-2xl font-bold">t-SNE (t-Distributed Stochastic Neighbor Embedding)</h2>
          </div>
  
          <div className="text-gray-600 mb-6">
            <h3 className="text-lg font-semibold mb-3">Concept:</h3>
            <p className="mb-4">
              t-SNE is a dimensionality reduction technique primarily used for the visualization of high-dimensional data. It maps multi-dimensional data to two or three dimensions for easy visualization, while preserving the local structure of the data. It is particularly useful for visualizing clusters in datasets.
            </p>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Steps in t-SNE:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Pairwise Similarities:</strong> Calculate pairwise similarities between data points in high-dimensional space.</li>
              <li><strong>Low-Dimensional Embedding:</strong> Map the high-dimensional points to lower-dimensional space, preserving similarities.</li>
              <li><strong>Minimize Divergence:</strong> Minimize the divergence between the high- and low-dimensional probability distributions using gradient descent.</li>
            </ol>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Implementation Code:</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-green-400 font-mono whitespace-pre">
  {`import numpy as np
  import matplotlib.pyplot as plt
  from sklearn.manifold import TSNE
  from sklearn.datasets import make_blobs
  
  # Generate sample data
  X, y = make_blobs(n_samples=300, centers=4, random_state=42, cluster_std=1.0)
  
  # Apply t-SNE
  tsne = TSNE(n_components=2, random_state=42)
  X_tsne = tsne.fit_transform(X)
  
  # Plot results
  plt.scatter(X_tsne[:, 0], X_tsne[:, 1], c=y, cmap='viridis', s=50)
  plt.title("t-SNE Visualization")
  plt.xlabel("Component 1")
  plt.ylabel("Component 2")
  plt.show()`}</pre>
            </div>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><code className="bg-blue-100 px-1 rounded">make_blobs</code>: Generates synthetic data with 300 samples and 4 centers (clusters).</li>
                <li><code className="bg-blue-100 px-1 rounded">TSNE(n_components=2)</code>: Initializes t-SNE to reduce dimensions to 2 for visualization.</li>
                <li><code className="bg-blue-100 px-1 rounded">tsne.fit_transform(X)</code>: Applies t-SNE to the data and reduces it to 2D space.</li>
                <li>The plot shows data points in 2D with colors indicating different clusters.</li>
              </ul>
            </div>
  
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                {/* Replace the src below with your t-SNE output image */}
                <img 
                  src={TSNE_Image} 
                  alt="t-SNE Visualization Output" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };


  const Autoencoder = () => {
    return (
      <section className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-l-4 border-blue-500 p-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
            <h2 className="text-2xl font-bold">Autoencoders</h2>
          </div>
  
          <div className="text-gray-600 mb-6">
            <h3 className="text-lg font-semibold mb-3">Concept:</h3>
            <p className="mb-4">
              An Autoencoder is a type of artificial neural network used for unsupervised learning. It aims to learn a compressed representation of input data. The encoder compresses the data, and the decoder reconstructs it, ideally reproducing the original data.
            </p>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Steps in Autoencoders:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li><strong>Encoder:</strong> Maps the input to a lower-dimensional latent space.</li>
              <li><strong>Decoder:</strong> Reconstructs the input data from the compressed representation.</li>
              <li><strong>Loss Function:</strong> Minimizes the reconstruction error, often using mean squared error.</li>
            </ol>
  
            <h3 className="text-lg font-semibold mt-6 mb-3">Implementation Code:</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-green-400 font-mono whitespace-pre">
  {`import numpy as np
  import matplotlib.pyplot as plt
  from sklearn.datasets import load_digits
  from sklearn.model_selection import train_test_split
  from sklearn.preprocessing import MinMaxScaler
  from keras.models import Model
  from keras.layers import Input, Dense
  
  # Load data
  digits = load_digits()
  X = digits.data
  
  # Normalize data
  scaler = MinMaxScaler()
  X_scaled = scaler.fit_transform(X)
  
  # Train-test split
  X_train, X_test = train_test_split(X_scaled, test_size=0.2, random_state=42)
  
  # Build autoencoder model
  input_layer = Input(shape=(X_train.shape[1],))
  encoded = Dense(32, activation='relu')(input_layer)
  decoded = Dense(X_train.shape[1], activation='sigmoid')(encoded)
  autoencoder = Model(input_layer, decoded)
  
  autoencoder.compile(optimizer='adam', loss='mean_squared_error')
  
  # Train the model
  autoencoder.fit(X_train, X_train, epochs=50, batch_size=256, validation_data=(X_test, X_test))
  
  # Predict and plot results
  X_pred = autoencoder.predict(X_test)
  plt.figure(figsize=(8, 4))
  plt.subplot(1, 2, 1)
  plt.imshow(X_test[0].reshape(8, 8), cmap='gray')
  plt.title("Original Image")
  plt.subplot(1, 2, 2)
  plt.imshow(X_pred[0].reshape(8, 8), cmap='gray')
  plt.title("Reconstructed Image")
  plt.show()`}</pre>
            </div>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><code className="bg-blue-100 px-1 rounded">MinMaxScaler</code>: Scales the input data to the range [0, 1].</li>
                <li><code className="bg-blue-100 px-1 rounded">autoencoder.fit</code>: Trains the autoencoder model.</li>
                <li>The plot shows an original digit image and its reconstructed version after training the autoencoder.</li>
              </ul>
            </div>
  
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                {/* Replace the src below with your Autoencoder output image */}
                <img 
                  src={AutoEncoder_Image}
                  alt="Autoencoder Reconstruction Output" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

//   const FPGrowth = () => {
//     return (
//       <section className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="border-l-4 border-blue-500 p-8">
//           <div className="flex items-center mb-4">
//             <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
//             <h2 className="text-2xl font-bold">FP-Growth Algorithm</h2>
//           </div>
  
//           <div className="text-gray-600 mb-6">
//             <h3 className="text-lg font-semibold mb-3">Concept:</h3>
//             <p className="mb-4">
//               FP-Growth is an efficient algorithm for mining frequent itemsets without generating candidate itemsets like Apriori. It uses a data structure called FP-tree to store compressed representation of the dataset.
//             </p>
  
//             <ol className="list-decimal pl-6 space-y-2">
//               <li><strong>Step 1:</strong> Build the FP-tree by scanning the dataset.</li>
//               <li><strong>Step 2:</strong> Mine frequent itemsets from the FP-tree.</li>
//               <li><strong>Step 3:</strong> Generate association rules from the itemsets.</li>
//             </ol>
//           </div>
  
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-3">Implementation Code:</h3>
//             <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
//               <pre className="text-green-400 font-mono whitespace-pre">
//   {`from mlxtend.frequent_patterns import fpgrowth, association_rules
//   import pandas as pd
  
//   # Example dataset (transactions)
//   data = {
//       'milk': [1, 0, 1, 1, 0],
//       'bread': [1, 1, 1, 0, 1],
//       'butter': [1, 1, 0, 1, 0],
//       'cheese': [0, 1, 1, 1, 1]
//   }
//   df = pd.DataFrame(data)
  
//   # Applying FP-Growth
//   frequent_itemsets = fpgrowth(df, min_support=0.5, use_colnames=True)
  
//   # Generating association rules
//   rules = association_rules(frequent_itemsets, metric="lift", min_threshold=1)
//   print(rules)
//   `}
//               </pre>
//             </div>
  
//             <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
//               <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
//               <ul className="list-disc list-inside text-gray-700 space-y-2">
//                 <li><code className="bg-blue-100 px-1 rounded">fpgrowth()</code>: Identifies frequent itemsets using FP-Growth algorithm.</li>
//                 <li><code className="bg-blue-100 px-1 rounded">association_rules()</code>: Generates association rules from frequent itemsets.</li>
//               </ul>
//             </div>
  
//             <div className="mt-6">
//               <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
//               <div className="bg-white border border-gray-200 rounded-lg p-4">
//                 <img 
//                   src="FPGrowth_Output_Image" 
//                   alt="FP-Growth Output" 
//                   className="max-w-full h-auto"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   };

const AnomalyDetection = () => {
    return (
      <section className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="border-l-4 border-blue-500 p-8">
          <div className="flex items-center mb-4">
            <BookOpen className="w-6 h-6 text-emerald-500 mr-2" />
            <h2 className="text-2xl font-bold">Anomaly Detection</h2>
          </div>
  
          <div className="text-gray-600 mb-6">
            <h3 className="text-lg font-semibold mb-3">Concept:</h3>
            <p className="mb-4">
              Anomaly detection refers to the identification of rare items, events, or observations which raise suspicions by differing significantly from the majority of the data.
              Common techniques include the use of statistical models or machine learning algorithms such as Isolation Forest and One-Class SVM.
            </p>
          </div>
  
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Implementation Code (Isolation Forest):</h3>
            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <pre className="text-green-400 font-mono whitespace-pre">
  {`from sklearn.ensemble import IsolationForest
  import numpy as np
  import matplotlib.pyplot as plt
  
  # Generate sample data (Normal and Anomalous points)
  X = np.random.randn(200, 2)
  X_outliers = np.random.uniform(low=-5, high=5, size=(10, 2))
  X_total = np.vstack([X, X_outliers])
  
  # Apply Isolation Forest
  model = IsolationForest(contamination=0.05)
  model.fit(X_total)
  predictions = model.predict(X_total)
  
  # Plot results
  plt.scatter(X_total[:, 0], X_total[:, 1], c=predictions, cmap='coolwarm', s=50)
  plt.title("Anomaly Detection with Isolation Forest")
  plt.xlabel("Feature 1")
  plt.ylabel("Feature 2")
  plt.show()
  `}
              </pre>
            </div>
  
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Code Explanation:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><code className="bg-blue-100 px-1 rounded">IsolationForest()</code>: Detects anomalies by isolating data points that are few and different.</li>
                <li><code className="bg-blue-100 px-1 rounded">predict()</code>: Returns -1 for anomalies and 1 for normal data points.</li>
              </ul>
            </div>
  
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Output Visualization:</h3>
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <img 
                  src={Anamoly_Image} 
                  alt="Anomaly Detection Output" 
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
export { Intro, KClustering, DBSCAN, DimensionalityReduction,PCA,TSNE ,Autoencoder,AnomalyDetection}

