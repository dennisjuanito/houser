import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import React from "react";

const routes = (
  <Switch>
    <Route component={Dashboard} path="/" exact />
    <Route component={Wizard} path="/wizard" />
  </Switch>
);

export default routes;
