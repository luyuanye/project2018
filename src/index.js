import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux'


import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from './store'

// 组件
import App from "./components/App";
import Home from "./components/home/Home";

ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </App>
        </Router>
    </Provider>, document.getElementById('root'))
