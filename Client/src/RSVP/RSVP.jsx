import React, { useState } from "react";
import { Check, X, Heart } from "lucide-react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: null,
  });

  const [popupMessage, setPopupMessage] = useState(""); // Message to display in the popup
  const [popupType, setPopupType] = useState(""); // Type of popup: "success" or "error"
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Control visibility of popup

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      attending: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://s4ds-backend.onrender.com/App/RsvpForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('before the data preprocessing')
      if (response.ok && data.Success) {
        // Display success popup
        setPopupMessage(data.Message || "RSVP submitted successfully!");
        setPopupType("success");
        setIsPopupVisible(true);

        setTimeout(() => {
          setIsPopupVisible(false); // Hide the popup after 5 seconds
          resetForm(); // Reset the form
        }, 5000);
      } else {
        // Display error popup with the backend message
        setPopupMessage(data.Message || "Failed to submit RSVP.");
        setPopupType("error");
        setIsPopupVisible(true);

        setTimeout(() => {
          setIsPopupVisible(false); // Hide the popup after 5 seconds
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting RSVP:", error);
      setPopupMessage("Network Error: Please try again later.");
      setPopupType("error");
      setIsPopupVisible(true);

      setTimeout(() => {
        setIsPopupVisible(false); // Hide the popup after 5 seconds
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg transform transition-all duration-500 hover:shadow-xl">
        {/* Popup Notification */}
        {isPopupVisible && (
          <div
            className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-md shadow-lg z-50 animate-fade-in ${
              popupType === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              {popupType === "success" ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <X className="w-5 h-5 text-white" />
              )}
              <span>{popupMessage}</span>
            </div>
          </div>
        )}

        <div className="text-center p-8 border-b border-gray-100">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-pink-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">RSVP</h1>
          <p className="text-gray-600 mt-2">We'd love to celebrate with you</p>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter your full name"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-transparent focus:outline-none transition-all duration-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Will you be attending?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
                    formData.attending === true
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, attending: true })
                  }
                >
                  <Check className="w-4 h-4" />
                  <span>Yes</span>
                </button>
                <button
                  type="button"
                  className={`flex-1 py-2 px-4 rounded-md transition-all duration-300 flex items-center justify-center space-x-2 ${
                    formData.attending === false
                      ? "bg-red-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, attending: false })
                  }
                >
                  <X className="w-4 h-4" />
                  <span>No</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-md hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <Check className="w-5 h-5" />
              <span>Submit RSVP</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
