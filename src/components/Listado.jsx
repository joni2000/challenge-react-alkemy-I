import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const Listado = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=> {
      const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=3f87de5bb1705cdafff29ab025edd6fc&language=es-Es&page=1';
      axios.get(endPoint)
        .then(response => {
          const apiData = response.data;
            setMovieList(apiData.results)
        })
  }, [setMovieList]);

  let token = localStorage.getItem('token');

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
                    <div className="card">
                      <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{movie.title}</h5>
                          <p className="card-text">{ movie.overview }</p>
                          <Link to="/" className="btn btn-primary">View detail</Link>
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