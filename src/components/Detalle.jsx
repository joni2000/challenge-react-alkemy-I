import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Detalle = () => {

    const [movie, setMovie] = useState(null);

    const token = sessionStorage.getItem('token');

    const api_key = '3f87de5bb1705cdafff29ab025edd6fc';

    let query = new URLSearchParams(window.location.search);

    let movieID = query.get('movieID');

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${api_key}&language=es-Es`)
            .then(response => {
                const movieData = response.data;
                setMovie(movieData)
            })
            .catch(error => {
                return <p>Error 404</p>
            });
    }, [movieID])

    return (
        <>
            { !token && <Navigate to='/'/> }

            { !movie && <p>Cargando...</p>}
            { movie && //corto circuito
                <>
                    <h2>Titulo: { movie.title }</h2>
                    <div className="row">
                        <div className="col-4">
                            <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } alt={ `imagen de ${movie.title}` } className="img-thumbnail" />
                        </div>
                        <div className="col-8">
                            <h5>Fecha de estreno: { movie.release_date }</h5>
                            <h5>Reseña: </h5>
                            <p>{ movie.overview }</p>
                            <h5>Puntuacion: { movie.vote_average }</h5>
                            <h5>Generos: </h5>
                            <ul>
                                {
                                    movie.genres.map(({name, id}) => (
                                        <li key={ id }>{ name }</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </>
            }

            
        </>
    )
}

export default Detalle

