import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateMortgage, updateRent } from "../../ducks/reducer.js";
import axios from "axios";

class StepThree extends Component {
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

  componentDidMount() {
    this.setState({
      mortgage: this.props.mortgage,
      rent: this.props.rent
    });
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
    let { name, address, city, state, zip, img } = this.props;
    let {mortgage, rent} = this.state;

    axios.post(`/api/houses/add`, { name, address, city, state, zip, img, mortgage, rent });
  }

  handleNext() {
    let { updateMortgage, updateRent }  = this.props;
    updateMortgage(this.state.mortgage);
    updateRent(this.state.rent);
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
        <Link to="/wizard/step2"><button onClick={() => this.handleNext()}>Previous Step</button></Link>
      </div>
    );
  }
}


function mapToProps(theState) {
    let { name, address, city, state, zip, img, mortgage, rent } = theState;
    return{ name, address, city, state, zip, img, mortgage, rent };
  }
  
  export default connect(
    mapToProps,
    { updateMortgage, updateRent }
  )(StepThree);
  