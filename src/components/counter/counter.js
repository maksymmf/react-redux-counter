import { useDispatch, useSelector } from 'react-redux';
import { handleIncrement, handleDecrement, handleReset } from '../../store/actions/index';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <div>
            <h1>{count}</h1>
            <div className='button-wrapper'>
                <button onClick={() => dispatch(handleIncrement())}>Increment</button>
                <button onClick={() => dispatch(handleDecrement())}>Decrement</button>
                <button onClick={() => dispatch(handleReset())}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;