import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for enrollment trends
const data = [
  {
    year: 2020,
    dataAnalysis: 150,
    webDev: 200,
    digitalMarketing: 180,
    digitalLiteracy: 220,
  },
  {
    year: 2021,
    dataAnalysis: 175,
    webDev: 210,
    digitalMarketing: 200,
    digitalLiteracy: 250,
  },
  {
    year: 2022,
    dataAnalysis: 200,
    webDev: 240,
    digitalMarketing: 220,
    digitalLiteracy: 270,
  },
  {
    year: 2023,
    dataAnalysis: 225,
    webDev: 250,
    digitalMarketing: 240,
    digitalLiteracy: 290,
  },
  {
    year: 2024,
    dataAnalysis: 250,
    webDev: 270,
    digitalMarketing: 260,
    digitalLiteracy: 310,
  },
];

const EnrollmentTrends = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Enrollment Trends Over Time
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="dataAnalysis"
              stroke="#8884d8"
              fillOpacity={0.3}
              fill="#8884d8"
              name="Data Analysis"
            />
            <Area
              type="monotone"
              dataKey="webDev"
              stroke="#82ca9d"
              fillOpacity={0.3}
              fill="#82ca9d"
              name="Web Development"
            />
            <Area
              type="monotone"
              dataKey="digitalMarketing"
              stroke="#ffc658"
              fillOpacity={0.3}
              fill="#ffc658"
              name="Digital Marketing"
            />
            <Area
              type="monotone"
              dataKey="digitalLiteracy"
              stroke="#ff7300"
              fillOpacity={0.3}
              fill="#ff7300"
              name="Basic Digital Literacy"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EnrollmentTrends;
