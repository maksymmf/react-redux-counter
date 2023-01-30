import { COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_RESET } from "../types";

export function handleIncrement () {
    return {
        type: COUNTER_INCREMENT,
        payload: 1
    }
}

export function handleDecrement () {
    return {
        type: COUNTER_DECREMENT,
        payload: 1
    };
}

export function handleReset () {
    return {
        type: COUNTER_RESET,
        payload: 0
    }
}