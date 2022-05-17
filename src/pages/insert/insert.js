import React, { Component } from "react";
import './insert.css';
import { Redirect, Link } from "react-router-dom";
import api from '../../services/services';

class CriarUsuario extends Component {
    constructor() {
        super();

        this.state = {
            usuario: {
                id: 0,
                name: "",
                age: 0,
                phone: "",
                email: "",
                username: ""
            },
            redirect: false,
        };
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            usuario: { ...prevState.usuario, [name]: value }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        const { usuario: { id, name, age, phone, email, username } } = this.state;

        api.post('/users', {
            id: parseInt(id), name, age: parseInt(age), phone, email, username
        })
            .then(response => {
                console.log(response)
                if (response.data.message === "Insert OK") {
                    this.setState({ redirect: true });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Pessoa Usuária</legend>
                        <div className="usuario-insert">
                            <label htmlFor="id">ID </label>
                            <br />
                            <input
                                type="number"
                                id="id"
                                name="id"
                                placeholder="ID"
                                min="11"
                                max="200"
                                required
                                value={this.state.usuario.id}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="name">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome"
                                maxLength="100"
                                required
                                value={this.state.usuario.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="age">Idade </label>
                            <br />
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="Idade"
                                min="1"
                                max="200"
                                required
                                value={this.state.usuario.age}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="phone">Telefone </label>
                            <br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Telefone"
                                maxLength="20"
                                required
                                value={this.state.usuario.phone}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="email">E-mail </label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                maxLength="100"
                                required
                                value={this.state.usuario.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="username">Username </label>
                            <br />
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username"
                                maxLength="100"
                                required
                                value={this.state.usuario.username}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="usuario-insert">
                            <button type="submit" className="btn btn-primary">
                                Cadastrar
                            </button>
                            <Link to={`/`}> Voltar </Link>
                        </div>
                    </fieldset>
                </form>
            );
        }
    }
}

export default CriarUsuario;
