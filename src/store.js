import { createStore, combineReducers } from 'redux';
import oakleyReducer from './reducers/oakley';

const rootReducer = combineReducers({
    activity: oakleyReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;