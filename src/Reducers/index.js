import songReducer from './songReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    songs: songReducer
})

export default allReducers;