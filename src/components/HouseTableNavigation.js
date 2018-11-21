import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import IconButton from "@material-ui/core/IconButton/IconButton";
import LastPageIcon from "@material-ui/core/SvgIcon/SvgIcon";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import FirstPageIcon from "@material-ui/icons/FirstPage"

const styles = (theme) => {
    return {
        root: {
            width: '250px'
        },
        pageNumeration: {
            ...theme.typography.subtitle1,
            float: 'right',
            marginRight: '20px',
            padding: '12px'
        }
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
                color="primary"
                onClick={handleFirstPageButtonClick}
                disabled={page === 1}
                aria-label="First Page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton
                color="primary"
                onClick={handleBackButtonClick}
                disabled={page === 1}
                aria-label="Previous Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                color="primary"
                onClick={handleNextButtonClick}
                aria-label="Next Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <div className={classes.pageNumeration}>Page {page}</div>
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