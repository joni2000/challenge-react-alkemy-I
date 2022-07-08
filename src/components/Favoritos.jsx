import { Link } from 'react-router-dom';

export const Favoritos = ({ favorites, addOrRemoveFromFavs }) => {

  return (
      <>
        <h2>Sección de favoritos</h2>
        <div className="row">
            {
                favorites.map(( { title, overview, id, imgURL}, i ) => (
                  <div className="col-3" key={i}>
                    <div className="card my-4">
                      <img src={ imgURL } className="card-img-top" alt="..."/>
                        <button 
                          className="favourite-btn"
                          data-movie-id={ id }
                          onClick={ addOrRemoveFromFavs }
                        >
                          🖤
                        </button>
                        <div className="card-body">
                          <h5 className="card-title">{ title.substring(0, 30) }...</h5>
                          <p className="card-text">{ overview.substring(0, 100) }...</p>
                          <Link to={`/detalle?movieID=${ id }`} className="btn btn-primary">View detail</Link>
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
