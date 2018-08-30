import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';
import User from '../User/User';
import Comments from '../Comments/Comments';

class Profile extends Component {

  state = {
    comments: [
      {
        author: "Name Surname",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      },
      {
        author: "OtherName OtherSurname",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
      }
    ],
    likes: 0,
    followers: 0,
  }

  addComment = (comment) => {
    let comments = [...this.state.comments];
    comments = [comment, ...comments];
    this.setState({
      comments: comments
    })
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
          <User likes={this.state.likes} followers={this.state.followers} like={this.like} follow={this.follow}/>
          <Comments comments={this.state.comments} addComment={this.addComment}/>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  small: PropTypes.bool
}

export default Profile;
