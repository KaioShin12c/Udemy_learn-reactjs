import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const handleIncreaseClick = () => {
        const increaseAction = increase();
        console.log(increaseAction);
        dispatch(increaseAction);
    };

    const handleDecreaseClick = () => {
        const decreaseAcion = decrease();
        dispatch(decreaseAcion);
    };

    return (
        <div>
            Counter: {counter}
            <div>
                <button onClick={handleIncreaseClick}>Increase</button>
                <button onClick={handleDecreaseClick}>Decrease</button>
            </div>
        </div>
    );
}

export default CounterFeature;
