import {createStore,combineReducers} from 'redux';

const loading = false;

const LOADING = (state =  loading, action ) => {
    if(action.type == 'SET_LOADING'){
        return action.value;
    }
    return state;
}


const USER = (state = {}, action) => {
    if(action.type == 'SET_USER'){
        return action.value
    }
    return state;
}

const reducer = combineReducers({
    LOADING,
    USER
})

const store = createStore(reducer);

export default store;