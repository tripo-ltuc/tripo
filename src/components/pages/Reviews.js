import React from "react";
import axios from "axios";
import Styling from "./Styling";
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
      postArr: [],
      //   show: false,

      city: "",
      show: false,
    };
  }

  componentDidMount = () => {
    // const { user } = this.props.auth0;

    axios
      .get(`${this.state.server}/cards?city=Amman`)
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

  addingReviews = (event) => {
    event.preventDefault();

    const newObject = {
      value: event.target.confirmValue.value,
      placeName: event.target.nameOfCity.value,
      userName: event.target.personName.value,
      comment: event.target.userComment.value,
      img: event.target.imgName.value,
    };
    console.log(newObject);
    axios
      .post(`${this.state.server}/addCards`, newObject)
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
  render() {
    return (
      <>
        <button onClick={this.showModal}>Write a Review!</button>
        <div>
          {this.state.citiesData &&
            this.state.citiesData.map((item) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.placeName}</Card.Title>
                      <Card.Text>{item.userName}</Card.Text>
                      <Card.Text>{item.comment}</Card.Text>
                    </Card.Body>
                  </Card>

                  <CardsModal
                    addingReviews={this.addingReviews}
                    closingModal={this.closingModal}
                    show={this.state.show}
                  />
                </>
              );
            })}
        </div>
        {/* <div>
          {this.state.postArr &&
            this.state.postArr.map((item) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.placeName}</Card.Title>
                      <Card.Text>{item.userName}</Card.Text>
                      <Card.Text>{item.comment}</Card.Text>
                    </Card.Body>
                  </Card>

                  <CardsModal
                    addingReviews={this.addingReviews}
                    closingModal={this.closingModal}
                    show={this.state.show}
                  />
                </>
              );
            })}
        </div> */}
      </>
    );
  }
}

export default Reviews;
