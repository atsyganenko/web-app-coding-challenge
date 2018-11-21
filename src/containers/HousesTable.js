import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const styles = (theme) => ({
    table: {
        width: '100%',
        tableLayout: 'fixed',
        backgroundColor: 'white'
    },
    row: {
        '&:hover': {
            backgroundColor: theme.palette.background.default,
        }
    }
});

class HousesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this._loadData(error => this.props.onDataLoadError(error));
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.props.page !== prevProps.page) {
            this._loadData(this._updateErrorHandler);
        }
    }

    _updateErrorHandler = (error) => {
        this.setState({
            data: [],
        });
        this.props.onDataLoadError(error);
    };

    _loadData(errorHandler) {
        axios.get(process.env.REACT_APP_API_HOUSES_URL, {
            params: {page: this.props.page, pageSize: this.props.pageSize}
        })
            .then(result => this.setState({
                data: result.data,
            }))
            .catch(error => errorHandler(error))
    }

    render() {
        const {classes, handleTableRowClick, pageSize} = this.props;
        const emptyRows = pageSize - Math.min(pageSize, this.state.data.length);

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>House name</TableCell>
                        <TableCell>Region</TableCell>
                        <TableCell>Words</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.state.data.map((n, index) => {
                        return (
                            <TableRow key={index} className={classes.row}
                                      onClick={() => handleTableRowClick(n)}>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.region}</TableCell>
                                <TableCell>{n.words}</TableCell>
                            </TableRow>
                        );
                    })}
                    {emptyRows > 0 && (
                        <TableRow style={{height: 48 * emptyRows}}>
                            <TableCell colSpan={6}/>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        );
    }
}

HousesTable.propTypes = {
    classes: PropTypes.object.isRequired,
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    handleTableRowClick: PropTypes.func.isRequired,
    onDataLoadError: PropTypes.func.isRequired
};

export default withStyles(styles)(HousesTable);