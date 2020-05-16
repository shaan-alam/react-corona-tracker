import React from "react";
import IosMenu from "react-ionicons/lib/IosMenu";
import Logo from "../assets/images/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav(props) {
  const className = props.navMenu.shown ? "active-nav-menu" : "";

  return (
    <nav>
      <div className="container">
        <div className="brand">
          <a href="#!">
            <img src={Logo} alt="Logo" className="nav-logo" />
          </a>
        </div>
        <ul className={className}>
          <li>
            <AnchorLink offset={() => 100} href="#showcase">
              Home
            </AnchorLink>
          </li>
          <li>
            <a href="https://github.com/pomber/covid19">API</a>
          </li>
          <li>
            <a href="https://github.com/codeshaan">GitHub</a>
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
  );
}

export default Nav;
