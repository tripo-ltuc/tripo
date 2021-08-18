import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


class Covid19Rendaring extends React.Component {
    

 

    render() {
        return (<>
        <Card style={{ width: "50rem", height: "30rem", margin: "5%" }}>
            
                <Card.Header style={{ width: "45rem", height: "3rem", margin: "5%" }}>{this.props.covidData.country} ({this.props.covidData.code})</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Confirmed Cases : {this.props.covidData.confirmed}
                            <br/>
                            Recovered Cases : {this.props.covidData.recovered}
                            <br/>
                            Critical Cases  : {this.props.covidData.critical}
                            <br/>
                            Deaths          : {this.props.covidData.deaths}
                            <br/>
                            LastUpdate      : {this.props.covidData.lastUpdate}
                        </p>
                        <footer className="blockquote-footer">
                       <strong> Be careful</strong> , <cite>wear your mask , clean your hands, keep a safe distance.</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>
    

        </>)
    }


}
export default Covid19Rendaring;