import React from "react";
import Card from "../components/Card";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 animate-bounce">
        Jedidiah Solomon
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Introduction"
          description="Learn the basics of React Libraries."
        />
        <Card
          title="Components"
          description="Dive into reusable UI components."
        />
        <Card
          title="State & Props"
          description="Understand state management and props."
        />
        <Card title="Hooks" description="Explore React Hooks and their uses." />
        <Card
          title="Routing"
          description="Implement client-side routing with React Router."
        />
        <Card
          title="Advanced Topics"
          description="Go deeper into advanced React concepts."
        />
      </div>
    </div>
  );
};

export default Homepage;
