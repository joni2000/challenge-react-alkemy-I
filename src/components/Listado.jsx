import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

const Listado = ({ addOrRemoveFromFavs }) => {

  const [movieList, setMovieList] = useState([]);

  const api_key = '3f87de5bb1705cdafff29ab025edd6fc';

  useEffect(()=> {
      const endPoint = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=es-Es&page=1`;
      axios.get(endPoint)
        .then(response => {
          const apiData = response.data;
            setMovieList(apiData.results)
        })
        .catch(error => {
            swAlert(<h2>Error al obtener los datos</h2>)
            console.log(error);
        });
  }, [setMovieList]);

  const token = sessionStorage.getItem('token');

  return (
    <>
        { 
        !token ? 
          <Navigate to='/'/> 
               : 
          <div className="row">
            {/* estructura base */}
            {
                movieList.map(( movie, i ) => (
                  <div className="col-3" key={i}>
                    <div className="card my-4">
                      <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } className="card-img-top" alt="..."/>
                        <button 
                          className="favourite-btn"
                          onClick={ addOrRemoveFromFavs }
                          data-movie-id={ movie.id }
                        >
                          🖤
                        </button>
                        <div className="card-body">
                          <h5 className="card-title">{ movie.title.substring(0, 30) }...</h5>
                          <p className="card-text">{ movie.overview.substring(0, 100) }...</p>
                          <Link to={`/detalle?movieID=${ movie.id }`} className="btn btn-primary">View detail</Link>
                        </div>
                    </div>
                  </div>
                )
              )
            }
           
          </div>
        }
    </>
  )
}

export default Listado