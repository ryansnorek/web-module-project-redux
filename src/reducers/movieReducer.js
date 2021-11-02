import { ADD_MOVIE, DELETE_MOVIE } from '../actions/movieActions.js';
import movies from './../data.js';

const initialState = {
    movies: movies,
    appTitle: "IMDB Movie Database"
}
// set state to initial state
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(item => (parseInt(action.payload) !== item.id))
            }
        case ADD_MOVIE:
            state.movies.push(action.payload)
            console.log(state.movies)
            return {
                ...state,
                movies: state.movies 
            }
        default:
            return state;
    }
}

export default reducer;