import React from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto'

const theme = createMuiTheme({
    palette: {
        primary: {
            light: indigo[300],
            main: indigo[500],
            dark: indigo[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
        background: {
            default: grey[100]
        }
    },
    typography: {
        useNextVariants: true,
        title: {
            fontSize: '22px'
        },
        subtitle2: {
            color: '#24b47e'
        },
        subtitle1: {
            color: grey[600],
            fontWeight: '500'
        }
    },
});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props} />
            </MuiThemeProvider>
        );
    }

    return WithRoot;
}

export default withRoot;