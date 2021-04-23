import { Typography } from '@material-ui/core';
import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../../api/productApi';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};

const useStyle = makeStyles((theme) => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
}));

function ListPage(props) {
    const classes = useStyle();
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
                setProductList(data);
            } catch (error) {
                console.log('Failed to fetch product list:', error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid className={classes.left} item>
                        <Paper elevation={0}>Left Colunm</Paper>
                    </Grid>
                    <Grid className={classes.right} item>
                        <Paper elevation={0}>
                            {loading ? (
                                <ProductSkeletonList />
                            ) : (
                                <ProductList data={productList} />
                            )}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
