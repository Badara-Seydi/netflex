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
      this.setState({ categorie: response.data.results});
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
      <div className="one-category">
        <Header />
        <h2 className="sous-titre" />
        {
                  this.state.categorie.map(
                    (categorie) => (
                      <Link to={`/film/${categorie.id}`}>
                        <div className="one-movie">
                          <div key={categorie.id} className="grid-item">
                            <img src={`https://image.tmdb.org/t/p/w185/${categorie.poster_path}`} />
                            <h3>{categorie.title}</h3>
                            <p>Date de sortie : {categorie.release_date}</p>
                            <p>Note : {categorie.vote_average} / 10</p>
                            <p>Résumé : {categorie.overview}</p>
                          </div>
                        </div>
                      </Link>
                    ),
                  )
              }
      </div>
    );
  }
}

export default OneCategory;
