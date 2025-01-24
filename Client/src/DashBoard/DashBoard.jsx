import React, { useEffect, useState } from "react";
import { Users, UserCheck, LayoutDashboard, Search, Calendar, Clock, TrendingUp } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching data from the server
  useEffect(() => {
    const fetchAttendees = async () => {
      try {
        const response = await fetch("http://localhost:8000/App/GetRsvpDetails"); // Replace with your API endpoint
        console.log('before endpoint request')
        console.log()
        setAttendees(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchAttendees();
  }, []);

  // Get RSVP Details
  const getRSVPDetails = (attendees) => {
    const totalAttendees = attendees.length;
    const checkedInAttendees = attendees.filter(a => a.checkedIn).length;
    const checkInRate = Math.round((checkedInAttendees / totalAttendees) * 100);
    return { totalAttendees, checkedInAttendees, checkInRate };
  };

  const { totalAttendees, checkedInAttendees, checkInRate } = getRSVPDetails(attendees);

  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Logo Area */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-indigo-600">EventPro</h1>
          <p className="text-sm text-gray-500">Welcome back, Admin</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-4">
          <div
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center px-4 py-3 mb-3 rounded-lg cursor-pointer transition-all ${
              activeTab === "dashboard"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="ml-3 font-medium">Dashboard</span>
          </div>

          <div
            onClick={() => setActiveTab("attendees")}
            className={`flex items-center px-4 py-3 mb-3 rounded-lg cursor-pointer transition-all ${
              activeTab === "attendees"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="ml-3 font-medium">Attendees</span>
          </div>

          <div
            onClick={() => setActiveTab("checkin")}
            className={`flex items-center px-4 py-3 mb-3 rounded-lg cursor-pointer transition-all ${
              activeTab === "checkin"
                ? "bg-indigo-50 text-indigo-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <UserCheck className="w-5 h-5" />
            <span className="ml-3 font-medium">Check In</span>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Bar */}
        <div className="bg-white shadow-sm px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {activeTab === "dashboard" && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Total Attendees</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{totalAttendees}</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-indigo-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Checked In</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{checkedInAttendees}</p>
                    </div>
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Check-in Rate</p>
                      <p className="text-2xl font-bold text-gray-800 mt-1">{checkInRate}%</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Check-ins */}
              <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Check-ins</h2>
                </div>
                <div className="divide-y divide-gray-200">
                  {attendees.filter(a => a.checkedIn).map(attendee => (
                    <div key={attendee.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">
                            {attendee.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-800">{attendee.name}</p>
                          <p className="text-xs text-gray-500">{attendee.ticket}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{attendee.checkInTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "attendees" && (
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">All Attendees</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {attendees.map(attendee => (
                  <div key={attendee.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                        <span className="text-indigo-600 font-medium">
                          {attendee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-800">{attendee.name}</p>
                        <p className="text-xs text-gray-500">{attendee.ticket}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      attendee.checkedIn 
                        ? "bg-green-100 text-green-800" 
                        : "bg-gray-100 text-gray-800"
                    }`}>
                      {attendee.checkedIn ? "Checked In" : "Not Checked In"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "checkin" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Check In Attendee</h2>
              <div className="max-w-md">
                <input
                  type="text"
                  placeholder="Search attendee by name or ticket number..."
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="mt-4 text-sm text-gray-500">
                  Scan QR code or enter attendee details to check in
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
