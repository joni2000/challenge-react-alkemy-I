import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

export const Buscador = () => {

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();

        if(keyword.length === 0) {
            swAlert(<h5>Debes escribir una palabra clave</h5>);
        } else if(keyword.length < 4) {
            swAlert(<h5>Debes escribir mas de 4 caracteres</h5>);
        } else {
            e.currentTarget.value='';
            navigate(`/resultados?keyword=${keyword}`);
        }
    }

  return (
    <form className="ms-5" onSubmit={ submitHandler }>
        <label className="form-label me-2">
            <input className="form-control" type="text" name="keyword" placeholder="Buscar..." />
        </label>
        <button className="btn btn-success mb-1" type='submit'>Buscar</button>
    </form>
  )
}

