import React from 'react';
import "./index.less"
import {Link} from 'react-router-dom';
export default class SortList extends React.Component {
    /*
    * {
          "id":"1",
        "avatar": "../images/cake-1.jpg",
        "title": "果嘉年华(8寸)",
        "hot": "元祖授权销售",放在title拼接的子
        "detail": "元祖蛋糕",
        "sales": 333, //销量
        "price": 218,//最新价格
        "discountprice": 218, //原来价格
        "exhibition": [
          "../images/cake-1-1.jpg",
          "../images/cake-1-2.jpg",
          "../images/cake-1-3.jpg"
        ]
      },*/


    render() {

        return <div>
            {this.props.recordList.map((item, index) => <Link key={index} className="sortList" to={{pathname:`/classifydetail/${this.props.name}&${item.id}`,state:item}}>
                <img className="mainImg" src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item.avatar}`} alt=""/>
                <p className="title">{item.title}</p>
                <p className="price">￥{item.price}</p>
            </Link>)}
        </div>
    }
}