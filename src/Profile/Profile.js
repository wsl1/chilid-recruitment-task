import React, { Component } from 'react';
import './Profile.scss';
import User from '../User/User';

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__about">
            <User />
        </div>
        <div className="profile__comments">comments</div>
      </div>
    );
  }
}

export default Profile;
