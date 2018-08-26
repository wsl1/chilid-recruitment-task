import React, { Component } from 'react';
import './User.scss';
import UserPhoto from './User.jpg'
import mock from '../mock.json';

class User extends Component {
   componentDidMount() {
       console.log(1);
   }

  render() {
    return (
      <div className="user">
        <div className="user__top">
            <div className="user__photo">
                <img src={UserPhoto} className="user__img" alt="user"/>
            </div>
            <div className="user__details">
                <p className="user__detail">
                    <p className="user__name">{mock.name} {mock.surname} <span className="user__hearth">h</span></p>
                    <p className="user__address">{mock.city}, {mock.country}</p>
                </p>
            </div>
            <div class="user__share">s</div>
        </div>
        <div className="user__bottom">
            <div class="user__stats">
                <p className="user__stat user__likes">{mock.stats.likes}</p>
                <p className="user__stat-description">Likes</p>
            </div>
            <div className="vertical-line"></div>
            <div class="user__stats">
                <p className="user__stat user__following">{mock.stats.following}</p>
                <p className="user__stat-description">Following</p>    
            </div>
            <div className="vertical-line"></div>
            <div class="user__stats">
                <p className="user__stat user__followers">{mock.stats.followers}</p>
                <p className="user__stat-description">Followers</p>
            </div>
            <div class="user__follow">
                <span class="user__follow-text">FOLLOW</span>
            </div>
        </div>
        
      </div>
    );
  }
}

export default User;
