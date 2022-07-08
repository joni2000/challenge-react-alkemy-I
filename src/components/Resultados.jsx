import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import swAlert from "@sweetalert/with-react";

export const Resultados = () => {
    let query = new URLSearchParams(window.location.search);

    let keyword = query.get('keyword');

    const api_key = '3f87de5bb1705cdafff29ab025edd6fc';

    const [moviesResult, setMoviesResults] = useState([]);

    useEffect(()=> {
    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=es-ES&query=${keyword}`;
        axios.get(endpoint)
         .then(response => {
            const moviesArray = response.data.results;
            moviesArray.length === 0 && swAlert(<h5>No se encontraron resultados</h5>);
            setMoviesResults(moviesArray);
        })
        .catch(error => {
            console.log(error)
        })

    }, [keyword]);
    	
    return (
        <>
            <h2>Buscaste: <em>{ keyword }</em></h2>
            { moviesResult.length ===0 && <h3>No hay resultados</h3>}
            <div className="row">
            {
                moviesResult.map(( movie, i ) => (
                  <div className="col-4" key={i}>
                    <div className="card my-4">
                      <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } className="card-img-top" alt="..."/>
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
        </>

    )
}
