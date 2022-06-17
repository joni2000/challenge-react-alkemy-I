/* Libraries */
import { Routes, Route } from "react-router-dom"

/* Components */
import Listado from "./components/Listado";
import Login from "./components/Login";
import Header from "./components/Header";

/* Styles */
import './css/bootstrap.min.css'

function App() {
    return (
        <>
            <Header />

            <div className="container mt-3">
                <Routes>
                    <Route path="/" element={ <Login /> }/>
                    <Route path="/listado" element={ <Listado /> }/>
                </Routes>
            </div>

        </>
    );
}

export default App;
