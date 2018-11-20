import React from "react";
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import URLtoNameResolver from '../containers/URLtoNameResolver';

const DetailedHouseInfoDialog = (props) => {


    const {open, onClose, houseDetails} = props;

    return (
        <Dialog
            onClose={onClose}
            open={open}
            aria-labelledby="house-dialog"
            aria-describedby="house-dialog-description">
            <DialogTitle id="house-dialog">{houseDetails.name ? houseDetails.name : "No data"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <URLtoNameResolver url={houseDetails.currentLord}/>
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};

DetailedHouseInfoDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    houseDetails: PropTypes.object.isRequired
};

export default DetailedHouseInfoDialog;