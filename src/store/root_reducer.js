import {combineReducers} from "redux";


const InitialState = {
    counter: 1
}

export function Reducer(state = InitialState, action) {
    switch (action.type) {
        case 'lol': {
            return {
                counter: state.counter + action.value
            }
        }
        default:
            return state
    }
}

const InitialState1 = {
    counter1: 1
}

export function Reducer1(state = InitialState1, action) {
    switch (action.type) {
        case 'lol': {
            return {
                ...state,
                counter1: state.counter1 + action.value
            }
        }

        default:
            return state
    }
}

export default combineReducers({first: Reducer, second: Reducer1})
