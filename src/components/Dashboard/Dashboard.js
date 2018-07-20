import React, { Component } from "react";
import House from "../House/House.js";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }
  componentDidMount() {
    axios
      .get(`/api/houses`)
      .then(response => {
        this.setState({
          houses: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        Dashboard
        <House />
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
      </div>
    );
  }
}
