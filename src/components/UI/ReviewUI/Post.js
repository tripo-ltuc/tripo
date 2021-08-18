import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, FloatingLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/post.css';
import Comment from "./Comment";


class Post extends Component{

    commentHandler = (event, _id) => {
        event.preventDefault();
        const {user} = this.props.auth0;
        const comment = {
            userImg: user.picture,
            userName: user.nickname,
            userComment: event.target.userComment.value,
        };

        this.props.addComment(_id, comment);
        event.target.reset();
    };

    render(){
        const {user} = this.props.auth0;
        return(
            <>
                <Card className="card">
                    <Card.Body className="main-body">
                        <Card.Title className="card-title">
                            <Card.Body className="title-body">
                                <Card.Img className="mx-2 rounded-circle" style={{width: '5rem'}} src={this.props.item.userImg} alt="userImg"/>
                                <Card.Text>{this.props.item.userName}</Card.Text>
                            </Card.Body>
                            <Card.Title className="mr-2">{this.props.item.cityName}</Card.Title>
                        </Card.Title>
                        <Card.Body>
                            <Card.Img src={this.props.item.cityImg}/>
                            <Card.Text>{this.props.item.content}</Card.Text>
                        </Card.Body>
                        <Card.Body className="d-flex">
                            <i class="fas fa-heart mx-2"></i>{this.props.item.likes}
                        </Card.Body>
                        <Card.Footer>
                            {user.email === this.props.item.userEmail
                            && <Card.Body>
                                <Button onClick={() => this.props.deletePost(this.props.item._id)}
                                >Delete</Button>
                                
                                <Button onClick={() => this.props.updatePost(this.props.item._id, this.props.idx)}
                                >Edit</Button>
                            </Card.Body>}
                            <Card.Body>
                                <Form onSubmit={(event) => this.commentHandler(event, this.props.item._id)}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name="userComment"
                                        />
                                    </FloatingLabel>
                                    <Button type="submit">Add Comment</Button>
                                </Form>
                            </Card.Body>
                            {this.props.item.comments.length
                            && <Card.Body 
                            className="d-flex flex-column">
                                    {this.props.item.comments.length
                                     &&this.props.item.comments.map((comment, idx) => {
                                        
                                        return <Comment 
                                                comment={comment} 
                                                commentIdx={idx}
                                                postIdx={this.props.idx}
                                                _id={this.props.item._id}
                                                owner={user}
                                                deleteComment={this.props.deleteComment}
                                                editComment={this.props.editComment}
                                                />
                                    })}
                               </Card.Body>}
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default withAuth0(Post);