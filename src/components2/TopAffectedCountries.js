import React from "react";
import AffectedCountry from "./AffectedCountry";
import Fade from 'react-reveal/Fade';

import { Context } from '../DataContext';


class TopAffectedCountries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generate = () => Math.floor(Math.random() * 1677215).toString(16);

  render() {
    let value = this.context;
    let count = 1;
    return (
      <section className="affected-countries-section">
        <div className="container">
          <Fade>
            <h1>World's most affected countries</h1>
          </Fade>
          <div className="grid">
            {value.state.topAffectedCountries.map(affectedCountry => (
              <AffectedCountry
                id={count++}
                key={this.generate()}
                affectedCountry={affectedCountry}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}


TopAffectedCountries.contextType = Context;

export default TopAffectedCountries;
