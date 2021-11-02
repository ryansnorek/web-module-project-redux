import React from 'react';
import { connect } from 'react-redux';
import MovieListItem from './MovieListItem';
import MovieFooter from './MovieFooter';

const MovieList = (props) => {
    const { movies } = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Metascore</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                        movies.map(movie=><MovieListItem key={movie.id} movie={movie}/>)
                    }
                </tbody>
            </table>
            
            <MovieFooter totalMovies={movies.length}/>
        </div>
    );
}
// Inject these props into this Movielist component
const mapStateToProps = state => {
    return ({
        // movies from our movieReducer state object
        movies: state.movies
    });
};

export default connect(mapStateToProps)(MovieList);