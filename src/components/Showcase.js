import React from "react";
import Mask from "../assets/images/Mask.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Reveal from "react-reveal/Reveal";

import { Context } from "../DataContext";

function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <Reveal left>
        <div className="showcase-img">
          <img src={Mask} alt="Showcaseimage" />
        </div>
      </Reveal>
      <Reveal right delay={500}>
        <div className="showcase-text">
          <h1>
            Track any county's status with our <br />
            <span className="showcase-title">CORONA-TRACKER.</span>
          </h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Country Name...."
            />
            <Context.Consumer>
              {value => (
                <AnchorLink
                  offset={() => 100}
                  href="#graph-section"
                  onClick={value.onFormSubmit}
                  className="primary-btn"
                >
                  Search
                </AnchorLink>
              )}
            </Context.Consumer>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Showcase;
