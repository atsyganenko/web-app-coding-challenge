import React from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";

const styles = (theme) => {
    return {
        root: {
            minWidth: '300px',
            minHeight: '200px'
        },
        title: {
            ...theme.typography.title,
            color: theme.palette.error.main
        }
    }
};

const ErrorDialog = (props) => {

    const {onClose, open, errorMsg, classes} = props;

    return (
        <Dialog className={props.classes.root}
                onClose={onClose}
                open={open}
                aria-labelledby="house-dialog"
                aria-describedby="house-dialog-description">
            <DialogTitle disableTypography={true}
                         className={classes.title}>{props.title ? props.title : 'Error'}</DialogTitle>
            <DialogContent className={classes.content}>
                <DialogContentText>
                    Details: {errorMsg}
                </DialogContentText>
            </DialogContent>
        </Dialog>);
};

ErrorDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default withStyles(styles)(ErrorDialog);