import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Styling from "./Styling";

import Card from "react-bootstrap/Card";
import CardsModal from "../UI/CardsModal";
import NewCard from "../UI/NewCard";

// import Button from "react-bootstrap/Button";
// import ModalForm from "./component/ModalForm";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_URL,
      citiesData: [],
      postData: [],
      show: false,
    };
  }

  componentDidMount = () => {
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

  ///////////////////////////////////

  addingReviews = (event) => {
    event.preventDefault();

    // likes: String,
    // userName, userEmail,  userImg,
    ///////////////

    const newObject = {
      cityName: event.target.nameOfCity.value,
      content: event.target.userComment.value,
      cityImg: event.target.imgName.value,
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

  //////////////////////////////

  deleteBook = async (index) => {
    // console.log(index);
    // const { user } = this.props.auth0;
    const newArrayOfBooks = this.state.citiesData.filter((citiesData, idx) => {
      return idx !== index;
    });
    console.log(newArrayOfBooks);
    this.setState({
      citiesData: newArrayOfBooks,
    });
    const deleteObj = {
      city: "Amman",
    };
    await axios.delete(`${this.state.server}/deleteCards/${index}`, {
      params: deleteObj,
    });
  };

  ///////////////////

  //////////////////////
  render() {
    return (
      <>
        {/* <Button
          // className="btn btn-outline-light btn-lg"
          onClick={this.showModal}
        >
          Add a Review
        </Button> */}
        {/* <Styling
          citiesData={this.state.citiesData}
          showModal={this.showModal}
          show={this.state.show}
        /> */}
        <NewCard />
        {/* <div>
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
                    </Card.Body>
                  </Card>
                </>
              );
            })}
        </div> */}
        <CardsModal
          addingReviews={this.addingReviews}
          closingModal={this.closingModal}
          show={this.state.show}
        />
      </>
    );
  }
}

export default Reviews;
