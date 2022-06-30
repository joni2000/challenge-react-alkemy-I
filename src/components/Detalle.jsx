import { Navigate } from "react-router-dom"

const Detalle = () => {

    const token = sessionStorage.getItem('token');

    return (
        <>
            { !token && <Navigate to='/'/> }
            
            <div>Detalle</div>
        </>
    )
}

export default Detalle

