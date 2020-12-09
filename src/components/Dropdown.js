import React from "react";

const List = ({ listItems, selected, selectItem }) => {
  return (
    <>
      {listItems.map((item) => (
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
      listItems: [],
      selected: "India",
      active: false,
    };
  }

  componentDidMount() {
    this.setState({ listItems: this.props.listItems });
  }

  toggle = (e) => {
    this.setState({ active: !this.state.active });
  };

  selectItem = (e) => {
    const selected = e.target.innerText;
    this.setState({ selected, active: false });
  };

  searchItem = (e) => {
    const results = this.props.listItems.filter((item) => {
      if (item.toLowerCase().match(e.target.value.toLowerCase()) !== null) {
        return item;
      }
    });

    if (results.length !== 0) {
      this.setState({ error: "", listItems: results });
    } else {
      this.setState({ error: "No countries....", listItems: [] });
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
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        </a>
        <ul className={this.state.active ? "active" : ""}>
          <input
            type="text"
            placeholder="Search..."
            onChange={this.searchItem}
          />
          {this.state.error && <p>{this.state.error}</p>}
          <List
            selected={this.state.selected}
            listItems={this.state.listItems}
            selectItem={this.selectItem}
          />
        </ul>
      </div>
    );
  }
}

export default Dropdown;
