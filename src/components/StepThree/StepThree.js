import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      mortgage: 0,
      rent: 0
    };

    this.handleMortgage = this.handleMortgage.bind(this);
    this.handleRent = this.handleRent.bind(this);
    this.addHouse = this.addHouse.bind(this);
  }

  handleRent(val) {
    this.setState({
      rent: +val
    });
  }

  handleMortgage(val) {
    this.setState({
      mortgage: +val
    });
  }

  addHouse() {
    let { name, address, city, state, zip } = this.state;
    axios.post(`/api/houses/add`, { name, address, city, state, zip });
  }

  render() {
    return (
      <div>
        Wizard
        <p>mortgage</p>
        <input
          value={this.state.mortgage}
          type="text"
          onChange={e => this.handleMortgage(e.target.value)}
        />
        <p>rent</p>
        <input
          value={this.state.rent}
          type="text"
          onChange={e => this.handleRent(e.target.value)}
        />
        <Link to="/">
          <button onClick={() => this.addHouse()}>Complete</button>
        </Link>
      </div>
    );
  }
}
