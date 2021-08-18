import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import RestaurantModal from '../ModalComponents/RestaurantModal';
class RestaurantRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantData: {},
            index: -1,
            modalShow: false,


        }
    }

    restaurantModalFun = (index) => {

        let data = this.props.restaurantsData[index];
        this.setState({
            restaurantData: data,
            modalShow: true
        })
        console.log(index);
        console.log(this.state.modalShow);

    }
    handleClose = () => {

        this.setState({
            modalShow: false
        })

    }


    render() {
        return (<>
    {<h1>Restaurants</h1>}
            {this.props.restaurantsData.map((item, idx) => {

                return (<>
                    <Card key={idx} style={{ width: "50rem", height: "35rem", margin: "5%" }}>

                        <Card.Header style={{ width: "45rem", height: "5rem", margin: "5%" }}>{item.name}</Card.Header>
                        <Card.Body>
                            <img style={{ width: "20rem", height: "15rem" }} src={item.imageUrl} alt={item.name}></img>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    <strong>Rating : {item.rating}</strong>
                                    <br />
                                    <strong>Location : {item.location}</strong>

                                </p>
                                {/* <footer className="blockquote-footer">

                                </footer> */}
                            </blockquote>
                        </Card.Body>
                        <Button onClick={() => { this.restaurantModalFun(idx) }}>More...</Button>
                    </Card>

                </>)
            })}

            <RestaurantModal restaurantData={this.state.restaurantData} modalShow={this.state.modalShow} handleClose={this.handleClose} />

        </>)
    }


}
export default RestaurantRendering;