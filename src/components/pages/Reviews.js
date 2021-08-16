<<<<<<< HEAD
=======
import React from "react";
import axios from "axios";

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

      postData:[],
      //   show: false,

      // city: "",
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

  ///////////////////////////////////

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

//////////////////////////////
  
  // deleteBook = async (index) => {
  //   // console.log(index);
  //   // const { user } = this.props.auth0;
  //   const newArrayOfBooks = this.state.postData.filter((postData, idx) => {
  //     return idx !== index;
  //   });
  //   console.log(newArrayOfBooks);
  //   this.setState({
  //     postData: newArrayOfBooks
  //   });
  //   const deleteObj = {
  //     city:'Amman'
  //   }
  //   await axios.delete(`${this.state.server}/deleteCards/${index}`, { params: deleteObj });
  // }

///////////////////








  //////////////////////
  render() {
    return (
      <>
        <button onClick={this.showModal}>Write a Review!</button>
        <div>
          {this.state.citiesData &&
            this.state.citiesData.map((item ) => {
              return (
                <>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                      <Card.Title>{item.placeName}</Card.Title>
                      <Card.Text>{item.userName}</Card.Text>
                      <Card.Text>{item.comment}</Card.Text>
                      {/* <button onClick={() => { this.deleteBook(index) }}>Delete</button> */}
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

</>

        // <div>
        //   {this.state.postData &&
        //     this.state.postData.map((item , index) => {
        //       return (
        //         <>
        //           <Card style={{ width: "18rem" }}>
        //             <Card.Img variant="top" src={item.img} />
        //             <Card.Body>
        //               <Card.Title>{item.placeName}</Card.Title>
        //               <Card.Text>{item.userName}</Card.Text>
        //               <Card.Text>{item.comment}</Card.Text>
        //               {/* <button onClick={() => { this.deleteBook(index) }}>Delete</button> */}
        //             </Card.Body>
        //           </Card>

        //           <CardsModal
        //             addingReviews={this.addingReviews}
        //             closingModal={this.closingModal}
        //             show={this.state.show}
        //           />
        //         </>
        //       );
        //     })}
        // </div>
      // </>
    );
  }
}

export default Reviews;
>>>>>>> 5c118d8fdac01dd6faba6452e0faade3035f79c0
