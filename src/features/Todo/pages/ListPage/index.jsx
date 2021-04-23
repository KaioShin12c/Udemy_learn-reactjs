import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import TodoList from './../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';

function ListPage(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(() => {
        const param = queryString.parse(location.search);
        return param.status || 'all';
    });

    useEffect(() => {
        const param = queryString.parse(location.search);
        setFilterStatus(param.status || 'all');
    }, [location.search]);

    const handleTodoClick = (todo, index) => {
        const newTodoList = [...todoList];
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        const queryParam = { status: 'all' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        });
        // setFilterStatus('all');
    };
    const handleShowCompletedClick = () => {
        const queryParam = { status: 'completed' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        });
        // setFilterStatus('completed');
    };
    const handleShowNewClick = () => {
        const queryParam = { status: 'new' };
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParam),
        });
        // setFilterStatus('new');
    };

    const renderedTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filterStatus === 'all' || todo.status === filterStatus
        );
    }, [todoList, filterStatus]);

    const handleTodoFormSubmit = (values) => {
        const newTodo = {
            id: todoList.length + 1,
            title: values.title,
            status: 'new',
        };

        const newTodoList = [...todoList, newTodo];

        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>What to do</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default ListPage;
