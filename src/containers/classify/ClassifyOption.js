import React from 'react';


export default class SortOption extends React.Component {
    constructor() {
        super();
        this.state = {priceOption: false, salesOption: false}
    };
    changePrice = () => {
        this.setState({priceOption: !this.state.priceOption})
    };
    changeSales = () => {
        this.setState({salesOption: !this.state.salesOption})
    };
    render() {
        return <div className="option clearfix">
            <div className="priceSort Sort" onClick={this.changePrice}>
                价格
                {this.state.priceOption ?
                    <span className='btn'><i className="unTop"></i><i className="toBottom"></i></span> :
                    <span className='btn'><i className="toTop"></i>
                            < i className="unBottom"></i></span>
                }
            </div>
            <div className="salesSort Sort" onClick={this.changeSales}>
                销量
                {this.state.salesOption ?
                    <span className='btn'><i className="unTop"></i><i className="toBottom"></i></span> :
                    <span className='btn'><i className="toTop"></i>
                            < i className="unBottom"></i></span>
                }
            </div>
        </div>
    }
}