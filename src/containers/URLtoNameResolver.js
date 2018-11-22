import React from "react";
import api from "cachios";
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
            this._fetchForName();
        }
    }

    _fetchForName = () => {
        api.get(this.props.url, {
            ttl: process.env.REACT_APP_REQUEST_CACHE_TTL,
            headers: {'accept': process.env.REACT_APP_API_ACCEPT_HEADER}
        })
            .then(result => this.setState({
                value: result.data.name,
            }))
            .catch(error => this.setState({
                value: <span className={this.props.classes.errorMsg}>Failed to fetch data. Error
                        details: {error.message}</span>
            }));
    };

    render() {
        return (<React.Fragment>{this.state.value}</React.Fragment>);
    }
}

export default withStyles(styles)(URLtoNameResolver);