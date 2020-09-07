import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./assets/styles/App.scss";
import Home from './components/Home';


const App = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
            <Switch>
                <Route exact path="/" component={Home} />

            </Switch>  
    </BrowserRouter>
);


ReactDOM.render(<App/>, document.getElementById("root"));



