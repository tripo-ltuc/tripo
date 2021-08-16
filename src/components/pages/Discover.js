import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import CityNameForm from '../DiscoverFunctionalities/CityNameForm'
import HotelFunctionalities from '../DiscoverFunctionalities/HotelFunctionalities';
import WeatherFunctionalities from '../DiscoverFunctionalities/WeatherFunctionalities';
import RestaurantFunctionalities from '../DiscoverFunctionalities/RestaurantFunctionalities';
import TursFunctionalities from '../DiscoverFunctionalities/TursFunctionalities';
import Covid19Functionalities from '../DiscoverFunctionalities/Covid19Functionalities';
import '../../App.css'


class Discover extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cityName: '',
            latitude: '',
            longitude: '',
            toRenderAllResults: false

        }
    }
    //============================getting city name ,lat and lon from CityNameForm=============//  
    getCityName = (city, lat, lon, flag) => {
        this.setState({
            cityName: city,
            latitude: lat,
            longitude: lon,
            toRenderAllResults: flag
        });

    }



    render() {
        return (
            <>
                <CityNameForm getCityName={this.getCityName} />
                {/* {this.state.toRenderAllResults && <Covid19Functionalities cityName={this.state.cityName}/>} */}
                {/* <CardGroup> */}
                    {/* {this.state.toRenderAllResults && <HotelFunctionalities cityName={this.state.cityName} />} */}
                    {this.state.toRenderAllResults && <TursFunctionalities latitude={this.state.latitude} longitude={this.state.longitude}/>}
                    {/* {this.state.toRenderAllResults && <RestaurantFunctionalities cityName={this.state.cityName}/>} */}
                {/* </CardGroup> */}
                {this.state.toRenderAllResults && <WeatherFunctionalities lat={this.state.latitude} lon={this.state.longitude} />} 






            </>
        )
    }
}

export default Discover;