import React from "react";
import "./styles.css";

const Footer = () => (
  <footer id="main-footer">
    <div className="footer">
      <div className="links">
        <ul>
          <li>COMPANY RETURNS</li>
          <li>CONTACT US CARRERS</li>
          <li>SHIPPING</li>
        </ul>
      </div>
      <div className="social-media">
        <ul>
          <li className="social_media">Facebook</li>
          <li className="social_media">Twitter</li>
          <li className="social_media">Pinterest</li>
          <li className="social_media">Google +</li>
        </ul>
      </div>
      <div className="rights">
        <span>2015 Merlin's Potions. All Rights Reserved</span>
      </div>
    </div>
    <div className="newsletter">
      <strong>Sign up for our Newsletter</strong>
      <span>Sign up our newsletter & get exclusive discounts!</span>
      <input
        type="text"
        name=""
        placeholder="Enter your email"
        id="inputEmail"
      />
      <button type="submit">SUBMIT</button>
    </div>
  </footer>
);

export default Footer;
