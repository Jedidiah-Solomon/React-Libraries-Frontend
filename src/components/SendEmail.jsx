import React, { useState } from "react";
import axios from "axios";

const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const SendEmail = () => {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
    html: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };

  // Send email
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendURL}/api/email/send`,
        emailData
      );
      console.log(response.data.message);
      alert("Email sent successfully!");
      clearForm();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  // Clear form fields
  const clearForm = () => {
    setEmailData({
      to: "",
      subject: "",
      text: "",
      html: "",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-bold text-center mb-6">Send Email</h1>
        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To:
            </label>
            <input
              type="email"
              name="to"
              value={emailData.to}
              onChange={handleChange}
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              value={emailData.subject}
              onChange={handleChange}
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Text:
            </label>
            <textarea
              name="text"
              value={emailData.text}
              onChange={handleChange}
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HTML:
            </label>
            <textarea
              name="html"
              value={emailData.html}
              onChange={handleChange}
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-2"
              rows="4"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Email
            </button>
            <button
              type="button"
              onClick={clearForm}
              className="px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendEmail;
