import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import { Card,Col,Container,Row } from 'react-bootstrap';
import './Profile.css';



class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <section className="cardProfile">
                    {isAuthenticated &&
                        <>
                            <Card className="w-50 avatar">
                                <Card.Header className="card-header" ><h3>User Profile Information</h3></Card.Header>
                                <Card.Body>
                                    <Card.Img src={user.picture} alt={user.name} className="rounded-circle" style={{ height: '10rem', width: '10rem' }} />
                                    <Card.Body className="d-flex flex-column justify-content-center align-items-start text-center">
                                    <Container>
                                    <Row className="text-center txtCard">
                                    <Col>Name: <br/> {user.name}</Col>
                                    <Col >Email:<br/> {user.email}</Col>
                                    </Row>
                                    </Container>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </>
                    }
            </section>
        );
    }
}

export default withAuth0(Profile);

