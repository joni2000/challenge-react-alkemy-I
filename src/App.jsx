/* Libraries */
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"

/* Components */
import { Detalle, Favoritos, Header, Listado, Login, Resultados } from "./components";

/* Styles */
import './css/app.css';
import './css/bootstrap.min.css';

function App() {

    const [favorites, setFavorites] = useState([]);

    useEffect(()=> {
        const favsInLocal = localStorage.getItem('favs');
        if(favsInLocal !== null){
            setFavorites(JSON.parse(favsInLocal));
        }
    }, [favorites]);

    const favMovies = localStorage.getItem('favs');

    let tempMoviesInFavs;

    if(favMovies === null) {
        tempMoviesInFavs = [];
    }else {
        tempMoviesInFavs = JSON.parse(favMovies);
    }

    console.log(tempMoviesInFavs)

    const addOrRemoveFromFavs = (e) => {
        const btn = e.currentTarget;
        const parent = btn.parentElement;
        const imgURL = parent.querySelector('img').getAttribute('src');
        const title = parent.querySelector('h5').innerText;
        const overview = parent.querySelector('p').innerText;
        const movieData = {
            imgURL,
            title,
            overview,
            id: btn.dataset.movieId
        }    
        let movieIsInArray = tempMoviesInFavs.find(oneMovie => {
            return oneMovie.id === movieData.id
        })
        if(!movieIsInArray){
            tempMoviesInFavs.push(movieData);
            localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
        }else {
            let moviesLeft = tempMoviesInFavs.filter(oneMovie => {
                return oneMovie.id !== movieData.id
            })
            localStorage.setItem('favs', JSON.stringify(moviesLeft));
        }

        
    }

    return (
        <>
            <Header />

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={ <Login /> }/>
                    <Route path="/listado" element={ <Listado addOrRemoveFromFavs={ addOrRemoveFromFavs }/> }/>
                    <Route path="/detalle" element={ <Detalle /> }/>
                    <Route path="/resultados" element={<Resultados />}/>
                    <Route path="/favoritos" element={ <Favoritos favorites={ favorites } addOrRemoveFromFavs={ addOrRemoveFromFavs } /> }/>
                </Routes>
            </div>

        </>
    );
}

export default App;
