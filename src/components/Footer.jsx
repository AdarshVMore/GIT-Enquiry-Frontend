import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Gharda Institute of Technology College Logo" />
        <div className="footer-socials">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF color="white" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="white" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn color="white" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color="white" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="white" />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <ul>
            <li>
              <a href="#">Campus Map</a>
            </li>
            <li>
              <a href="#">Mesa Campus</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="mailto:admissions@Gharda Institute of Technology.edu">
                admissions@git-india.edu.in
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a href="#">Employment at Gharda Institute of Technology</a>
            </li>
            <li>
              <a href="#">Event Spaces</a>
            </li>
            <li>
              <a href="#">Trustees</a>
            </li>
            <li>
              <a href="#">Early Learning Center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">Faculty & Staff</a>
            </li>
            <li>
              <a href="#">Accreditation</a>
            </li>
            <li>
              <a href="#">Learning Outcomes</a>
            </li>
            <li>
              <a href="#">Harassment/Discrimination Policy</a>
            </li>
            <li>
              <a href="#">Web Accessibility Statement</a>
            </li>
            <li>
              <a href="#">Institutional Review Board</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
