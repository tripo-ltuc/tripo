import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {Card,Col,Row,Container} from 'react-bootstrap';
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
        return (<><div className="bg-hotel">
           {/* {console.log('data[0] :', this.props.hotelsData[0])} */}
           {<h1 style={{ textAlign: "center", color:'black'}}>Hotels</h1>}
            <br/>
            {this.props.hotelsData.map((item, idx) => {
                return (
                <>
                        <Card key={idx}  style={{ width: "20%", height: "27%", display: "inline-block" , marginLeft:"10%"}}>
                            <Card.Header style={{ width: "100%", height: "10%", }}>{item.name}</Card.Header>
                            <Card.Body>
                                <img style={{ width: "100%", height: "8rem" }} src={item.cardImgUrl} alt={item.name}></img>
                                <blockquote className="blockquote mb-0">
                                    <p>
                                        {' '}
                                        <strong>StarRating : {item.starRating}</strong>
                                        <br />
                                        <strong>Price : {item.price}</strong>
                                    </p>
                                    </blockquote>
                                    </Card.Body>
                                    <Button style={{ width: "100%", height: "10%", }} onClick={() => { this.hotelModalFun(idx) }}>More...</Button>
                        </Card>
                </>);
            })}
            </div>

            <HotelModal hotelData={this.state.hotelData} modalShow={this.state.modalShow} handleClose={this.handleClose} />

        </>)
    }


}
export default HotelDataRendering;




