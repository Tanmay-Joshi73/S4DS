import React from 'react';

const LoadingSpinner = ({ size = '16', color = 'blue-500', message = 'Loading...' }) => {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-gray-900/20" 
      aria-label="Loading Spinner" 
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div 
          className={`w-${size} h-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin`} 
        />
        {/* Loading Message */}
        <div className="text-lg font-medium text-gray-700">
          {message}
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
