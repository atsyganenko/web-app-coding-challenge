import React from "react";
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    }
};

const StyledAppBar = (props) => {

    return (
        <div className={props.classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Web-App Coding Challenge
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

StyledAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledAppBar);