import { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withAuth0 } from "@auth0/auth0-react";
import { Form, FloatingLabel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from "./Comment";


class Post extends Component{

    commentHandler = (event, _id) => {
        event.preventDefault();
        const {user} = this.props.auth0;
        const comment = {
            userImg: user.image,
            userName: user.cityName,
            comment: event.target.userComment.value,
        };

        this.props.AddComment(_id, comment);
    };

    render(){
        const {user} = this.props.auth0;
        return(
            <>
                <Card>
                    <Card.Header>
                        <Card.Title>
                            <Card.Body>
                                <Card.Img src={this.state.item.userImg} alt="userImg"/>
                                <Card.Text>{this.state.item.userName}</Card.Text>
                            </Card.Body>
                            <Card.Title>{this.props.item.cityName}</Card.Title>
                        </Card.Title>
                        <Card.Body>
                            <Card.Img src={this.state.item.cityImg}/>
                            <Card.Text>{this.props.item.content}</Card.Text>
                        </Card.Body>
                        <Card.Body className="d-flex">
                            <i class="fas fa-heart mx-2"></i>{this.props.item.likes}
                        </Card.Body>
                        <Card.Footer>
                            {user.email === this.props.item.userEmail
                            && <Card.Body>
                                <Button onClick={() => this.props.deletePost(this.props.item._id)}
                                 value="Delete"/>
                                
                                <Button onClick={() => this.props.updateHandler(this.props.item._id, this.props.idx)}
                                 value="Edit"/>
                            </Card.Body>}
                            <Card.Body>
                                <Form onSubmit={() => this.commentHandler(this.props.item._id)}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                        <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                        name="userComment"
                                        />
                                    </FloatingLabel>
                                    <Button value="Add Comment"/>
                                </Form>
                            </Card.Body>
                            {this.props.item.comments.length
                            && <Card.Body 
                            className="d-flex flex-column">
                                    {this.props.item.comments.map((comment, idx) => {
                                        return <Comment commet={comment} 
                                                commIdx={idx}
                                                postIdx={this.props.idx}
                                                _id={this.props.item._id}
                                                owner={user}
                                                deleteComment={this.props.deleteComment}
                                                editComment={this.props.editComment}/>
                                    })}
                               </Card.Body>}
                        </Card.Footer>
                    </Card.Header>
                </Card>
            </>
        );
    }
}

export default withAuth0(Post);