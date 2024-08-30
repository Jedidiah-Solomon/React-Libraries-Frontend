import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        await axios.get("/api/users/verifyToken", { withCredentials: true });
        console.log("Login successful");
        setLoading(false);
      } catch (error) {
        setError("Session expired or invalid. Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      }
    };

    checkSession();
    // Set up a timer to check the session validity again
    const interval = setInterval(() => {
      checkSession();
    }, 60 * 1000); // Check every minute

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent border-solid rounded-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">SMS Notifications</h2>
          <p className="text-gray-600">
            Manage your SMS notifications and preferences. Check delivery
            status, logs, and configure settings.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Email Notifications</h2>
          <p className="text-gray-600">
            Configure and review your email notifications. Customize templates
            and monitor delivery performance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Toast Messages</h2>
          <p className="text-gray-600">
            Set up and review toast messages for instant feedback. Adjust styles
            and manage display options.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
