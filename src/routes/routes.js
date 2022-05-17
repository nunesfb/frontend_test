import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from '../pages/index/index';
import Details from '../pages/details/details';
import Insert from '../pages/insert/insert';
import Update from '../pages/update/update';
import Delete from '../pages/delete/delete';
import Login from '../pages/login/login';
import IndexAuth from '../pages/index_auth/index';

const Routes = () => (
    
    <BrowserRouter>
        <Switch>
            <Route exact path = "/" component={Index} />
            <Route path = "/usuarios/:id" component={Details} />
            <Route path = "/criarusuario" component={Insert} />
            <Route path = "/editarusuario/:id" component={Update} />
            <Route path = "/deletarusuario/:id" component={Delete} />
            <Route path = "/login" component={Login} />
            <Route path = "/auth" component={IndexAuth} />
        </Switch>
    </BrowserRouter>
)

export default Routes;