import React, { Component } from 'react';
import './Profile.scss';
import User from '../User/User';
import Comments from '../Comments/Comments';

class Profile extends Component {

  ref = React.createRef()

  componentDidMount() {
    const newHeight = this.ref.current.offsetHeight - 106;
    console.log();
    console.log(this.ref.current.style.height = newHeight + 'px');
  }

  addComment = (comment) => {
    let comments = [...this.state.comments];
    comments = [comment, ...comments];
    console.log(comments);
    this.setState({
      comments: comments
    })
  }

  state = {
    comments: [
      {
        author: "Test testowski",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        author: "Test testowski",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    ],
    likes: 0,
    followers: 0,
  }

  like = () => {
    this.setState({likes: this.state.likes + 1});
  }

  follow = () => {
    this.setState({followers: this.state.followers + 1});
  }

  render() {
    return (
      <div className="profile-wrapper">
        <div className="profile" ref={this.ref}>
          <div className="profile__about">
              <User likes={this.state.likes} followers={this.state.followers} like={this.like} follow={this.follow}/>
          </div>
          <Comments comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    );
  }
}

export default Profile;
