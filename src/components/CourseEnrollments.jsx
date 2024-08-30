import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for course enrollments
const data = [
  { course: "Data Analysis", students: 250 },
  { course: "Web Development", students: 270 },
  { course: "Digital Marketing", students: 260 },
  { course: "Basic Digital Literacy", students: 310 },
];

const CourseEnrollments = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">
          Course Enrollments 2024
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="course" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                padding: 10,
              }}
            />
            <Bar dataKey="students" fill="#045265" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CourseEnrollments;
