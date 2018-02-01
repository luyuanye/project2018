import React from 'react';
import {Link} from 'react-router-dom'
import './Class.less'

import img1 from '../../common/images/img1.jpg'
import img2 from '../../common/images/img2.jpg'
import img3 from '../../common/images/img3.jpg'
import img4 from '../../common/images/img4.jpg'
import img5 from '../../common/images/img5.jpg'
import img6 from '../../common/images/img6.jpg'
import img7 from '../../common/images/img7.jpg'
import img8 from '../../common/images/img8.jpg'
import img9 from '../../common/images/img9.jpg'
import img10 from '../../common/images/img10.jpg'
import img11 from '../../common/images/img11.jpg'
import img12 from '../../common/images/img12.jpg'

//import img5 from '../../common/images/img5.jpg'

export default class Class extends React.Component {

    render() {
        return (<div className="ClassList">
            <Link to={'/'}><img src={img1} alt=""/></Link>
            <Link to={'/2'}><img src={img2} alt=""/></Link>
            <Link to={'/3'}><img src={img3} alt=""/></Link>
            <Link to={'/4'}><img src={img4} alt=""/></Link>
            <Link to={'/5'}><img src={img5} alt=""/></Link>
            <Link to={'/6'}><img src={img6} alt=""/></Link>
            <Link to={'/7'}><img src={img7} alt=""/></Link>
            <Link to={'/8'}><img src={img8} alt=""/></Link>
            <Link to={'/9'}><img src={img9} alt=""/></Link>
            <Link to={'/10'}><img src={img10} alt=""/></Link>
            <Link to={'/11'}><img src={img11} alt=""/></Link>
            <Link to={'/12'}><img src={img12} alt=""/></Link>



        </div>)
    }
}
