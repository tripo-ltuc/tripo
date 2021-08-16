import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Covid19Rendaring from '../DiscoverRendering/Covid19Rendaring';

class Covid19Functionalities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      covidData: []
    }
  }
  componentDidMount() {
    const url = `http://localhost:3001/Covid?cityName=${this.props.cityName}`;
    axios
      .get(url)
      .then(result => {
        let data = result.data;
        this.setState({
          covidData: data
        });
      })
      .catch(err => {
        console.log(err);
      });

  }

  render() {
    return (<>
      {console.log(this.state.covidData)}
      {console.log(this.props.cityName)}
      <Covid19Rendaring covidData={this.state.covidData}/>

    </>)
  }
}
export default Covid19Functionalities;