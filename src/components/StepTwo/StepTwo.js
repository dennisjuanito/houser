import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateImg } from "../../ducks/reducer.js";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: 0
    };

    this.handleImg = this.handleImg.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleImg(val) {
    this.setState({
      img: val
    });
  }

  handleNext() {
    let { updateImg } = this.props;
    updateImg(this.state.img);
  }

  render() {
    return (
      <div>
        Wizard
        <p>image</p>
        <input
          value={this.state.img}
          type="text"
          onChange={e => this.handleImg(e.target.value)}
        />
        <Link to="/wizard/step3"><button onClick={() => this.handleNext()}></button></Link>
      </div>
    );
  }
}

function mapToProps(theState) {
  let { img } = theState;
  return { img };
}

export default connect(
  mapToProps,
  { updateImg }
)(StepTwo);
