import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class TopRated extends React.Component {
      state = {
        movies: [],
      };

      componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR&page=1').then((response) => {
          const moviesResponse = response.data.results;
          this.setState({ movies: moviesResponse });
          console.log(this.setState);

        });
      }
 
      render() {
        const data = this.state;
        console.log(data);

        return (
          <div className="top-rated">
          <h2 className="sous-titre">Films les mieux notés</h2>
          {
            this.state.movies.map(
              (movie) => (
                <div>
                  <div className="scene">
                    <div className="card">
                      <div className="card__face card__face--front">

                        <Link to={`/film/${movie.id}`}>
                          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
                        </Link>
                      </div>

                      <div className="card__face card__face--back">
                      <Link to={`/film/${movie.id}`}>

                        <h3 className="movie-title">{movie.title}</h3>
                        <p className="release-date">Date de sortie : {movie.release_date}</p>
                        <p className="average">Note : {movie.vote_average} / 10</p>
                        <p className="story">Résumé : {movie.overview}</p>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>

              ),
            )
        }
          </div>
        );
      }
}

export default TopRated;
