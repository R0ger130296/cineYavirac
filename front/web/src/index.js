import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './styles/tailwind.css';

import Login from './pages/login';
import AddMovie from './pages/addMovie';
import Page404 from './pages/Page404';
import Register from './pages/register';
import Home from './pages/home';
import Movies from './pages/movies';
import Rooms from './pages/rooms';
import FilmsRoom from './pages/filmsRoom';
import Calendario from './pages/calendario';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/register" component={ Register } />
            <Route exact path="/home" component={ Home } />
            <Route path="/add_movie" component={ AddMovie } />
            <Route path="/movies" component={ Movies } />
            <Route path="/rooms" component={ Rooms } />
            <Route path="/filmsroom" component={ FilmsRoom } />
            <Route path="/schedules" component={ Calendario } />
            <Route component={ Page404 } />
        </Switch>
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
