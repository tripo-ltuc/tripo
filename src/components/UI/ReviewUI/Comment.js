import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from "react-bootstrap";
class Comment extends Component{

    // this.props.postIdx,
    render(){
        return(
            <>
                {(this.props.idx%2) && <Card className="align-self-start">
                    <Card.Header>
                        <Card.Body>
                            <Card.Img src={this.props.comment.userImg}/>
                            <Card.Text>{this.props.comment.userName}</Card.Text>
                        </Card.Body>
                        {this.props.owner.email ===  this.props.comment.userEmail
                          &&<Card.Body>
                              <Button vlaue="Delete" 
                               onClick={() => this.props.deleteComment(this.props.commIdx, this.props._id)}/>
                              <Button vlaue="Edit" 
                              onClick={() => this.editComment(this.props._id, this.props.postIdx, this.props.commentIdx)}/>
                          </Card.Body>}
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{this.props.comment.userComment}</Card.Text>
                    </Card.Body>
                </Card>}

                {!(this.props.idx%2) && <Card className="align-self-end">
                    <Card.Header>
                    <Card.Body>
                            <Card.Img src={this.props.comment.userImg}/>
                            <Card.Text>{this.props.comment.userName}</Card.Text>
                        </Card.Body>
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