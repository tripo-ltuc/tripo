import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/FormCheck';
import Col from 'react-bootstrap/FormCheck';
import axios from 'axios';

class CityNameForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name : '',
            lat : '',
            lon : '',
            flag : false
        }
    }

    submitHandler = (event) =>{
        event.preventDefault();
        let CN =event.target.CityName.value;
        this.setState({
            name : CN
        });
        // console.log(this.state.name);
//=============================== getting lat , lon from LocationIQ API====================================//
        axios
        .get(`http://localhost:3001/Location?cityName=${CN}`)
        .then(result =>{
            this.setState({
                lat : result.data.lat,
                lon : result.data.lon,
                flag : true
            })
            this.props.getCityName(CN , result.data.lat , result.data.lon , true);
            console.log(result.data)
        })
        .catch((err) =>{
            
        })

       
    }

    render() {

        return (
            <>
                <Form onSubmit={this.submitHandler}>
                    <Row className="align-items-center" style={{ display: 'flex' }}>
                        <Col xs="auto" className="my-1">
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Type City Name"
                                className="mb-3"
                                style={{ width: '40rem' }}
                            >
                                <Form.Control type="text" name="CityName" placeholder="City Name" />
                            </FloatingLabel>
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type="submit" style={{ height: '3rem' }}>Discover</Button>
                        </Col>
                    </Row>
                </Form>
            </>
        )

    }


}
export default CityNameForm;