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
    this.deleteHouse = this.deleteHouse.bind(this);
    this.getAllHouses = this.getAllHouses.bind(this);
  }
  componentDidMount() {
    axios
      .get(`/api/houses`)
      .then(response => {
        console.log(response.data);
        this.setState({
          houses: response.data
        });
      })
      .catch(err => console.log(err));
  }

    deleteHouse(id) {
      axios.delete(`/api/houses/delete/${id}`);
      this.getAllHouses();
    }

    getAllHouses() {
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
    let displayHouses = () => {
      return this.state.houses.map(house => {
        let { id, name, address, city, state, zip } = house;

        return (
          <div key={id}>
            <House
              id={id}
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip}
              deleteHouse={this.deleteHouse}
            />
          </div>
        );
      });
    };

    return (
      <div>
        Dashboard
        <Link to="/wizard/step1">
          <button>Add New Property</button>
        </Link>
        {displayHouses()}
      </div>
    );
  }
}
