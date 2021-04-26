import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const useStyle = makeStyles((theme) => ({
    root: {},
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
}));

function DetailPage() {
    const classes = useStyle();
    const {
        params: { productId },
    } = useRouteMatch();

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        <Box>Loading</Box>;
    }

    return (
        <div>
            <Box className={classes.root}>
                <Container>
                    <Paper elevation={0}>
                        <Grid container>
                            <Grid item className={classes.left}>
                                <ProductThumbnail product={product} />
                            </Grid>
                            <Grid item className={classes.right}>
                                <ProductInfo product={product} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </div>
    );
}

export default DetailPage;
