import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img0 from "../../images/compass.jpg";
// import img02 from "../../images/02.png";
// import img03 from "../../images/03.png";
// import img04 from "../../images/04.png";
import { Button, CardBody } from "reactstrap";
class Home extends React.Component {
  render() {
    return (
      <>
        <section className="home-page">

          <div className="bg-home">
            <h2>Welcome to <span>TRIPO</span></h2>
            <Button className="btnHome">DISCOVER</Button>
          </div>
          
          
          <br/>
          <br/>
          <div className="placeHolder">
            <Container>
              <Row>
                <Col className="mt-5 justify-content-center">
                  <img className="imgleft" alt="..." src={img0} style={{ width: '100%', height: '100%', border: '20%', paddingRight: '5%' }} />

                </Col>
                <Col className="mt-5 justify-content-center">
                  <br /><br />
                  <h3>Tripo</h3>
                  <br />
                  <h5>
                    Tripo is travil web app that provid a user with a lot of info.(COVID report, Hotels List, Resturans List, Car Reantals, Weather Forcasting, Turs and Activitis) about a specific place. User alos have the ability to create a post card and also like, commint on others post cards.
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />

          <>
            <div class="cards-list">

              <div class="card 1">
                <div class="card_image"> <img src="https://www.moneycrashers.com/wp-content/uploads/2018/10/travel-world-map-1068x713.jpg" /> </div>
                <div class="card_title title-white">
                </div>
              </div>

              <div class="card 2">
                <div class="card_image">
                  <img src="https://i.pinimg.com/564x/ac/81/6e/ac816e3d850c796406278250ee4ce059.jpg" />
                </div>
                <div class="card_title title-white">
                </div>
              </div>

              <div class="card 3">
                <div class="card_image">
                  <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" />
                </div>
                <div class="card_title">
                </div>
              </div>

              <div class="card 4">
                <div class="card_image">
                  <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80" />
                </div>
                <div class="card_title title-black">
                </div>
              </div>

            </div>
          </>
        </section>
      </>
    );


  }
}

export default Home;
