import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Catégories extends React.Component {
      state = {
        categories: [],
      };

      componentDidMount() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=b79310e5c25643e20c05b842caaaee33&language=fr-FR').then((response) => {
          const categoriesResponse = response.data.genres;
          this.setState({ categories: categoriesResponse });
          console.log(this.setState);
        });
      }
        
        
      render() {
        const data = this.state;
        console.log(data);
        return (
          <div className="categories"><ul>
            {
                      this.state.categories.map(
                        (categorie) => (
                          <div key={categorie.id}>
                            <Link to={`/categorie/${categorie.id}`}>
                              <li onClick="window.location.reload()"><span className="p-categories">{categorie.name}</span></li>
                            </Link>

                          </div>

                        ),
                      )
                  }</ul>
          </div>
        );
      }
}

export default Catégories;
