import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
class Comment extends Component{

    render(){
        return(
            <>
                {(this.props.commentIdx%2 === 0) &&<Card className="align-self-start">
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