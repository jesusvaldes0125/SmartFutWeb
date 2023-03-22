import { useParams } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EquipoD.css';
import ModalJugador from '../componentes/ModalJugador';

const EquipoDetalle = () => {
  const { id } = useParams();

  const [jugadores, setJugadores] = useState([]);
  const [mostrarModal, setMostrarModal]= useState(false);

  useEffect(() => {
    axios.get(`https://smarfut.azurewebsites.net/api/Jugador/Listar/${id}`)
      .then((response) => {
        console.log(response.data);
        setJugadores(response.data);
      });
  }, [id]);

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    const edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      return edad - 1;
    }
    return edad;
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
      <button type="button" class="btn btn-outline-info">Nuevo Jugador</button>
      </div>
      <div className="row">
        {Array.isArray(jugadores.response) && jugadores.response.map((jugador) => {
          
          return (
            <div className="col-md-4" key={jugador.id}>
              <Card className="card flex-row">
                <CardImg className="d-flex w-50" src={jugador.oEquipo.imagenEquipo} alt={jugador.oEquipo.nombre} style={{ width: "80px", height: "100px", padding: '12px'}}/>
                <CardBody className="align-items-center w-100">
                  <CardTitle tag="h5">{jugador.nombre} {jugador.apellido}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Camiseta {jugador.numeroCamiseta}</CardSubtitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Edad: {calcularEdad(jugador.edad)}</CardSubtitle>
                </CardBody>
              </Card>
            </div>
          );
        })}
      </div>
      <ModalJugador/>
    </div>
  );
};

export default EquipoDetalle;
