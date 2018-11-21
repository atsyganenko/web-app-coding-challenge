import React from 'react';
import DetailedHouseInfoDialog from '../components/DetailedHouseInfoDialog';
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
            page: 1,
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


    handleDialogClose = () => {
        const updatedState = {...this.state.dialog};
        updatedState.display = false;
        this.setState({dialog: updatedState});
    };

    handleDataLoadError = () => {
        //TODO
    };

    render() {
        return (
            <React.Fragment>
                <DetailedHouseInfoDialog open={this.state.dialog.display}
                                         houseDetails={this.state.dialog.houseDetails}
                                         onClose={this.handleDialogClose}/>,
                <HousesTable page={this.state.page}
                             pageSize={10}
                             handleTableRowClick={this.handleTableRowClick}
                             onDataLoadError={this.handleDataLoadError}/>
                <HouseTableNavigation
                    onChangePage={this.handleChangePage}
                    page={this.state.page}/>
            </React.Fragment>
        );
    }
}

export default Houses;