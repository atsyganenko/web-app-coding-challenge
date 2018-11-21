import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton/IconButton";
import LastPageIcon from "@material-ui/core/SvgIcon/SvgIcon";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import FirstPageIcon from "@material-ui/icons/FirstPage"

const styles = () => {
    return {
        root: {}
    }
};

const HouseTableNavigation = (props) => {

    const {classes, page, theme} = props;
    const handleFirstPageButtonClick = () => {
        props.onChangePage(1);
    };

    const handleBackButtonClick = () => {
        props.onChangePage(props.page - 1);
    };

    const handleNextButtonClick = () => {
        props.onChangePage(props.page + 1);
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 1}
                aria-label="First Page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 1}
                aria-label="Previous Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                aria-label="Next Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            Page {page}
        </div>
    );
};

HouseTableNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};


export default withStyles(styles, {withTheme: true})(HouseTableNavigation)