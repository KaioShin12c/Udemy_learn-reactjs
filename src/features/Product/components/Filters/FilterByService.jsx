import { Box, FormControlLabel, makeStyles, Typography } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderTop: `1px solid ${theme.palette.grey[300]}`,
    },
    list: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li ': {
            marginTop: theme.spacing(1),
            margin: 0,
        },
    },
}));

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();
    const handleChange = (e) => {
        if (!onChange) return;

        const { name, checked } = e.target;

        onChange({ [name]: checked });
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Dịch vụ</Typography>
            <ul className={classes.list}>
                {[
                    { value: 'isPromotion', label: 'Có khuyễn mãi' },
                    { value: 'isFreeShip', label: 'Vận chuyển miễn phí' },
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;
