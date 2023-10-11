import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar/Index';

const ContactDetails = () => {
    const navigate = useNavigate();

    const handleContact = () => {
        console.log("Contato enviado!");
        return navigate('/')
    }
    const { id } = useParams();
    return (
        <>
            <NavBar />
            <h1>Exibindo mais informações sobre: {id}</h1>
            <button onClick={handleContact}>Enviar mensagem!</button>
        </>
    )
}

export default ContactDetails