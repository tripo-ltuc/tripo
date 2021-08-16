import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HotelDataRendering from '../DiscoverRendering/HotelDataRendering';

class HotelFunctionalities extends React.Component{
    constructor(props){
        super(props);
        this.state={
          hotelsData : []
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
        
        <HotelDataRendering />

        </>)
    }
}
export default HotelFunctionalities;