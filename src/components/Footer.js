import React from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

function Footer() {
  return (
    <footer>
      <div className="container">
        <h1>Made by Shaan Alam with <span role="img" aria-label="emoji">❤</span></h1>
        <h1>You can follow me here...</h1>
        <div className="social-icons">
          <a href="#!">
            <LogoFacebook fontSize="40px" color="#fff"/>            
          </a>
          <a href="#!">
            <LogoInstagram fontSize="40px" color="#fff"/>
          </a>          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
