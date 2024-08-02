import React from "react";
import Slider from "react-slick";
import "./Placements.css";
import capgemine from "../assets/c-capgemine.png";
import olon from "../assets/c-olon.png";
import infosys from "../assets/c-infosys.png";
import wipro from "../assets/c-wipro.png";
import accenture from "../assets/c-accenture.png";

const Placements = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const partners = [
    { name: "olon", logo: olon },
    { name: "infosys", logo: infosys },
    { name: "capgemine", logo: capgemine },
    { name: "wipro", logo: wipro },
    { name: "accenture", logo: accenture },
  ];

  return (
    <div className="partnerships">
      <h2>Placements & Collaborations</h2>
      <p>
        Tie-ups with globally renowned and nationally acclaimed education
        partners, companies and other institutes
      </p>
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logo} alt={partner.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Placements;
