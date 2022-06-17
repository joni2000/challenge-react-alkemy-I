import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/

        if (email === '' || password === '') {
            swAlert( <h2>los campos no pueden estar vacíos</h2> );
            return;
        }

        if(email !== '' && !regexEmail.test(email)) {
            swAlert(<h2>debes escribir una direccion de correo electrónico valida</h2>)
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swAlert(<h2>Credenciales inválidas</h2>)
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then(res => {
                swAlert(<h2>Perfecto, ingresaste correctamente</h2>)
                const tokenRecibido = res.data.token;
                localStorage.setItem('token', tokenRecibido);
                navigate('/listado')
            })
    } 

    return (
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={ submitHandler }>
                <label>
                    <span>Correo Electrónico</span><br/>
                    <input type="text" name="email" />
                </label>
                <br/>
                <label>
                    <span>Contraseña</span><br/>
                    <input type="password" name="password" />
                </label>
                <br/>
                <button type='submit'>Ingresar</button>
            </form>  
        </>
    )
}

export default Login