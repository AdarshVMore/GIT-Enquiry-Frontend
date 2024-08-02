import "./EnquiryFOrm.css";
import logo from "../assets/logo.png";
import whatsappLogo from "../assets/whatsapp-logo.png";
import React, { useState } from "react";
import axios from "axios";

function EnquiryFOrm() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://git-backend.onrender.com/enquiry", formData);
      alert("Form submitted successfully");
      console.loog("done");
    } catch (error) {
      console.log(error);
      alert("Error submitting form");
    }
  };

  return (
    <div className="App">
      <div className="navbar">
        <img src={logo} alt="Gharda Institute Logo" className="logo" />
        <div className="right">
          <p>Call</p>
          <a href="tel:+91 9405595075" className="contact-btn">
            +91 9405595075
          </a>
          <a
            href="https://www.git-india.edu.in/git/index.html"
            target="_blank"
            className="contact-btn"
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
          <span>Apply on the basis of 10+2 / JEE Main-2024 Scores</span>
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
                />
              </label>
              <label>
                Phone No.
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label className="terms">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />
                I agree with the website's <a href="#">terms and conditions</a>
              </label>
              <button type="submit">Send</button>
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
        href="https://wa.me/+91 9405595075"
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
