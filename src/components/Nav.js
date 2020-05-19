import React from "react";
import IosMenu from "react-ionicons/lib/IosMenu";
import AnchorLink from "react-anchor-link-smooth-scroll";
import IosClose from 'react-ionicons/lib/IosClose';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isNavOpen: false };
  }

  toggleNavMenu = () =>
    this.setState({ isNavOpen: !this.state.isNavOpen });

  render() {
    const className = this.state.isNavOpen ? "active-nav-menu" : "";
    return (
      <nav>
        <div className="container">
          <div className="brand">
            <a href="#!">
              Covid-19 tracker
            </a>
          </div>
          <ul className={className}>
            <li class="close"><IosClose onClick={this.toggleNavMenu} color="rgb(115, 46, 193)" fontSize="40px" /></li>
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
            color="rgb(115, 46, 193)"
            onClick={this.toggleNavMenu}
            fontSize="40px"
          />
        </div>
      </nav>
    );
  }
}

export default Nav;
