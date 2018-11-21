import React from 'react';
import DetailedHouseInfoDialog from '../components/DetailedHouseInfoDialog';
import ErrorDialog from '../components/ErrorDialog';
import HousesTable from './HousesTable';
import HouseTableNavigation from '../components/HouseTableNavigation';

class Houses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dialog: {
                display: false,
                houseDetails: {},
            },
            page: 1
        }
    };

    handleChangePage = (page) => {
        this.setState({page: page});
    };

    handleTableRowClick = (houseDetails) => {
        const updatedState = {...this.state.dialog};
        updatedState.houseDetails = houseDetails;
        updatedState.display = true;
        this.setState({dialog: updatedState});
    };


    handleHouseDetailsDialogClose = () => {
        const updatedState = {...this.state.dialog};
        updatedState.display = false;
        this.setState({dialog: updatedState});
    };

    handleErrorDialogClose = () => {
        this.setState({error: undefined});
    };

    handleDataLoadError = (error) => {
        this.setState({error: {title: 'Failed to load data', message: error.message}});
    };

    render() {
        return (
            <React.Fragment>
                <HousesTable page={this.state.page}
                             pageSize={10}
                             handleTableRowClick={this.handleTableRowClick}
                             onDataLoadError={this.handleDataLoadError}/>
                <HouseTableNavigation
                    onChangePage={this.handleChangePage}
                    page={this.state.page}/>
                <DetailedHouseInfoDialog open={this.state.dialog.display}
                                         houseDetails={this.state.dialog.houseDetails}
                                         onClose={this.handleHouseDetailsDialogClose}/>
                <ErrorDialog open={this.state.error !== undefined}
                             errorMsg={this.state.error ? this.state.error.message : ""}
                             title={this.state.error ? this.state.error.title : undefined}
                             onClose={this.handleErrorDialogClose}/>
            </React.Fragment>
        );
    }
}

export default Houses;