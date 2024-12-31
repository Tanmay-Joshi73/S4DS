import React, { useState } from 'react';
import { Play, Download, Copy, RotateCcw, Layout, Settings, ChevronRight, Save, Share2, Moon, Sun } from 'lucide-react';
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

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setOutput(`Output for ${selectedLanguage} code:\n> Program executed successfully!\n> Console output will appear here...`);
      setIsRunning(false);
    }, 1500);
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
    <div className={`w-full min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Top Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                CodeLab
              </span>
              <div className="ml-10 flex items-center space-x-4">
                {languages.map(lang => (
                  <button
                    key={lang.id}
                    onClick={() => setSelectedLanguage(lang.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      selectedLanguage === lang.id
                        ? (isDarkMode ? 'bg-gray-900 text-white' : 'bg-blue-100 text-blue-700')
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
                className={`p-2 rounded-full ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-2 rounded-full ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
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
        <div className={`mb-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`px-4 py-2 rounded-md text-white ${
                isRunning ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'
              } flex items-center gap-2`}
            >
              <Play size={16} />
              {isRunning ? 'Running...' : 'Run Code'}
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Copy size={16} />
              </button>
              <button
                onClick={handleClear}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <RotateCcw size={16} />
              </button>
              <button
                onClick={handleDownload}
                className={`p-2 rounded-md ${
                  isDarkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Download size={16} />
              </button>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button
                className={`px-4 py-2 rounded-md ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                } flex items-center gap-2`}
              >
                <Share2 size={16} />
                Share
              </button>
              <button
                className={`px-4 py-2 rounded-md ${
                  isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
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
          <div className={`rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Editor</h2>
            </div>
            <div className="p-4">
              <MonacoEditor
                height="500px"
                language={selectedLanguage}
                value={code}
                onChange={(value) => setCode(value)}
                theme={isDarkMode ? 'vs-dark' : 'vs-light'}
                options={{
                  selectOnLineNumbers: true,
                  minimap: { enabled: false },
                  wordWrap: 'on',
                }}
              />
            </div>
          </div>

          {/* Output Panel */}
          <div className={`rounded-lg shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h2 className={`text-lg font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Output</h2>
            </div>
            <div className="p-4">
              <div className={`h-[500px] p-4 font-mono text-sm rounded-md ${
                isDarkMode ? 'bg-gray-900 text-green-400' : 'bg-gray-50 text-green-600'
              } overflow-auto`}>
                {output || 'Output will appear here...'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className={`fixed inset-y-0 right-0 w-64 ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        } shadow-lg transform transition-transform duration-200 ease-in-out`}>
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium">Settings</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select
                  className={`w-full p-2 rounded-md border ${
                    isDarkMode 
                      ? 'bg-gray-900 border-gray-700 text-gray-300' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
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
                  }`}
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
      )}
    </div>
  );
};

export default CodePlaygroundModern;
