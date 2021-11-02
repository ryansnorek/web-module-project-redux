import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

// export default movieReducer;
export default combineReducers({
    movieReducer,
    favoritesReducer
});