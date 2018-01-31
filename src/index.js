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
import Classify from "./containers/classify/Classify"
ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Route path="/classify" component={Classify}/>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root'))
