import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import StepOne from "../StepOne/StepOne";
import StepTwo from "../StepTwo/StepTwo";
import StepThree from "../StepThree/StepThree";
import {cancel} from "../../ducks/reducer.js"; 
import {connect} from 'react-redux';

export class Wizard extends Component {
    cancel() {
        let {cancel} = this.props;
        cancel();
    }
  render() {
    return (
      <div>
        <Link to="/">
          <button onClick={() => this.cancel()}>Cancel</button>
        </Link>
        <Switch>
          <Route component={StepOne} path="/wizard/step1" />
          <Route component={StepTwo} path="/wizard/step2" />
          <Route component={StepThree} path="/wizard/step3" />
        </Switch>
      </div>
    );
  }
}

export default connect(null, {cancel})(Wizard);