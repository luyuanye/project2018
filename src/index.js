import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {Provider} from 'react-redux'

import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import store from './store'




// 组件
import App from "./containers/App";
import Home from "./containers/home/Home";
import Cart from "./containers/Cart/Cart";
import Personal from "./containers/personal/Personal";
import Class from "./containers/class/Class";





import Login from "./containers/Login/Login";
import Reg from "./containers/Reg/Reg";
import Classify from "./containers/classify/Classify"
import Classifydetail from "./containers/classify/classifydetail";


ReactDOM.render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path='/' exact={true} component={Home}/>
                    <Route path='/class' component={Class}/>
                    <Route path='/cart' component={Cart}/>
                    <Route path='/personal' component={Personal} />
                    <Route path="/reg" component={Reg}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/classify/:id"  component={Classify}/>
                    <Route path="/classifydetail/:id"  component={Classifydetail}></Route>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.getElementById('root'));
