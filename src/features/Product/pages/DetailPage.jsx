import {
    Box,
    Container,
    Grid,
    makeStyles,
    Paper,
    LinearProgress,
} from '@material-ui/core';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import AddToCardForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import ProductDescription from '../components/ProductDescription';
import ProductAdditional from '../components/ProductAdditional';
import ProductReviews from '../components/ProductReviews';

const useStyle = makeStyles((theme) => ({
    root: {
        paddingBottom: theme.spacing(3),
    },
    left: {
        width: '400px',
        padding: theme.spacing(1.5),
        borderRight: `1px solid ${theme.palette.grey[300]}`,
    },
    right: {
        flex: '1 1 0',
        padding: theme.spacing(1.5),
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
}));

function DetailPage() {
    const classes = useStyle();
    const {
        params: { productId },
        url,
    } = useRouteMatch();

    const { product, loading } = useProductDetail(productId);

    if (loading) {
        <Box className={classes.loading}>
            <LinearProgress />
        </Box>;
    }

    const handleAddToCartSubmit = (formValues) => {
        console.log(formValues);
    };

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
                                <AddToCardForm onSubmit={handleAddToCartSubmit} />
                            </Grid>
                        </Grid>
                    </Paper>
                    <ProductMenu />
                    <Switch>
                        <Route path={url} exact>
                            <ProductDescription product={product} />
                        </Route>
                        <Route path={`${url}/additional`} component={ProductAdditional} />
                        <Route path={`${url}/reviews`} component={ProductReviews} />
                    </Switch>
                </Container>
            </Box>
        </div>
    );
}

export default DetailPage;
