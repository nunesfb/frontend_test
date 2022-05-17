import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';
import './index.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';

export default class Usuarios extends Component {
    state = {
        usuarios: [],
    };

    componentDidMount() {
        this.loadUsuarios();
    }

    loadUsuarios = async () => {
        const response = await api.get(`/users`);

        const usuarios = response.data;

        this.setState({ usuarios });
    };

    render() {
        const { usuarios } = this.state;
        return (
            <div className="usuario-list">
                <p>
                    <Link to={`/criarusuario`}> Criar Pessoa Usuária </Link>
                </p>
                {usuarios.map(usuario => (
                    <article key={usuario.id}>
                        <strong> {usuario.name} </strong>
                        <p> <AiOutlineMail /> {usuario.email} </p>
                        <p> <AiOutlinePhone /> {usuario.phone} </p>
                        <p> <AiOutlineClockCircle /> {usuario.age} </p>
                        <p> <AiOutlineUser /> {usuario.username} </p>
                        <p> <Link to={`/usuarios/${usuario.id}`}> Acessar </Link> </p>
                    </article>
                ))}
            </div>
        )
    }
}