import React, { useState } from 'react';
import { Users, UserPlus, CheckCircle, Search, UserCheck, Calendar, Mail, Phone, X } from 'lucide-react';

const  Dashboard=()=> {
  const [rsvpList, setRsvpList] = useState([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 8900',
      guests: 2,
      checkedIn: false,
      timestamp: '2024-03-15 14:30',
      notes: 'Vegetarian meal preferred'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1 234 567 8901',
      guests: 1,
      checkedIn: true,
      timestamp: '2024-03-15 15:45',
      notes: 'Allergic to nuts'
    }
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newEntry, setNewEntry] = useState({
    name: '',
    email: '',
    guests: 1,
   
  });

  const handleAddRSVP = () => {
    if (!newEntry.name || !newEntry.email || !newEntry.phone) {
      alert('Please fill in all required fields');
      return;
    }

    const entry = {
      id: Date.now().toString(),
      ...newEntry,
      checkedIn: false,
      timestamp: new Date().toLocaleString()
    };
    setRsvpList([...rsvpList, entry]);
    setShowAddModal(false);
    setNewEntry({ name: '', email: '', guests: 1 });
  };

  const handleCheckIn = (id) => {
    setRsvpList(rsvpList.map(entry =>
      entry.id === id ? { ...entry, checkedIn: !entry.checkedIn } : entry
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this RSVP?')) {
      setRsvpList(rsvpList.filter(entry => entry.id !== id));
    }
  };

  const filteredList = rsvpList.filter(entry =>
    entry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">RSVP Dashboard</h1>
                <p className="text-sm text-gray-500">Manage your guest list efficiently</p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Add New RSVP
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="pl-10 pr-4 py-3 w-full border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Total RSVPs</h3>
                <p className="text-3xl font-bold text-indigo-600">{rsvpList.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <UserCheck className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Checked In</h3>
                <p className="text-3xl font-bold text-green-600">
                  {rsvpList.filter(entry => entry.checkedIn).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Total Guests</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {rsvpList.reduce((sum, entry) => sum + entry.guests, 0)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RSVP List */}
        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
       
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Guest</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cheked_IN</th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredList.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-semibold text-lg">
                            {entry.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{entry.name}</div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {entry.timestamp}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 flex items-center mb-1">
                        <Mail className="h-4 w-4 mr-2 text-gray-400" />
                        {entry.email}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        {entry.guests} {entry.guests === 1 ? 'Guest' : 'Guests'}
                      </span>
                    </td>
                
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${
                        entry.checkedIn 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {entry.checkedIn ? 'Checked In' : 'Not Checked In'}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <button
                        onClick={() => handleCheckIn(entry.id)}
                        className={`inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          entry.checkedIn
                            ? 'text-red-700 bg-red-100 hover:bg-red-200'
                            : 'text-green-700 bg-green-100 hover:bg-green-200'
                        }`}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {entry.checkedIn ? 'Undo' : 'Check-in'}
                      </button>
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="inline-flex items-center px-3 py-1 rounded-lg text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add RSVP Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full relative animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add New RSVP</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-500 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  value={newEntry.name}
                  onChange={(e) => setNewEntry({ ...newEntry, name: e.target.value })}
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  value={newEntry.email}
                  onChange={(e) => setNewEntry({ ...newEntry, email: e.target.value })}
                  placeholder="email@example.com"
                />
              </div>
              
      
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
                  placeholder="Any special requirements or notes"
                  rows="3"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddRSVP}
                className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
              >
                Add RSVP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;