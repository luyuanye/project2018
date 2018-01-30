import React from 'react';
import axios from 'axios'
export default class Home extends React.Component {
  constructor(){
    super()
  }
  componentDidMount(){
      axios.get('http://localhost:5000/cakes')
          .then(function(response){
              console.log(response);
          })
          .catch(function(err){
              console.log(err);
          });
  }
  render(){
    return <div>Home</div>
  }
}
