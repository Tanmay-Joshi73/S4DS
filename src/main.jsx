import React from 'react';
import { Suspense ,lazy} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use react-router-dom
import './index.css';
import App from './App.jsx';
// import Basic from './Basic/Basic.jsx';
 // Ensure this is the correct import path
// import ResourcesPage from './ResourcesPage.jsx'; // Ensure this path is correct
const MachineLearning_Page=lazy(()=> import('./Basic/MachineLearning.jsx'))
const ResourcesPage=lazy(()=>import('./ResourcesPage.jsx'))
const Basic=lazy(()=>import('./Basic/Basic.jsx'))
const Data_Analysis=lazy(()=>import('./Basic/Data_Analysis.jsx'))
const Playground_Page=lazy(()=>import('./Playground/Playgroundd.jsx'))
// import Data_Analysis from './Basic/Data_Analysis.jsx';
import { LayoutTemplate } from 'lucide-react';
// Get the root element from your HTML
const root = document.getElementById('root');

// Create the React root
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/basic" element={<Basic />} />
        <Route path="/resources/Data_Analysis" element={<Data_Analysis />} />
        <Route path='/resources/MachineLearning' element={<MachineLearning_Page/>}/>
        <Route path='/Playground' element={<Playground_Page/>}/>
      </Routes>
    </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
