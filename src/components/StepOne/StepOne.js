import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: 0
    };
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
  }

  handleName(val) {
    this.setState({
      name: val
    });
  }

  handleAddress(val) {
    this.setState({
      address: val
    });
  }

  handleCity(val) {
    this.setState({
      city: val
    });
  }

  handleState(val) {
    this.setState({
      state: val
    });
  }

  handleZip(val) {
    this.setState({
      zip: +val
    });
  }

 
  render() {
    return (
      <div>
        Wizard
          <p>name</p>
          <input value={this.state.name} type="text" onChange={e => this.handleName(e.target.value)} />
          <p>address</p>
          <input value={this.state.address}
            type="text"
            onChange={e => this.handleAddress(e.target.value)}
          />
          <p>city</p>
          <input value={this.state.city} type="text" onChange={e => this.handleCity(e.target.value)} />
          <p>state</p>
          <input value={this.state.state} type="text" onChange={e => this.handleState(e.target.value)} />
          <p>zip</p>
          <input value={this.state.zip} type="text" onChange={e => this.handleZip(e.target.value)} />
         
        
      </div>
    );
  }
}
