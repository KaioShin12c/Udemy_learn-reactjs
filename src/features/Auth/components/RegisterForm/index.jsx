import { yupResolver } from '@hookform/resolvers/yup';
import {
    Avatar,
    Button,
    makeStyles,
    styled,
    Typography,
    LinearProgress,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-controls/InputField';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        paddingTop: theme.spacing(4),
    },

    avatar: {
        margin: '0 auto',
        backgroundColor: theme.palette.secondary.main,
    },

    title: {
        textAlign: 'center',
        margin: theme.spacing(2, 0, 3, 0),
    },

    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    progress: {
        position: 'absolute',
        top: theme.spacing(1),
        left: 0,
        right: 0,
    },
}));

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your fullname')
            .test(
                'should has at least two words',
                'Please enter at least two words.',
                (value) => {
                    return value.split(' ').length >= 2;
                }
            ),
        email: yup
            .string()
            .required('Please enter your email')
            .email('Please enter a valid email address'),

        password: yup
            .string()
            .required('Enter your password')
            .min(6, 'Please enter at least 6 characters'),

        retypePassword: yup
            .string()
            .required('Please enter your retypePassword')
            .oneOf([yup.ref('password')], 'Password does not macth'),
    });

    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        console.log(values);
        if (onSubmit) {
            await onSubmit(values);
        }
    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.root}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>

            <Typography className={classes.title} component="h3" variant="h5">
                Create an account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="FullName" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="ReTypePassword" form={form} />

                <Button
                    type="submit"
                    disable={isSubmitting}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    fullWidth
                >
                    Create an account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
