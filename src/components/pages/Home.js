import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../UI/Home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img0 from "../../images/compass.jpg";
import { Link } from "react-router-dom";
import { Button, CardBody } from "reactstrap";
class Home extends React.Component {
  render() {
    return (
      <>
        <section className="home-page">

          <div className="bg-home">
            <h2>Welcome to <span>TRIPO</span></h2>
            <Link to="/discover"><Button className="button-home">DISCOVER</Button></Link>
            {/* <a href="#link" class="button-home" role="button">DISCOVER</a> */}

          </div>
          
          
          <br/>
          <br/>
          <div className="placeHolder">
            <Container>
              <Row>
                <Col className="mt-5 justify-content-center w-120">
                  <img className="imgleft" alt="..." src={img0} style={{ width: '100%', height: '100%', border: '20%', paddingRight: '5%' }} />

                </Col>
                <Col className="mt-5 justify-content-center">
                  <br /><br />
                  <h3>Tripo</h3>
                  <br />
                  <h5>
                  Tripo is a travil web app that provid the user with a lot of infomation about a specific place from the COVID report, Hotels list, places to visit and the Weather forcast. Tripo helps people to become better travelers, from planning to booking to taking a trip. Using the app to discover where to stay, what to do and where to eat based on guidance from those who have been there before. . Also, the user have the ability to create a post card and also like, comment on others post cards from the other users.
                  </h5>
                </Col>
              </Row>
            </Container>
          </div>
          <br />
          <br />

          <>
            <div class="cards-list-home">

              <div class="card-home 1">
                <div class="card_image-home"> <img src="https://www.moneycrashers.com/wp-content/uploads/2018/10/travel-world-map-1068x713.jpg" /> </div>
                <div class="card_title-home title-white">
                </div>
              </div>

              <div class="card-home 2">
                <div class="card_image-home">
                  <img src="https://i.pinimg.com/564x/ac/81/6e/ac816e3d850c796406278250ee4ce059.jpg" />
                </div>
                <div class="card_title-home title-white">
                </div>
              </div>

              <div class="card-home 3">
                <div class="card_image-home">
                  <img src="https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/heroImage1/PowerfulReasons_hero.jpg" />
                </div>
                <div class="card_title-home">
                </div>
              </div>

              <div class="card-home 4">
                <div class="card_image-home">
                  <img src="https://images.unsplash.com/photo-1520116468816-95b69f847357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1868&q=80" />
                </div>
                <div class="card_title-home title-black">
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
