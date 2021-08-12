import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class PlayingNow extends React.Component {
      state = {
        movies: [],
      };

      componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR&page=1').then((response) => {
          const moviesResponse = response.data.results;
          this.setState({ movies: moviesResponse });
          console.log(this.setState);

        });
      }
 
      render() {
        const data = this.state;
        console.log(data);

        return (
          <div className="playing-now">
          <h2 className="sous-titre">Actuellement au cinéma</h2>
            {
                      this.state.movies.map(
                        (movie) => (
                          <Link to={`/film/${movie.id}`}>

                          <div className="one-movie">
                              <div key={movie.id} className="grid-item">
                                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                                <h3>{movie.title}</h3>
                                <p>Date de sortie : {movie.release_date}</p>
                                <p>Note : {movie.vote_average} / 10</p>
                                <p>Résumé : {movie.overview}</p>
                              </div>
                          </div></Link>
                        ),
                      )
                  }
          </div>
        );
      }
}

export default PlayingNow;
