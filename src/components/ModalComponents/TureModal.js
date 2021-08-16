import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TureModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            hide: true
           
        }
    }
    // handleShow = () =>{
    //     let showMod=this.props.modalShow;
    //     this.setState({
    //         show : showMod
    //     })
    // }


    render() {
        return (<>

            {<Modal
                show={this.props.modalShow}
                onHide={this.props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.tureData.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: "20rem", height: "15rem" }} src={this.props.tureData.picture} alt={this.props.tureData.name}></img>
                    <br/>
                    <cite>{this.props.tureData.description}</cite>
                    <br/>
                    <strong>Rating : {this.props.tureData.rating}</strong>
                    <br/>
                    <strong>Price : {this.props.tureData.price}</strong>
                    <br/>
                    <cite>If you interested , visit this <a href={this.props.tureData.bookingLink} style={{color:'black'}} >website</a> </cite>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}



        </>)
    }



}
export default TureModal;