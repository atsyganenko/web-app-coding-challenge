import React from "react";
import axios from "axios";

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
                    value: "Failed to fetch data"
                }));
        }
    }

    render() {
        return (<p>{this.state.value}</p>);
    }
}

export default URLtoNameResolver;