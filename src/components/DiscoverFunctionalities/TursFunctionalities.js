import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import TursRendering from '../DiscoverRendering/TursRendering';

class TursFunctionalities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tursData: []
    }
  }
  componentDidMount() {
    const url = `http://localhost:3001/Activity?lat=${this.props.latitude}&lon=${this.props.longitude}`;

    axios
      .get(url)
      .then(result => {
        let data = result.data
        this.setState({
          tursData: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (<>
      {console.log(this.state.tursData)}
      <TursRendering tursData={this.state.tursData} />

    </>)
  }
}
export default TursFunctionalities;