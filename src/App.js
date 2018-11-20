import React, {Component} from 'react';
import './App.css';
import './withRoot';
import withRoot from "./withRoot";
import AppBar from "./components/StyledAppBar"
import HousesTable from "./containers/HousesTable";
require('dotenv').config();

class App extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <HousesTable/>
            </div>
        );
    }
}

export default withRoot(App);
