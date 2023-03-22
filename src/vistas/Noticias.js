import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import axios from 'axios';

const Noticias = () => {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    axios.get('https://smarfut.azurewebsites.net/api/Equipo/equipresi')
      .then(response => {
        setEquipos(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
      {equipos.map(item => (
        <Card key={item.id} className="m-3 p-3" style={{ width: '18rem', maxHeight: '35rem', margin: '0.5rem', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)' }}>
          <CardImg top src={item.imageEquipo} alt={item.nombreEquipo} className="mx-auto" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
          <CardBody className="text-center">
            <CardTitle tag="h5" style={{ marginBottom: '0.5rem' }}>{item.nombreEquipo}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Presidente: {item.nombrePresidente} {item.apellidoPresidente}</CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Noticias;