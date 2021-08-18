import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import CardsModal from "../UI/CardsModal";
import NewCard from "../UI/NewCard";
// import Test from "../UI/Test";

class Reviews extends React.Component {
  render() {
    return (
      <>
        <NewCard showModal={this.showModal} />

        <CardsModal />
      </>
    );
  }
}

export default Reviews;
