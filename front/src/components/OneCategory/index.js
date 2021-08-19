import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Header from '../Header';

class OneCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      categorie: [],
    };
  }

  async componentDidMount() {
    try { // Simple GET request using axios
      const response = await axios.get(`http://api.themoviedb.org/3/discover/movie?api_key=b79310e5c25643e20c05b842caaaee33&with_genres=${this.props.match.params.id}&language=fr-FR`);
      this.setState({ categorie: response.data.results });
      console.log(response);
    }
    catch (error) {
      console.log(error);
    }
  }

  render() {
    const data = this.state;
    console.log(data);
    return (
      <div>
        <Header />

        <div className="one-category">
          <h2 className="sous-titre" />
          {
                  this.state.categorie.map(
                    (categorie) => (
                      <div>
                        <div className="scene">
                          <div className="card">
                            <div className="card__face card__face--front">
                              <Link to={`/film/${categorie.id}`}>
                                <img src={`https://image.tmdb.org/t/p/w185/${categorie.poster_path}`} />
                              </Link>
                            </div>

                            <div className="card__face card__face--back">
                              <Link to={`/film/${categorie.id}`}>
                                <h3 className="movie-title">{categorie.title}</h3>
                                <p className="release-date">Date de sortie : {categorie.release_date}</p>
                                <p className="average">Note : {categorie.vote_average} / 10</p>
                                <p className="story">Résumé : {categorie.overview}</p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )
              }
        </div>
      </div>
    );
  }
}

export default OneCategory;
