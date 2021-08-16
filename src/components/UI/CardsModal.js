import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";

class CardsModal extends Component {
  render() {
    return (
      <div>
       
        <Modal
          show={this.props.show}
          onHide={this.props.closingModal}
          backdrop="static"
          keyboard={false}
         
        >
          <Modal.Header closeButton>
            <Modal.Title>Your Comments Count!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form  onSubmit={(event) => this.props.addingReviews(event)} >
              <label>Do you want to leave a review?</label>
              <select name="confirmValue">
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>

              <label>Your Name!</label>
              <input
                type="text"
                name="personName"
                placeHolder="Please enter your name!"
              />
              <label>City Name</label>
              <input
                type="text"
                name="nameOfCity"
                placeHolder="Please enter the name of city you visited"
              />
              <label>Add your favourite image of this city! </label>
              <input type="text" name="imgName" placeHolder="Enter image URL" />
              <label>Comment</label>
              <input
                type="src"
                name="userComment"
                placeHolder="Please leave your comment here!"
              />
              
            <Button variant="primary" type="submit" onClick={this.props.closingModal}>Understood</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closingModal}>
              Close
            </Button>
            
          </Modal.Footer>
        </Modal>
        {/* </> */}
      </div>
    );
  }
}

export default CardsModal;
