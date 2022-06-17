import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Listado = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');
      token === null && navigate('/');
  });

  
  return (
    <h2>listado</h2>
  )
}

export default Listado