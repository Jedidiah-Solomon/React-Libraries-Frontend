import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data representing number of students trained in each category per year
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

const StudentsCoursesStats = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Student Training Statistics (2020-2024)
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="dataAnalysis"
              stroke="#045265"
              name="Data Analysis"
            />
            <Line
              type="monotone"
              dataKey="webDev"
              stroke="#6b0520"
              name="Web Development"
            />
            <Line
              type="monotone"
              dataKey="digitalMarketing"
              stroke="#3d2aa5"
              name="Digital Marketing"
            />
            <Line
              type="monotone"
              dataKey="digitalLiteracy"
              stroke="#ff7300"
              name="Basic Digital Literacy"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StudentsCoursesStats;
