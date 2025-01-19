import React, { useState } from 'react';
import { Play, Download, Copy, RotateCcw, Settings, ChevronRight, Save, Share2, Moon, Sun, Code2, Terminal, X } from 'lucide-react';
import MonacoEditor from '@monaco-editor/react';

const CodePlaygroundModern = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('# Write your code here\n');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const languages = [
    { id: 'python', name: 'Python', icon: '🐍' },
    { id: 'aiml', name: 'AIML', icon: '🤖' },
    { id: 'aids', name: 'AIDS', icon: '📊' },
    { id: 'javascript', name: 'JavaScript', icon: '☕' }
  ];

  const themes = [
    { id: 'default', name: 'Default' },
    { id: 'monokai', name: 'Monokai' },
    { id: 'github', name: 'GitHub' },
  ];

  const handleRun = async () => {
    setIsRunning(true);  // Show loading state
    setOutput("");       // Clear previous output
  
    try {
      const response = await fetch('http://localhost:8000/App/RunPython', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        // ✅ Successful execution
        setOutput(`✅ Output:\n${result.output}`);
      } else {
        // ❌ Error handling with specific error type
        if (result.type === "Syntax/Runtime Error") {
          setOutput(`❌ Syntax/Runtime Error:\n${result.message}`);
        } else if (result.type === "Execution Error") {
          setOutput(`⚠️ Execution Error:\n${result.message}`);
        } else {
          setOutput("❗ Unknown error occurred.");
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setOutput('❗ A network error occurred. Please try again.');
    } finally {
      setIsRunning(false);  // Hide loading state
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleClear = () => {
    setCode('# Write your code here\n');
    setOutput('');
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${selectedLanguage}`;
    a.click();
  };

  return (
    <div className={`w-full min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Top Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} backdrop-blur-sm sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-xl font-bold flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                <Code2 className="w-6 h-6" />
                CodeLab
              </span>
              <div className="ml-10 flex items-center space-x-2">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      selectedLanguage === lang.id
                        ? (isDarkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700')
                        : (isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100')
                    }`}
                  >
                    <span className="mr-2">{lang.icon}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-full transition-colors duration-200 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                title="Settings"
              >
                <Settings size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Action Bar */}
        <div className={`mb-4 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800/90' : 'bg-white'} shadow-lg backdrop-blur-sm transition-all duration-200`}>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`px-4 py-2 rounded-md text-white transition-all duration-200 ${
                isRunning 
                  ? 'bg-gray-500' 
                  : 'bg-blue-600 hover:bg-blue-700 hover:shadow-md hover:shadow-blue-500/20'
              } flex items-center gap-2`}
            >
              <Play size={16} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            <div className="flex items-center gap-1">
              <button
                onClick={handleCopy}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                title="Copy Code"
              >
                <Copy size={16} />
              </button>
              <button
                onClick={handleClear}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                title="Clear Code"
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={handleDownload}
                className={`p-2 rounded-md transition-all duration-200 ${
                  isDarkMode 
                    ? 'hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
                title="Download Code"
              >
                <Download size={16} />
              </button>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                } flex items-center gap-2`}
              >
                <Share2 size={16} />
                Share
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  isDarkMode 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                } flex items-center gap-2`}
              >
                <Save size={16} />
                Save
              </button>
            </div>
          </div>
        </div>

        {/* Editor and Output Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Code Editor Panel */}
          <div className={`rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-200`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center gap-2`}>
              <Code2 className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <h2 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Editor</h2>
            </div>
            <div className="p-4">
              <MonacoEditor
                height="500px"
                language={selectedLanguage}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme={isDarkMode ? 'vs-dark' : 'vs-light'}
                options={{
                  selectOnLineNumbers: true,
                  minimap: { enabled: false },
                  wordWrap: 'on',
                  fontSize: 14,
                  fontFamily: '"JetBrains Mono", monospace',
                }}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className={`rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-200`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center gap-2`}>
              <Terminal className={`w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <h2 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Output</h2>
            </div>
            <div className="p-4">
              <div className={`h-[500px] p-4 font-mono text-sm rounded-md ${
                isDarkMode ? 'bg-gray-900 text-green-400' : 'bg-gray-50 text-green-600'
              } overflow-auto transition-colors duration-200`}>
                {output || 'Output will appear here...'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            onClick={() => setShowSettings(false)}
          />
          <div className={`fixed inset-y-0 right-0 w-80 ${
            isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          } shadow-2xl z-50 transition-all duration-200`}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <Settings size={20} />
                Settings
              </h3>
              <button 
                onClick={() => setShowSettings(false)}
                className={`p-2 rounded-full hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Theme</label>
                  <select
                    className={`w-full p-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-900 border-gray-700 text-gray-300' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  >
                    {themes.map(theme => (
                      <option key={theme.id} value={theme.id}>{theme.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Font Size</label>
                  <select
                    className={`w-full p-2 rounded-md border ${
                      isDarkMode 
                        ? 'bg-gray-900 border-gray-700 text-gray-300' 
                        : 'bg-white border-gray-300 text-gray-900'
                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
                  >
                    <option>12px</option>
                    <option>14px</option>
                    <option>16px</option>
                    <option>18px</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CodePlaygroundModern;