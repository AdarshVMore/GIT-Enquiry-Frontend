import React from "react";
import Slider from "react-slick";
import "./Programs.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Importing images
import programImage1 from "../assets/program1.png.jpg";
import programImage2 from "../assets/program2.jpg";
import programImage3 from "../assets/program3.jpg";
import programImage4 from "../assets/program4.jpg";
import programImage5 from "../assets/program6.jpg";
import programImage6 from "../assets/program5.jpg";

const programs = [
  {
    id: 1,
    title: "Computer Engineering",
    description:
      "Dive into the world of computing, software development, and hardware design.",
    image: programImage1,
  },
  {
    id: 2,
    title: "Chemical Engineering",
    description:
      "Explore chemical processes, material science, and industrial applications.",
    image: programImage2,
  },
  {
    id: 3,
    title: "ENTC",
    description:
      "Learn about electronic systems, communication technologies, and signal processing.",
    image: programImage3,
  },
  {
    id: 4,
    title: "Mechanical Engineering",
    description:
      "Study the principles of mechanics, thermodynamics, and material science.",
    image: programImage4,
  },
  {
    id: 5,
    title: "Civil Engineering",
    description:
      "Focus on construction, infrastructure development, and environmental engineering.",
    image: programImage5,
  },
  {
    id: 6,
    title: "AI ML",
    description:
      "Delve into AI, machine learning, data science, and their real-world applications.",
    image: programImage6,
  },
];

const Programs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="programs-container">
      <h2 className="title">EXPLORE OUR B.E PROGRAMS</h2>
      <Slider {...settings} className="sliderx">
        {programs.map((program) => (
          <div key={program.id} className="program">
            <img src={program.image} alt={program.title} />
            <div className="program-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button>ENROLL NOW</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
};

export default Programs;
