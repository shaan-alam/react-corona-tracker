import React from "react";

const List = ({ countries, selected, selectItem }) => {
  return (
    <>
      {countries.map((item) => (
        <li
          key={item}
          onClick={selectItem}
          className={selected === item ? "selected" : ""}
        >
          {item}
        </li>
      ))}
    </>
  );
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      countries: [],
      active: false,
    };
  }

  static getDerivedStateFromProps(props) {
    return { countries: props.countries };
  }

  toggle = (e) => {
    this.setState({ active: !this.state.active });
  };

  selectItem = (e) => {
    const selected = e.target.innerText;
    this.props.setSelectedCountry(selected);
  };

  searchItem = (e) => {
    const results = this.props.countries.filter((item) => {
      if (item.toLowerCase().match(e.target.value.toLowerCase()) !== null) {
        return item;
      }
    });

    console.log(results);

    if (results.length !== 0) {
      this.setState({ error: "", countries: results });
    } else {
      this.setState({ error: "No countries....", countries: [] });
    }
  };

  render() {
    return (
      <div className="dropdown">
        <p>{this.state.selected}</p>
        <a
          href="#!"
          className={`dropdown_toggler ${this.state.active ? " up" : " down"}`}
          onClick={this.toggle}
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
        <ul className={this.state.active ? "active" : ""}>
          <input
            type="text"
            placeholder="Search..."
            onChange={this.searchItem}
          />
          {this.state.error && <p>{this.state.error}</p>}
          <List
            selected={this.props.selectedCountry}
            countries={this.state.countries}
            selectItem={this.selectItem}
          />
        </ul>
      </div>
    );
  }
}

export default Dropdown;
