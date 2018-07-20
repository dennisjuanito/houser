import {Switch, Route} from react-router-dom;
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";

const routes = (
    <Switch>
        <Route exact to="/" component={Dashboard} />
        <Route to="/wizard" component={Wizard} />
    </Switch>
)