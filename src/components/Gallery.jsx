import React from "react";
import "./Gallery.css";
import football from "../assets/gallery1.jpg";
import IV from "../assets/gallery2.jpg";
import College from "../assets/gallery3.jpg";
import Codebits from "../assets/gallery4.JPG";
import Gallery5 from "../assets/gallery5.jpg";
import Gallery6 from "../assets/gallery6.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      {[
        {
          imgSrc: Codebits,
          title: "CodeBits 2.0",
          subtitle: "National Level Hackathon",
          rating: 4.5,
        },
        {
          imgSrc: College,
          subtitle: "College",
          rating: 5,
        },
        {
          imgSrc: IV,
          title: "Banglore",
          subtitle: "Industrial Visit",
          rating: 4.7,
        },
        {
          imgSrc: football,
          title: "Football",
          subtitle: "Championship Winners",
          rating: 4.3,
        },
        {
          imgSrc: Gallery6,
          subtitle: "On the way to Hostel",
          rating: 4.8,
        },
        {
          imgSrc: Gallery5,
          subtitle: "Chemical Department",
          rating: 5,
        },
      ].map((card, index) => (
        <div
          className={`card ${index === 1 ? "second" : ""} ${
            index === 2 ? "third" : ""
          }`}
          key={index}
        >
          <div className="card__img">
            <img src={card.imgSrc} alt={card.subtitle} />

            <div className="card__overlay">
              <h2>{card.title}</h2>
              <p>{card.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
