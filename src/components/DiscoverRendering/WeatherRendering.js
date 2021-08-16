import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/FormCheck';
// import Carousel from 'react-bootstrap/Carousel';
// import Col from 'react-bootstrap/FormCheck';
// import CardGroup from 'react-bootstrap/CardGroup';


class WeatherRendering extends React.Component {



    render() {
        return (<>
           
                
                <Card style={{ width: "17rem", height: "15rem", margin: "5%" }}>

                    <Card style={{ width: "15rem", height: "12rem", margin: "5%" }}>
                        <Card.Img variant="top" src={'https://cdn.pixabay.com/photo/2020/07/11/21/46/clouds-5395398_960_720.jpg'} width='50%' height='50%' />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                                Hi :{this.props.x}
                            </Card.Text>
                            <Card.Footer>
                                {'hi my name is tareq'}
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </Card>
           


        </>)
    }


}
export default WeatherRendering;