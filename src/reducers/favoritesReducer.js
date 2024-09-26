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
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
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