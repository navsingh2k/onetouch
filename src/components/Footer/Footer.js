import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
    <span className="name">
      OneTouch made by -{" "}
      <a href="https://navsingh2k.github.io/MyPortfolio/" target="__blank">
        Navneet Singh
      </a>
    </span>
    <hr style={{ width: "90%" }} />
    <div className="iconContainer">
      <a href="https://github.com/navsingh2k/" target="__blank">
      <i class="fab fa-github fa-2x"></i>
      </a>
      <a href="https://www.linkedin.com/in/navsingh2k1/" target="__blank">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="https://navsingh2k.github.io/MyPortfolio/" target="__blank">
        <i className="fas fa-link fa-2x"></i>
      </a>
    </div>
  </div>
  );
};

export default Footer;