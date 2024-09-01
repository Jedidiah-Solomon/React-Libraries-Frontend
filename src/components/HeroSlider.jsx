import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import local images
import pic1 from "../assets/img/hero1.webp";
import pic2 from "../assets/img/hero2.webp";
import pic3 from "../assets/img/hero3.webp";
import pic4 from "../assets/img/hero4.webp";
import pic5 from "../assets/img/hero5.webp";

const HeroSlider = () => {
  const slides = [
    {
      image: pic1,
      title: "SMS Notifications",
      description:
        "Integrate SMS notifications using an external service provider.",
    },
    {
      image: pic2,
      title: "Email System",
      description:
        "Handle sending and receiving emails with built-in templates.",
    },
    {
      image: pic3,
      title: "Toast Notifications",
      description: "Implement toast notifications for real-time user feedback.",
    },
    {
      image: pic4,
      title: "Reveal Animations",
      description:
        "Enhance UX with scroll reveal animations using react-awesome-reveal.",
    },
    {
      image: pic5,
      title: "Advanced Effects",
      description: "Explore advanced animation effects for better engagement.",
    },
  ];

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted for better visibility
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Custom styles */}
      <style>
        {`
          /* Arrow Styling */
          .slick-prev, .slick-next {
            z-index: 100;
            width: 40px; /* Adjust width */
            height: 40px; /* Adjust height */
            background: rgba(0, 0, 0, 0.7); /* Background color */
            border-radius: 50%; /* Rounded corners */
            color: #FFD700; /* Arrow color */
            font-size: 24px; /* Font size for arrows */
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.7; /* Arrow opacity */
          }

          .slick-prev {
            left: 15px; /* Position from left */
          }

          .slick-next {
            right: 15px; /* Position from right */
          }

          .slick-prev:before, .slick-next:before {
            content: ''; /* Remove default content */
            font-family: 'slick';
            font-size: 24px; /* Arrow icon size */
            color: #FFD700; /* Arrow color */
          }

          /* Dot Styling */
          .slick-dots {
            bottom: 20px; /* Position from bottom */
            z-index: 100;
          }

          .slick-dots li button:before {
            font-size: 12px; /* Dot size */
            color: #FFD700; /* Dot color */
          }

          .slick-dots .slick-active button:before {
            color: #FF4500; /* Active dot color */
          }
        `}
      </style>
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
