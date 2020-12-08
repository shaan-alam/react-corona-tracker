import React from "react";
import Sanitizer from "../assets/images/sanitizer.png";
import Sneezing from "../assets/images/sneezing.png";
import Homework from "../assets/images/homework.png";
import { Fade, Flip } from "react-reveal";

function Cards() {
  return (
    <section className="card-grid-section">
      <div className="container">
        <Fade>
          <h1>#GOCORONA</h1>
        </Fade>
        <div className="card-grid">
          <Flip left delay={300}>
            <div className="card">
              <img src={Sanitizer} alt="card-img" />
              <h3>Wash hands often!</h3>
              <p>Wash your hands properly with a good sanitizer!</p>
            </div>
          </Flip>
          <Flip left delay={300}>
            <div className="card">
              <img src={Sneezing} alt="card-img" />
              <h3>Cover your mouth while sneezing!</h3>
              <p>
                It's always good to cover your mouth while sneezing. You'll
                always thank yourself for that!
              </p>
            </div>
          </Flip>
          <Flip left delay={300}>
            <div className="card">
              <img src={Homework} alt="card-img" />
              <h3>Stay at home, Work at home!</h3>
              <p>
                This pandemic time, be at home, work at home, & learn at home!
              </p>
            </div>
          </Flip>
        </div>
      </div>
    </section>
  );
}

export default Cards;
