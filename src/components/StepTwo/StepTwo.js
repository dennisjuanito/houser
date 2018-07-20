import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: 0,
    };

    this.handleImg = this.handleImg.bind(this);
  }

  handleImg(val) {
    this.setState({
      img: val
    });
  }

  render() {
    return (
      <div>
        Wizard
          <p>image</p>
          <input value={this.state.img} type="text" onChange={e => this.handleImg(e.target.value)} />
      </div>
    );
  }
}
