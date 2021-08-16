import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import WeatherRendering from '../DiscoverRendering/WeatherRendering';
import Col from 'react-bootstrap/FormCheck';
// import CardGroup from 'react-bootstrap/CardGroup';
import CardGroup from 'react-bootstrap/CardGroup';

class WeatherFunctionalities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

    }
  }
  componentDidMount() {
    const url = ``;

    axios
      .get(url)
      .then(result => {

        this.setState({

        });
      })
      .catch(err => {
        this.setState({

        })
      });
  }

  render() {
    return (<>


      <CardGroup>
        {this.state.weatherData.map((x, z) => {

          return <>
            <Col lg={4}>
              <WeatherRendering x={this.state.weatherData[z]} />
            </Col>
          </>
        })}

      </CardGroup>


    </>)
  }
}
export default WeatherFunctionalities;