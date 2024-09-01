import React from "react";
import { Fade, Slide, Bounce, Flip, Zoom, Rotate } from "react-awesome-reveal";
import { AttentionSeeker } from "react-awesome-reveal";

const ProjectShowcase = () => {
  const projects = [
    {
      title: "SMS Notifications",
      description:
        "A web application that integrates SMS notifications using an external service provider.",
      image: "https://via.placeholder.com/300",
      animation: Fade,
    },
    {
      title: "Email System",
      description:
        "An email system that handles sending and receiving emails with built-in templates.",
      image: "https://via.placeholder.com/300",
      animation: Slide,
    },
    {
      title: "Toast Notifications",
      description:
        "Implement toast notifications for user feedback in real-time using React.",
      image: "https://via.placeholder.com/300",
      animation: Bounce,
    },
    {
      title: "Reveal Animations",
      description:
        "Enhance user experience with scroll reveal animations using react-awesome-reveal.",
      image: "https://via.placeholder.com/300",
      animation: Flip,
    },
    {
      title: "Zoom Effect",
      description:
        "Zooms in or out on the element to catch the user's attention.",
      image: "https://via.placeholder.com/300",
      animation: Zoom,
    },
    {
      title: "Rotate Effect",
      description: "Rotates the element to attract attention.",
      image: "https://via.placeholder.com/300",
      animation: Rotate,
    },
    {
      title: "Attention Seekers",
      description:
        "Showcase attention-seeking animations like wobble, tada, and pulse.",
      image: "https://via.placeholder.com/300",
      animation: AttentionSeeker,
      effect: "wobble",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Slide direction="left" triggerOnce>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">
          Project Showcase
        </h2>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const AnimationComponent = project.animation; // Dynamically choose the animation component
          return (
            <AnimationComponent key={index} triggerOnce effect={project.effect}>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </AnimationComponent>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectShowcase;
