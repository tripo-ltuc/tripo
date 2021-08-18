import React from "react";
import axios from "axios";
import AddPostModal from "../UI/ReviewUI/AddPostModal";
import Post from "../UI/ReviewUI/Post";
import UpdatePostModal from "../UI/ReviewUI/UpdatePostModal";
import UpdateCommentModal from "../UI/ReviewUI/UpdateCommentModal";

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      server: process.env.REACT_APP_URL,
      showFlags: {
        addPostFlag: false,
        updatePostFlag: false,
        updatePostComment : false
      },
      postData: [],
      _id: 0,
      cityName: 'all',
      cityImg: '',
      content: '',
      comment: '',
      linkes: 0,
      commentIdx: -1
    };
  }

  componentDidMount = () => {
    // const { user } = this.props.auth0;
    const endPoint = this.state.cityName === 'all' ? 'getAllCards' : 'getCityCards';
    axios
    .get(`${this.state.server}/${endPoint}`, {params: {cityName: this.state.cityName}})
    .then(results => {
      this.setState({
        postData: results.data
      });
    })
    .catch(err => console.log(err));
  };

  addingReviews = (event) => {
    event.preventDefault();

    const newObject = {
      value: event.target.confirmValue.value,
      placeName: event.target.nameOfCity.value,
      userName: event.target.personName.value,
      comment: event.target.userComment.value,
      img: event.target.imgName.value,
    };
    console.log(newObject);
    axios
      .post(`${this.state.server}/addCards`, newObject)
      .then((results) => {
        this.setState({
          citiesData: results.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  showModal = () => {
    this.setState({
      addPostFlag: {
        addPostFlag: true
      }
    });
  };


  closeModal = () => {
    this.setState({
      addPostFlag: {
        addPostFlag: false
      }
    });
  };


  deletePost = (id) => {
    axios
    .delete(`${this.state.server}/deleteCard/:id`, {params: {id: id}})
    .then(result => {
      this.setState({
        postData: result.data
      });
    })
    .catch();
  };

  updatePost = (_id, id) => {
    this.setState({
      showFlags: {
        updatePostFlag: true,
      },
      _id: _id,
      cityName: this.state.postData[id].cityName,
      cityImg: this.state.postData[id].cityImg,
      content: this.state.postData[id].content,
    });
  };

  updateUserPost = (cityName, cityImg, content) => {
    const id = this.state._id;
    axios
    .put(`${this.state.server}/updateCard/:id`, 
    {params: {id: id, cityName: cityName, cityImg: cityImg, content: content}})
    .then(result => {
      this.setState({
        postData: result.data
      });
    })
    .catch(err => console.log(err));
  };

  setUpdateModalFlag = toShow => {
    this.setState({
      showFlags:{
        updatePostFlag: toShow
      }
    });
  };

  
  
  AddComment = (_id, comment) => {
    axios
    .put(`${this.state.server}/addCardComment/:id`, {params: { id: _id, comment: comment}})
    .then(result => {
      this.setState({
        postData: result.data
      });
    })
    .catch(err => console.log(err));
  };
  
  
  deleteComment = (commentIdx, _id) => {
    axios
    .delete(`${this.state.server}/deleteCardComment/:id`, {params: {id: _id, idx: commentIdx}})
    .then(result => {
      this.setState({
        postData: result.data
      });
    })
    .catch(err => console.log(err));
  };
  

  editComment = (post_id, postIdx, commentIdx) => {
    this.setState({
      showFlag:{
          updatePostComment: true
        },
        comment: this.state.postData[postIdx].comments[commentIdx],
        _id: post_id,
        commentIdx: commentIdx
      });
      
    };
    

    updateComment = newComment => {
        axios
        .put(`${this.state.server}/updateCardComment/:id`,
         {params: {id: this.state._id, commentIdx: this.state.commentIdx, newComment: newComment}})
        .then(result => {
          this.setState({
            postData: result.data
          });
        })
        .catch(err => console.log(err));
    };


    setCommentModalFlag = toShow => {
      this.setState({
        showFlags:{
          updatePostComment  : toShow
        }
      });
    };
    

    render() { 
      return (
        <>
        <button onClick={this.props.showModal}>Add A Post</button>
        <AddPostModal
         addingReviews={this.addingReviews}
         closingModal={this.closeModal}
         show={this.state.showFlags.addPostFlag}
            />
      
        {this.state.postData.length &&
        this.state.postData.map((item, idx)=> {
          return <Post item={item} idx={idx} 
                  deletePost={this.deletePost} 
                  updatePost={this.updatePost}
                  AddComment={this.AddComment}
                  deleteComment={this.deleteComment}
                  />
        })}

        {this.state.showFlags.updatePostFlag && <UpdatePostModal 
          cityName={this.state.cityName}
          cityImg={this.state.cityImg}
          content={this.state.content}
          toShow={this.state.showFlags.updatePostFlag}
          updateUserPost={this.updateUserPost}
          setUpdateModalFlag={this.setUpdateModalFlag}
          />}

          {this.state.showFlags.updatePostComment && 
          <UpdateCommentModal 
          comment={this.state.content}
          toShow={this.state.showFlags.updatePostComment}
          setCommentModalFlag={this.setCommentModalFlag}
          updateComment={this.updateComment}
           />}
      </>
     );
    }
}

export default Reviews;
