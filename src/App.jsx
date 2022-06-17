/* Libraries */
import { Routes, Route } from "react-router-dom"

/* Components */
import Listado from "./components/Listado";
import Login from "./components/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Styles */


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={ <Login /> }/>
                <Route path="/listado" element={ <Listado /> }/>
            </Routes>

            <Footer />
        </>
    );
}

export default App;
