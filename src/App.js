import React, {Component} from 'react';
import './App.css';
import './withRoot';
import withRoot from "./withRoot";
import AppBar from "./components/StyledAppBar"

class App extends Component {
    render() {
        return (
            <div>
                <AppBar/>
            </div>
        );
    }
}

export default withRoot(App);
