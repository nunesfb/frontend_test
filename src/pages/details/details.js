import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';

export default class Usuario extends Component {
    state = {
        usuario: {
            name: "",
            age: 0,
            phone: "",
            email: "",
            username: ""
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);
        
        this.setState({ usuario: response.data });
    }

    render() {
        const { usuario } = this.state;

        return (
            <div className="usuario-list">
                <article key={usuario.id}>
                    <strong> {usuario.name} </strong>
                    <p> <AiOutlineMail /> {usuario.email} </p>
                    <p> <AiOutlinePhone /> {usuario.phone} </p>
                    <p> <AiOutlineClockCircle /> {usuario.age} </p>
                    <p> <AiOutlineUser /> {usuario.username} </p>
                    <p> <Link to={`/`}> Voltar </Link> </p>
                    <p> <Link to={`/EditarUsuario/${usuario.id}`}> Editar </Link> </p>
                    <p> <Link to={`/DeletarUsuario/${usuario.id}`}> Deletar </Link> </p>
                </article>
            </div>
        );
    }
}