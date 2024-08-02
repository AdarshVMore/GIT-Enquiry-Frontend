import React from "react";
import Slider from "react-slick";
import "./Ranking.css";
import logo1 from "../assets/AICTE.png";
import logo2 from "../assets/NACC.png";

const Ranking = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const images = [
    {
      img: logo2,
      content: "CGPA 3.22",
    },
  ];

  return (
    <div
      className="custom-component"
      style={{ backgroundImage: `url('path/to/your/background-image.jpg')` }}
    >
      <div className="sliding-images">
        <h2 className="image-heading">Ranking & Recognition</h2>
        <div className="slide">
          <img src={logo2} />
          <p>CGPA 3.22</p>
        </div>
      </div>

      <div className="info-section">
        <h2>Why Choose Gharda Institute of Technology ?</h2>
        <ul>
          <li>
            Center of Excellence provides hands-on Research led Industry
            training
          </li>
          <li>
            Internship and Placement Assistance in International and National
            Leading MNC’s
          </li>
          <li>Add-on Certification programs from leading core companies</li>
          <li>
            8+ collaborations with Leading Organizations for exchange of domain
            knowledge and technical training.
          </li>
          <li>On Campus Accommodation with Hygiene Food</li>
        </ul>
      </div>
    </div>
  );
};

export default Ranking;
