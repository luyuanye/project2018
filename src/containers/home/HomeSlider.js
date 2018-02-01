import React from 'react';
import ReactSwipe from 'react-swipe'


export default class HomeSlider extends React.Component {
    constructor() {
        super()
        this.state = {index: 0}
    }

    render() {
        let opts = {
            continuous: true, auto: 3000, callback: (index) => {
                this.setState({index}) // 每一次动画结束后 将索引映射到当前组件状态上
            }
        }
        return (<div className="home-swiper">
            <ReactSwipe className="carousel" swipeOptions={opts}>
                {this.props.list.map((item, index) => (
                    <div key={index}><img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/` + item.img} alt={item.title}/>
                    </div>
                ))}
            </ReactSwipe>
            <div className="dots">
                {this.props.list.map((item, index) => (
                    <span key={index} className={this.state.index === index ? 'active' : ''}></span>
                ))}
            </div>
        </div>)
    }
}
