import {createStore} from 'redux';

const initialState = {
    loading : false,
    name : 'Fajar',
    address : 'Mengwi'
}

const reducer = (state =  initialState, action ) => {
    if(action.type == 'SET_LOADING'){
        return {
            ...state,
            loading : action.value
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;