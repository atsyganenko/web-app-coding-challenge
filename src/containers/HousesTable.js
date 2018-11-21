import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import grey from '@material-ui/core/colors/grey';
import axios from "axios";

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

class HousesTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this._loadData();
    }

    componentDidUpdate(prevProps, prevState, prevContext) {
        if (this.props.page !== prevProps.page) {
            this._loadData();
        }
    }

    _loadData() {
        axios.get(process.env.REACT_APP_API_HOUSES_URL,
            {
                params: {
                    page: this.props.page,
                    pageSize: this.props.pageSize
                }
            })
            .then(result => this.setState({
                data: result.data,
            }))
            .catch(error => this.props.onDataLoadError(error))
    }

    render() {
        const {classes, handleTableRowClick} = this.props;

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