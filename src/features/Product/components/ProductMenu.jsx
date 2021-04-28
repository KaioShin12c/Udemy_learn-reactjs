import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link } from '@material-ui/core';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

ProductMenu.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 0,
        listStyleType: 'none',

        '& > li': {
            padding: theme.spacing(2),
        },
        '& > li > a': {
            color: theme.palette.grey[700],
        },
        '& > li > a.active': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
        },
    },
}));

function ProductMenu(props) {
    const { url } = useRouteMatch();
    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link component={NavLink} to={url} exact>
                    Description
                </Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/additional`} exact>
                    Additional Information
                </Link>
            </li>
            <li>
                <Link component={NavLink} to={`${url}/reviews`} exact>
                    Reviews
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;
