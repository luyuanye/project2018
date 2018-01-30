import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux'


import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from './store'




// 组件
import App from "./containers/App";
import Home from "./containers/home/Home";
import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";

ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" exact={true} component={Login}/>
                    <Route path="/reg" exact={true} component={Reg}/>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root'))
