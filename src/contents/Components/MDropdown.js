import React, { Component } from "react";
import Settings from "../../utils/Settings";
import FontAwesome from "react-fontawesome";
import "./MDropdown.css";

class MDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      Capitals: [
        {
          id: 0,
          title: "Mumbai",
          selected: false,
          key: "location",
        },
        {
          id: 1,
          title: "Bangalore",
          selected: false,
          key: "location",
        },
        {
          id: 2,
          title: "Delhi",
          selected: false,
          key: "location",
        },
        {
          id: 3,
          title: "Hyderbad",
          selected: false,
          key: "location",
        },
        {
          id: 4,
          title: "Chennai",
          selected: false,
          key: "location",
        },
        {
          id: 5,
          title: "Rajkot",
          selected: false,
          key: "location",
        },
      ],
    };
  }

  handleClickOutside = (e) => {
    this.setState({ listOpen: false });
  };

  toggleList = (prevState) => {
    this.setState({ listOpen: !prevState.listOpen });
  };
  render() {
    const { listOpen, Capitals } = this.state;
    return (
      <div className="wrapp">
        <div className="header" onClick={this.toggleList}>
          <input type="text" placeholder="select location" />
          {listOpen ? (
            <FontAwesome name="angle-up" size="2x" />
          ) : (
            <FontAwesome name="angle-down" size="2x" />
          )}
        </div>
        {listOpen && (
          <ul className="list">
            {Capitals.map((item) => (
              <li className="list-item" key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default MDropdown;
