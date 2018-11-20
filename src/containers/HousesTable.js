import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from '../components/TablePaginationActions';
import axios from 'axios';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
});

class HousesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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
        const {classes} = this.props;
        const {page, rowsPerPage} = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.data.length - page * rowsPerPage);

        return (
            <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>House name</TableCell>
                                <TableCell>Region</TableCell>
                                <TableCell>Words</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, index) => {
                                return (
                                    <TableRow key={index}>
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
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    colSpan={3}
                                    count={this.state.data.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    rowsPerPageOptions={[5, 10, 20, 50]}
                                    onChangePage={this.handleChangePage}
                                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                    ActionsComponent={TablePaginationActions}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </Paper>
        );
    }
}

HousesTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HousesTable);