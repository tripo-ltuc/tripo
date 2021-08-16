import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Form,Container } from "react-bootstrap";
import '../UI/Discover_R.css'

class Discover_R extends Component {
  render() {
    return (
      <>
        <section className="discover-bg">
        <Form className=" w-50">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Search</Form.Label>
    <Form.Control type="email" placeholder="Where to?" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Search
  </Button>
</Form>
        </section>
        <section></section>
      <p>HI</p>
      </>
    );
  }
}

export default Discover_R;
