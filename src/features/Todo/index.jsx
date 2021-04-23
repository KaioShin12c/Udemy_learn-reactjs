import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

function TodoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <h2>Todo Shared UI</h2>
            <Switch>
                <Route path={match.path} component={ListPage} exact/>
                <Route path={`${match.path}/:idTodo`} component={DetailPage} />
            </Switch>
        </div>
    );
}

export default TodoFeature;