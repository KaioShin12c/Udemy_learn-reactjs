import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import categoryApi from '../../../../api/categoryApi';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',
        '& > li': {
            marginTop: theme.spacing(1),

            transition: 'all 0.25s',

            '&:hover': {
                color: theme.palette.primary.dark,
                cursor: 'pointer',
            },
        },
    },
}));

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                );
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);

    const handleCategoryClick = (category) => {
        if (onChange) onChange(category.id);
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Danh mục sản phẩm</Typography>
            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
