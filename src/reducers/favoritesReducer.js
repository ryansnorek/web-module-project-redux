import favoriteMovieList from '../components/FavoriteMovieList';
import movies from '../data';
import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITES } from '../actions/favoritesActions';

const initialFavs = {
    favorites: movies,
    displayFavorites: false
}

const reducer = (state = initialFavs, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            console.log(state.favorites)
            state.favorites.push(action.payload)
            console.log(state.favorites)
            return {
                ...state,
                favorites: state.favorites
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => (parseInt(action.payload) !== item.id))
            }
        default:
            return state;
            
    }
};

export default reducer;