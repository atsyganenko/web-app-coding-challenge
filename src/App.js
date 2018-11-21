import React, {Component} from 'react';
import './App.css';
import './withRoot';
import withRoot from "./withRoot";
import AppBar from "./components/StyledAppBar"
import Houses from "./containers/Houses";

require('dotenv').config();

class App extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <Houses/>
            </div>
        );
    }
}

export default withRoot(App);
