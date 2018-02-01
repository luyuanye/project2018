import React from 'react';
import '../common/css/reset.less'

import Tab from "../components/Tab/Tab";


export default class App extends React.Component {
    render() {
        return (<div style={{paddingBottom: "1.5rem", float: "left", width: "100%"}}>{this.props.children}<Tab/></div>)
    }
}
            
