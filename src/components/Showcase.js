import React from "react";
import Mask from "../assets/images/Mask.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Reveal from "react-reveal/Reveal";

function Showcase(props) {
  return (
    <section className="showcase">
      <Reveal left>
        <div className="showcase-img">
          <img src={Mask} alt="Showcaseimage" />
        </div>
      </Reveal>
      <Reveal right delay={500}>
        <div className="showcase-text">
          <h1>
            Track any county's status with our <br />
            CORONA-TRACKER.
          </h1>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Country Name...."
            />
            <AnchorLink
              offset={() => 100}
              href="#graph-section"
              onClick={props.onFormSubmit}
              className="primary-btn"
            >
              Search
            </AnchorLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Showcase;
