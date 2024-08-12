import "./EnquiryFOrm.css";
import logo from "../assets/logo.webp";
import whatsappLogo from "../assets/whatsapp-logo.webp";
import React, { useState } from "react";
import axios from "axios";
import Loader from "react-js-loader";

function EnquiryFOrm() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    terms: false,
  });

  const [isLoading, setIsLoading] = useState(false); // New state for loader

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader
    try {
      await axios.post("https://git-backend.onrender.com/enquiry", formData);
      alert("Form submitted successfully");
    } catch (error) {
      console.log(error);
      alert("Error submitting form");
    } finally {
      setIsLoading(false); // Hide loader after submission
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <img src={logo} alt="Gharda Institute Logo" className="logo" />
        <div className="right">
          <p>Call</p>
          <a href="tel:+919923265075" className="contact-btn">
            +91 9923265075
          </a>
          <a
            href="https://www.git-india.edu.in/git/index.html"
            target="_blank"
            className="main-web-btn"
          >
            Main website
          </a>
        </div>
      </div>

      <div className="form-section">
        <div className="info">
          <p>Applications for</p>
          <p className="blue">BE Programs 2024</p>
          <p>NOW OPEN</p>
          <button className="apply-btn">APPLY NOW</button>
          <span>Apply on the basis of 10+2 / JEE Main-2024 Score</span>
          <div className="bottom">
            <p>Discover</p>
            <span>Countless</span>
            <p>Possibilities</p>
          </div>
        </div>
        <div className="form">
          <div className="form-container">
            <h1>Welcome to Gharda Institute of Technology</h1>
            <p>Fill the form to book a free Consultation</p>
            <form onSubmit={handleSubmit}>
              <label>
                Full name
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  required="true"
                />
              </label>
              <label>
                Phone No.
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required="true"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required="true"
                />
              </label>

              <label className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required="true"
                />
                I agree with the website's <a href="#">terms and conditions</a>
              </label>
              <button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader type="ping-cube" bgColor={"blue"} size={40} />
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <button
        className="enquire-now"
        onClick={() =>
          document
            .querySelector(".form-container")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Enquire Now
      </button>

      <a
        href="https://wa.me/919405732206"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappLogo} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default EnquiryFOrm;
