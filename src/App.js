import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import productApi from './api/productApi';
import Header from './components/Header';
import CartFeature from './features/Cart';
import CounterFeature from './features/Counter';
import PostFeature from './features/Post';
import ProductFeature from './features/Product';
import TodoFeature from './features/Todo';

function App() {
    useEffect(() => {
        const fetchProduct = async () => {
            const params = {
                _limit: 10,
            };
            await productApi.getAll(params);
        };

        fetchProduct();
    }, []);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Route path="/posts" component={PostFeature}></Route>
                <Route path="/todos" component={TodoFeature}></Route>
                <Route path="/counter" component={CounterFeature}></Route>
                <Route path="/products" component={ProductFeature}></Route>
                <Route path="/cart" component={CartFeature}></Route>
            </Switch>
        </div>
    );
}

export default App;
