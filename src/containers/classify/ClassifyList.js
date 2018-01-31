import React from 'react';

export default class SortList extends React.Component {
/*
* {
  	"id":"1",
    "avatar": "../images/cake-1.jpg",
    "title": "果嘉年华(8寸)",
    "hot": "元祖授权销售",放在title拼接的子
    "detail": "元祖蛋糕",
    "sales": 333,
    "price": 218,
    "discountprice": 218,
    "exhibition": [
      "../images/cake-1-1.jpg",
      "../images/cake-1-2.jpg",
      "../images/cake-1-3.jpg"
    ]
  },*/
  render(){
    return <div className="sortList">
        {this.props.recordList.map((item,index)=><div key={index}>
            <img src={`http://cxyx.oss-cn-beijing.aliyuncs.com/${item.avatar}`} alt=""/>
        </div>)}
    </div>
  }
}