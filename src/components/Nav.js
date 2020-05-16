import React from "react";
import IosMenu from "react-ionicons/lib/IosMenu";
// import Logo from '../assets/images/Logo.png';
import Reveal from "react-reveal/Reveal";

function Nav(props) {
  const className = props.navMenu.shown ? "active-nav-menu" : "";

  return (
    <Reveal down>
      <nav>
        <div className="container">
          <div className="brand">
            {/* <img src={Logo} alt="Logo" className="nav-logo" /> */}
            <h1>Navbrand</h1>
          </div>
          <ul className={className}>
            <li>
              <a href="#!">Home</a>
            </li>
            <li>
              <a href="#!">API</a>
            </li>
            <li>
              <a href="#!">GitHub</a>
            </li>
          </ul>
          <IosMenu
            className="nav-toggle"
            color="#20B560"
            onClick={props.toggleNavMenu}
            fontSize="40px"
          />
        </div>
      </nav>
    </Reveal>
  );
}

export default Nav;
