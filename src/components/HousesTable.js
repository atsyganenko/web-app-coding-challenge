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
import TablePaginationActions from '../components/TablePaginationActions';
import grey from '@material-ui/core/colors/grey';

const styles = () => ({
    table: {
        width: '100%'
    },
    row: {
        '&:hover': {
            backgroundColor: grey[100],
        },
    }
});

const HousesTable = (props) => {

    const {classes, data, rowsPerPage, page, handleChangePage, handleChangeRowsPerPage, handleTableRowClick} = props;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

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
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((n, index) => {
                    return (
                        <TableRow key={index} className={classes.row}
                                  onClick={() => handleTableRowClick(n.url)}>
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
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        rowsPerPageOptions={[5, 10, 20, 50]}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    );
};

HousesTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    handleChangePage: PropTypes.func.isRequired,
    handleChangeRowsPerPage: PropTypes.func.isRequired,
    handleTableRowClick: PropTypes.func.isRequired
};

export default withStyles(styles)(HousesTable);