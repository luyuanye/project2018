import React from 'react';
import './MTitle.less'
import {withRouter} from 'react-router-dom'

@withRouter
export default class MTitle extends React.Component {
    back = () => {
        this.props.history.goBack()
    }

    render() {
        return (<div className="m-title">
            <i className="go iconfont icon-fanhui" onClick={this.back}></i>
            {this.props.children}
        </div>)
    }
}
