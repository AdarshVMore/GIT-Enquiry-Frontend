import React from "react";
import "./Footer.css";
import logo from "../assets/logo.webp";
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
            href="http://www.facebook.com/gitlavel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF color="white" />
          </a>
          <a
            href="https://www.instagram.com/gitlavel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="white" />
          </a>
          <a
            href="https://www.youtube.com/playlist?list=PLfox3TLTR2yr8w8Vxrj0usbNphorhy7U1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube color="white" />
          </a>
          <a
            href="http://www.twitter.com/gitlavel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color="white" />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="https://www.git-india.edu.in/git/about_home.html">
                About Us
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/about_gc.html">
                Administration
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/committees.asp?id=wdc">
                WDC » ICC » SGRC » ARC
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/mail.google.com">
                Webmail
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/archives_sitemap.html">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Portals</h4>
          <ul>
            <li>
              <a href="http://mu.ac.in/">Mumbai University</a>
            </li>
            <li>
              <a href="http://dte.org.in/">
                Directorate Of Technical Education
              </a>
            </li>
            <li>
              <a href="https://www.aicte-india.org/">AICTE</a>
            </li>
            <li>
              <a href="http://www.naac.gov.in/">NAAC</a>
            </li>
            <li>
              <a href="http://www.sssamiti.org/">Shikshan Shulka Samiti</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Imp Links</h4>
          <ul>
            <li>
              <a href="https://www.git-india.edu.in/git/Docs/mandatory%20disclosure.pdf">
                Mandatory Disclosure
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/Docs/mandatory%20disclosure.pdf">
                Institute Memberships
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/Docs/GIT%20Social%20Accountability.PDF">
                GIT Social Accountability
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/Docs/GIT%20Brochure.pdf">
                Make Donations
              </a>
            </li>
            <li>
              <a href="https://www.git-india.edu.in/git/Docs/prospectus.pdf">
                College Prospectus
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Gharda Institute Of Technology</li>
            <li>
              <a href="tel:+919422631677">📞 9422631677 Registrar</a>
            </li>
            <li>
              <a href="tel:+919822765402">📞 9822765402 Academics</a>
            </li>
            <li>
              <a href="tel:+919420376273">📞 9420376273 Accounts</a>
            </li>
            <li>
              <a href="tel:+917798312364">📞 7798312364 Exam</a>
            </li>
            <li>
              <a href="mailto:principal@git-india.edu.in">
                Email: principal@git-india.edu.in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
