import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button,Col,Row, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faEdit } from "@fortawesome/free-solid-svg-icons";
import './Comment.css';
class Comment extends Component{

    render(){
        return(
            <>
                {(this.props.commentIdx%2 === 0) &&
                
              
                    <div className="d-flex">
                        <Container className='w-25'>
                           <img className="mx-2 rounded-circle" style={{width:'5rem',height:'auto'}} src={this.props.comment.userImg}/>  
                           <Card.Text><h3>{this.props.comment.userName}</h3></Card.Text>
                        </Container>
                        <Container  style={{clipPath: `polygon(6% 0, 100% 0%, 100% 100%, 63% 100%, 4% 100%, 4% 18%, 0 11%)`}}>
                <Card className="align-self-start">
                        
                        <Card.Header className="bg-white">
                        <Card.Body style={{fontSize:'20px'}}>
                        <Card.Text>{this.props.comment.userComment}</Card.Text>
                    </Card.Body>
                        {this.props.owner.nickname ===  this.props.comment.userName
                          &&<Card.Body>
                                <Button variant="success"style={{marginRight:'2%'}}
                                onClick={() => this.props.editComment(this.props._id, this.props.postIdx, this.props.commentIdx)}>
                                  <FontAwesomeIcon icon={faEdit} fixedWidth />
                                </Button>
                                <Button  variant="danger" 
                                onClick={() => this.props.deleteComment(this.props.commentIdx, this.props._id)}>
                                 <FontAwesomeIcon icon={faTrash} fixedWidth />
                                </Button>
                          </Card.Body>}
                    </Card.Header>
   
                                    {/* <Col style={{backgroundColor:"red", clipPath:`polygon(18% 0, 100% 0%, 100% 75%, 66% 76%, 16% 76%, 16% 31%, 2% 14%)`}}> */}
                   

                </Card>

                        </Container>
                    </div>


                // <Card className="w-100 align-self-start">
                //         <Row>
                //         <Col>
                //     <Card.Header style={{marginRight:'80px'}}>
                //             <Card.Img className="w-25 mx-2 rounded-circle" src={this.props.comment.userImg}/>
                //             <Card.Text><h3>{this.props.comment.userName}</h3></Card.Text>
                //         {this.props.owner.nickname ===  this.props.comment.userName
                //           &&<Card.Body>
                //                 <Button variant="success"style={{marginRight:'4%'}}
                //                 onClick={() => this.props.editComment(this.props._id, this.props.postIdx, this.props.commentIdx)}>
                //                   <FontAwesomeIcon icon={faEdit} fixedWidth />
                //                 </Button>
                //                 <Button  variant="danger" 
                //                 onClick={() => this.props.deleteComment(this.props.commentIdx, this.props._id)}>
                //                  <FontAwesomeIcon icon={faTrash} fixedWidth />
                //                 </Button>
                //           </Card.Body>}
                //     </Card.Header>
                //                     </Col>
                //                     <Col style={{backgroundColor:"red", clipPath:`polygon(18% 0, 100% 0%, 100% 75%, 66% 76%, 16% 76%, 16% 31%, 2% 14%)`}}>
                //     <Card.Body style={{fontSize:'20px',paddingRight:"20px"}}>
                //         <Card.Text>{this.props.comment.userComment}</Card.Text>
                //     </Card.Body>
                //     </Col> </Row>
                // </Card>
                
                }

                {(this.props.commentIdx%2 === 1) && <Card className="align-self-end">
                    <Card.Header>
                    <Card.Body>
                            <Card.Img src={this.props.comment.userImg}/>
                            <Card.Text>{this.props.comment.userName}</Card.Text>
                        </Card.Body>
                        {this.props.owner.nickname ===  this.props.comment.userName
                          &&<Card.Body>
                                <Button
                                onClick={() => this.props.deleteComment(this.props.commentIdx, this.props._id)}>
                                    Delete
                                </Button>
                                <Button 
                                onClick={() => this.props.editComment(this.props._id, this.props.postIdx, this.props.commentIdx)}>
                                    Edit
                                </Button>
                          </Card.Body>}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{this.props.comment.userComment}</Card.Text>
                    </Card.Body>
                </Card>}
            </>
        );
    }
}

export default Comment;