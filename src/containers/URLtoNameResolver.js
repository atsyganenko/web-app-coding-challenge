import React from "react";
import axios from "axios";
import {withStyles} from '@material-ui/core/styles';

const styles = (theme) => {
    return {
        errorMsg: {
            color: theme.palette.error.main
        }
    }
};

class URLtoNameResolver extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "Unknown"
        }
    }

    componentDidMount() {
        if (this.props.url) {
            axios.get(this.props.url)
                .then(result => this.setState({
                    value: result.data.name,
                }))
                .catch(error => this.setState({
                    value: <span className={this.props.classes.errorMsg}>Failed to fetch data. Error
                        details: {error.message}</span>
                }));
        }
    }

    render() {
        return (<React.Fragment>{this.state.value}</React.Fragment>);
    }
}

export default withStyles(styles)(URLtoNameResolver);