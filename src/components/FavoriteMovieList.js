import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavorites } from '../actions/favoritesActions';

const FavoriteMovieList = (props) => {
    const { favorites } = props;

    const handleRemoveFavorites = e => {
        console.log(e.target.name)
        // props.dispatch(removeFavorites(movie.id))
    };
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={handleRemoveFavorites} name={movie.id} className="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    return { favorites: state.favoritesReducer.favorites }
}

export default connect(mapStateToProps)(FavoriteMovieList);