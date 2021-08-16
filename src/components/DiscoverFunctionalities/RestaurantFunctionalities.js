import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RestaurantRendering from '../DiscoverRendering/RestaurantRendering';

class RestaurantFunctionalities extends React.Component{
    constructor(props){
        super(props);
        this.state={
          restaurantsData : []
        }
    }
    componentDidMount() {
        const url = ``;
    
        axios
          .get(url)
          .then(result => {
            
            this.setState({
             
            });
          })
          .catch(err => {
            this.setState({
              
            })
          });
      }

    render(){
        return(<>
        
        <RestaurantRendering />

        </>)
    }
}
export default RestaurantFunctionalities;