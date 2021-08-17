import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/FormCheck';
// import Carousel from 'react-bootstrap/Carousel';
// import Col from 'react-bootstrap/FormCheck';
// import CardGroup from 'react-bootstrap/CardGroup';
import c01d from '../../images/animated/c01d.svg';
import c01n from '../../images/animated/c01n.svg';
import c02d from '../../images/animated/c02d.svg';
import c03d from '../../images/animated/c03d.svg';
import c04d from '../../images/animated/c04d.svg';
import r01d from '../../images/animated/r01d.svg';
import r02d from '../../images/animated/r02d.svg';
import r03d from '../../images/animated/r03d.svg';
import r04d from '../../images/animated/r04d.svg';
import r05d from '../../images/animated/r05d.svg';
import s01d from '../../images/animated/s01d.svg';
import s02d from '../../images/animated/s02d.svg';
import s03d from '../../images/animated/s03d.svg';
import s04d from '../../images/animated/s04d.svg';
import t04d from '../../images/animated/t04d.svg';




class WeatherRendering extends React.Component {



    render() {
        return (<>
                {console.log(this.props.weatherData.icon)}
                        <Card style={{ width: "15rem", height: "12rem", margin: "5%" }}>
                            <Card.Img variant="top" src={this.props.weatherData.icon} style={{ width: "50%", height: "60%", marginBottom:"-10px" }} />
                            
                            <Card.Body>
                                <Card.Title>{this.props.weatherData.date}</Card.Title>
                                <Card.Text>
                                    {this.props.weatherData.description}
                                   {/* <img src={this.props.weatherDara.icon} lat=""/> */}

                                </Card.Text>
                                

                                {/* <Card.Footer>
                                 {'hi my name is tareq'}
                                   </Card.Footer> */}
                            </Card.Body>
                        </Card>
                
         
            

        </>)
    }


}
export default WeatherRendering;
