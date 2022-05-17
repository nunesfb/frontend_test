import React, { Component } from "react";
import './login.css';
import { Redirect, Link } from "react-router-dom";
import api from '../../services/services';

class CriarUsuario extends Component {
    constructor() {
        super();

        this.state = {
            usuario: {
                email: "",
                password: ""
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
        const { usuario: { email, password } } = this.state;

        api.post('/login', {
            email, password
        }).then(response => {
            console.log(response)
            if (response.data.token) {
                localStorage.setItem('token', response.data.token)
                this.setState({ redirect: true });
            }
        }).catch(function (error) {
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
                        <legend>Login</legend>
                        <div className="usuario-insert">
                            <label htmlFor="email">E-mail </label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                max="100"
                                required
                                value={this.state.usuario.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="password">Senha </label>
                            <br />
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Senha"
                                maxLength="100"
                                required
                                value={this.state.usuario.password}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="usuario-insert">
                            <button type="submit" className="btn btn-primary">
                                Fazer login
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
