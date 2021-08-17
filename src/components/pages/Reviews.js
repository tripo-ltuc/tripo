import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

// import {
//   MDBRow,
//   MDBCard,
//   MDBCardBody,
//   MDBIcon,
//   MDBCol,
//   MDBCardImage,
//   MDBInput,
// } from "mdbreact";

import Card from "react-bootstrap/Card";
import CardsModal from "../UI/CardsModal";

// import Button from "react-bootstrap/Button";
// import ModalForm from "./component/ModalForm";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_URL,
      citiesData: [],
      postData: "All",
      show: false,
    };
  }

  componentDidMount = () => {
    axios
      .get(`${this.state.server}/getCityCards?city=${this.props.cityName}`)
      .then((results) => {
        this.setState({
          citiesData: results.data,
        });
        console.log(this.state.citiesData);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  ///////////////////////////////////

  addingReviews = (event) => {
    event.preventDefault();
    const { user } = this.props.auth0;

    // likes: String,
    // userName, userEmail,  userImg,
    ///////////////

    const newObject = {
      cityName: event.target.nameOfCity.value,
      content: event.target.userComment.value,
      cityImg: event.target.imgName.value,
      userName: user,
      userEmail: user.email,
      userImg: user.

    };

    console.log(newObject);
    axios
      .post(`${this.state.server}/addCard"`, newObject)
      .then((results) => {
        this.setState({
          citiesData: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };
  closingModal = () => {
    this.setState({
      show: false,
    });
  };

  //////////////////////////////

  deleteBook = async (id) => {
    // console.log(index);
    // const { user } = this.props.auth0;
    const newArrayOfBooks = this.state.citiesData.filter((citiesData, idx) => {
      return idx !== id;
    });
    console.log(newArrayOfBooks);
    this.setState({
      citiesData: newArrayOfBooks,
    });
    const deleteObj = {
      city: "Amman",
    };
    await axios.delete(`${this.state.server}/deleteCard/${id}`, {
      params: deleteObj,
    });
  };

  ///////////////////

  //////////////////////
  render() {
    return (
      <>
        <div className="d-grid gap-2">
          <Button
            variant="light"
            size="lg"
            onClick={this.showModal}
            style={{ margine: "20px" }}
          >
            Write a Review!
          </Button>

          {this.state.citiesData &&
            this.state.citiesData.map((item, index) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.placeName}</Card.Title>
                      <Card.Text>{item.userName}</Card.Text>
                      <Card.Text>{item.comment}</Card.Text>
                      <button
                        onClick={() => {
                          this.deleteBook(index);
                        }}
                      >
                        Delete
                      </button>
                    </Card.Body>
                  </Card>
                  {/* <MDBRow>
                    <MDBCol md="6" lg="4">
                      <MDBCard news className="my-5">
                        <MDBCardBody>
                          <div className="content">
                            <div className="right-side-meta">14 h</div>
                            <img
                              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(17)-mini.jpg"
                              alt=""
                              className="rounded-circle avatar-img z-depth-1-half"
                            />
                            Kate
                          </div>
                        </MDBCardBody>
                        <MDBCardImage
                          top
                          src="https://mdbootstrap.com/img/Photos/Others/girl1.jpg"
                          alt=""
                        />
                        <MDBCardBody>
                          <div className="social-meta">
                            <p>Another great adventure! </p>
                            <span>
                              <MDBIcon far icon="heart" />
                              25 likes
                            </span>
                            <p>
                              <MDBIcon icon="comment" />
                              13 comments
                            </p>
                          </div>
                          <hr />
                          <MDBInput far icon="heart" hint="Add Comment..." />
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBRow> */}

                  <CardsModal
                    addingReviews={this.addingReviews}
                    closingModal={this.closingModal}
                    show={this.state.show}
                  />
                </>
              );
            })}
        </div>
      </>
    );
  }
}

export default Reviews;
