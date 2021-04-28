import { IconButton, Typography, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { RemoveCircleOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disable: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    root: {},

    box: {
        maxWidth: '200px',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
    },

    title: {
        // marginLeft: theme.spacing(6),
    },
}));

function QuantityField(props) {
    const { form, name, label, disable } = props;
    const { errors, setValue } = form;
    const hasError = !!errors[name];
    const classes = useStyles();

    return (
        <FormControl
            error={hasError}
            variant="outlined"
            fullWidth
            margin="normal"
            size="small"
        >
            <Typography className={classes.title}>{label}</Typography>
            <Controller
                name={name}
                control={form.control}
                render={({ onChange, onBlur, name, value }) => (
                    <Box className={classes.box}>
                        <IconButton
                            onClick={() =>
                                setValue(
                                    name,
                                    Number.parseInt(value)
                                        ? Number.parseInt(value) - 1
                                        : 1
                                )
                            }
                        >
                            <RemoveCircleOutline />
                        </IconButton>
                        <OutlinedInput
                            id={name}
                            type="number"
                            label={label}
                            disabled={disable}
                            onChange={onChange}
                            value={value}
                            onBlur={onBlur}
                            name={name}
                        />

                        <IconButton
                            onClick={() =>
                                setValue(
                                    name,
                                    Number.parseInt(value)
                                        ? Number.parseInt(value) + 1
                                        : 1
                                )
                            }
                        >
                            <AddCircleOutlineIcon />
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText>{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;
