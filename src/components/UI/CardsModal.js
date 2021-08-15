import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class CardsModal extends Component {
  render() {
    return (
      <div>
        {/* <Modal
          show={this.props.show}
          onHide={this.props.closingModal}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(event) => this.props.addingReviews(event)}>
              <label>Book name</label>
              <input type="text" name="bookName" />
              <label>Book Description</label>
              <input type="text" name="bookDescription" />
              <label>status books</label>
              <input type="src" name="bookStatus" />
              <input type="submit" value="Add book" />
            </form>
          </Modal.Body>

          <Modal.Footer>
            {" "}
            {console.log(this.props.addingReviews)}
            <Button variant="primary" onClick={this.props.addingReviews}>
              Add
            </Button>
            <Button variant="secondary" onClick={this.props.closingModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}

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
            <form onSubmit={(event) => this.props.addingReviews(event)}>
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
              <input type="submit" value="Add Review" />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.closingModal}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
        {/* </> */}
      </div>
    );
  }
}

export default CardsModal;
