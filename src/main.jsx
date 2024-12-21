import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use react-router-dom
import './index.css';
import App from './App.jsx';
import Basic from './Basic/Basic.jsx';
 // Ensure this is the correct import path
import ResourcesPage from './ResourcesPage.jsx'; // Ensure this path is correct
import Data_Analysis from './Basic/Data_Analysis.jsx';
// Get the root element from your HTML
const root = document.getElementById('root');

// Create the React root
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/basic" element={<Basic />} />
        <Route path="/resources/Data_Analysis" element={<Data_Analysis />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
