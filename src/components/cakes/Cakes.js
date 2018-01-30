import React from 'react';
import axios from 'axios'


export default class Cakes extends React.Component {

    constructor() {
        super()
        this.state = {cakes: []}
    }


    componentWillMount() {
        axios.get('http://localhost:5000/cakes')
            .then(function (response) {
                //console.log(response);
                //console.log(response);
                return response.data;

            }).then(
            function (response) {
                //console.log(response);
                //console.log(response);
                this.setState({
                    cakes:response
                })

            }
        )
            .catch(function (err) {
                console.log(err);
            });
        //console.log(this.state.cakes);

    }

    render() {
        console.log(this.state.cakes);
        return <div>
            <ul>
                {/*{this.state.cakes.map((item, index) => (
                    <li key={index}>
                        <img src={item.avatar} alt=""/>
                    </li>
                ))}*/}
            </ul>
        </div>
    }
}
