import {   } from 'bootstrap'
import React, { useState } from 'react'
import { Button, Modal, FormGroup, Label, ModalBody, ModalHeader, Input, ModalFooter } from 'reactstrap'

const modeloJugador={
    id:0,
    nombre: "",
    apellido: "",
    numeroCamiseta:"",
    edad:""
}

const ModalJugador = ({mostrarModal, setMostrarModal, guardarJugador}) => {
   
    const[jugador, setJugador]=useState(modeloJugador);

    const actualizarDato =(e)=>{
        console.log(e.target.name + " : " + e.target.value)
        setJugador(
            {
                ...jugador,
                [e.target.name]:e.target.value
            }
        )
    }

    const enviarDatos =()=>{
       if(jugador.id === 0){
        guardarJugador(jugador)
       }
    }
    return (
        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                Nuevo Jugador
            </ModalHeader>

            <ModalBody>
                <FormGroup>
                    <Label>Nombres</Label>
                    <Input name="nombre" onChange={(e) => actualizarDato(e)} value={jugador.nombre}></Input>                  
                </FormGroup>
                <FormGroup>
                    <Label>Apellidos</Label>
                    <Input name="apellido" onChange={(e) => actualizarDato(e)} value={jugador.apellido}></Input>                  
                </FormGroup>
                <FormGroup>
                    <Label>Numero de Camiseta</Label>
                    <Input name="numeroCamiseta" onChange={(e) => actualizarDato(e)} value={jugador.numeroCamiseta}></Input>                  
                </FormGroup>
                <FormGroup>
                    <Label>Fecha de Nacimiento</Label>
                    <Input type="date" name="edad" onChange={(e) => actualizarDato(e)} value={jugador.edad}></Input>                  
                </FormGroup>                
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={()=>setMostrarModal(!mostrarModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalJugador