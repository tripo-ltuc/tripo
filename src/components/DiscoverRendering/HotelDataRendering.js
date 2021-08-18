import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import HotelModal from '../ModalComponents/HotalModal';

class HotelDataRendering extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hotelData: {},
            index: -1,
            modalShow: false,
            hotelsData: []

        }
    }

    hotelModalFun = (index) => {

        let data = this.props.hotelsData[index];
        let data1 = this.props.hotelsData;
        this.setState({
            hotelData: data,
            hotelsData: data1,
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
            {/* {console.log('data[0] :', this.props.hotelsData[0])} */}
            {<h1>Hotels</h1>}
            {this.props.hotelsData.map((item, idx) => {

                return (<>
                    <Card key={idx} style={{ width: "50rem", height: "35rem", margin: "5%" }}>

                        <Card.Header style={{ width: "45rem", height: "5rem", margin: "5%" }}>{item.name}</Card.Header>
                        <Card.Body>
                            <img style={{ width: "20rem", height: "15rem" }} src={item.cardImgUrl} alt={item.name}></img>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    <strong>StarRating : {item.starRating}</strong>
                                    <br />
                                    <strong>Price : {item.price}</strong>

                                </p>
                                {/* <footer className="blockquote-footer">

                </footer> */}
                            </blockquote>
                        </Card.Body>
                        <Button onClick={() => { this.hotelModalFun(idx) }}>More...</Button>
                    </Card>

                </>)
            })}


            <HotelModal hotelData={this.state.hotelData} modalShow={this.state.modalShow} handleClose={this.handleClose} />

        </>)
    }


}
export default HotelDataRendering;




