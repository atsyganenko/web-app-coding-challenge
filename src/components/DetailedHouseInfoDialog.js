import React from "react";
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import {withStyles} from '@material-ui/core/styles';
import URLtoNameResolver from "../containers/URLtoNameResolver";

const styles = (theme) => {
    return {
        key: {
            ...theme.typography.subtitle2,
        }
    };
};

const DetailedHouseInfoDialog = (props) => {

    const {open, onClose, houseDetails} = props;
    const textFields = ['name', 'region', 'coatOfArms', 'words', 'titles',
        'seats', 'founded', 'diedOut', 'ancestralWeapons'];
    const urls = ['currentLord', 'founder', 'heir', 'overlord'];

    const _hasValue = (key) => {
        const isEmptyArray = Array.isArray(houseDetails[key])
            && houseDetails[key].filter(val => val !== "").length === 0;
        return houseDetails[key] && houseDetails[key] !== "" && !isEmptyArray;
    };

    return (
        <Dialog
            onClose={onClose}
            open={open}
            aria-labelledby="house-dialog"
            aria-describedby="house-dialog-description">
            <DialogTitle id="house-dialog">{houseDetails.name ? houseDetails.name : "No data"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Table>
                        <TableBody>
                            {textFields.map((key, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell className={props.classes.key}>{key}</TableCell>
                                        <TableCell>{_hasValue(key) ? props.houseDetails[key]
                                            : 'Unknown'}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {urls.map((key, index) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell className={props.classes.key}>{key}</TableCell>
                                        <TableCell><URLtoNameResolver url={props.houseDetails[key]}/></TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
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

export default withStyles(styles)(DetailedHouseInfoDialog);