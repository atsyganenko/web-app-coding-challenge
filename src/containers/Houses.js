import React from 'react';
import axios from 'axios';
import DetailedHouseInfoDialog from '../components/DetailedHouseInfoDialog';
import HousesTable from '../components/HousesTable';

class Houses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dialog: {
                display: false,
                houseDetails: {},
            },
            page: 0,
            rowsPerPage: 10
        }
    };

    handleChangePage = (event, page) => {
        this.setState({page: page});
    };

    handleChangeRowsPerPage = event => {
        this.setState({rowsPerPage: event.target.value})
    };

    handleTableRowClick = (url) => {
        const updatedState = {...this.state.dialog};
        axios.get(url)
            .then(result => {
                updatedState.houseDetails = result.data;
                updatedState.display = true;
                this.setState({dialog: updatedState});
            })
            .catch(error => this.setState({
                error
            }));
    };


    handleDialogClose = () => {
        const updatedState = {...this.state.dialog};
        updatedState.display = false;
        this.setState({dialog: updatedState});
    };

    componentDidMount() {

        axios.get(process.env.REACT_APP_API_URL + '/houses')
            .then(result => this.setState({
                data: result.data,
            }))
            .catch(error => this.setState({
                error
            }));
    }

    render() {
        return (
            <React.Fragment>
                <DetailedHouseInfoDialog open={this.state.dialog.display}
                                         houseDetails={this.state.dialog.houseDetails}
                                         onClose={this.handleDialogClose}/>,
                <HousesTable data={this.state.data}
                             rowsPerPage={this.state.rowsPerPage}
                             page={this.state.page}
                             handleTableRowClick={this.handleTableRowClick}
                             handleChangePage={this.handleChangePage}
                             handleChangeRowsPerPage={this.handleChangeRowsPerPage}/>
            </React.Fragment>
        );
    }
}

export default Houses;