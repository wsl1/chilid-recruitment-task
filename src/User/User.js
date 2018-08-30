import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './User.scss';
import UserPhoto from './User.jpg'
import { ShareSvg, HearthSvg } from './UserSvg';
import mock from '../mock.json';

class User extends Component {

  render() {
    const isSmall = this.props.small;
    const {likes, followers, like, follow} = this.props;

    return (
      <div className={`user ${isSmall ? 'user--small' : ''}`}>
        <div className={`user__top ${isSmall ? 'user__top--small' : ''}`}>
            <div className={`user__photo ${isSmall ? 'user__photo--small' : ''}`}>
                <img src={UserPhoto} className="user__img" alt="user"/>
            </div>
            <div className={`user__details ${isSmall ? 'user__details--small' : ''}`}>
                <div className={`user__detail ${isSmall ? 'user__detail--small' : ''}`}>
                    <p className="user__name">{mock.name} {mock.surname} <HearthSvg like={like}/></p>
                    <p className="user__address">{mock.city}, {mock.country}</p>
                </div>
            </div>
            <ShareSvg/>
        </div>
        <div className={`user__bottom ${isSmall ? 'user__bottom--small' : ''}`}>
            <div className="user__stats">
                <p className="user__stat user__likes">{likes}</p>
                <p className="user__stat-description">Likes</p>
            </div>
            <div className="vertical-line"></div>
            <div className="user__stats">
                <p className="user__stat user__following">{mock.stats.following}</p>
                <p className="user__stat-description">Following</p>    
            </div>
            <div className="vertical-line"></div>
            <div className="user__stats">
                <p className="user__stat user__followers">{followers}</p>
                <p className="user__stat-description">Followers</p>
            </div>
            <div onClick={follow} className={`user__follow ${isSmall ? 'user__follow--small' : ''}`}>
                <span className="user__follow-text">FOLLOW</span>
            </div>
        </div>
        
      </div>
    );
  }
}

User.propTypes = {
    likes: PropTypes.number,
    followers: PropTypes.number,
    like: PropTypes.func,
    follow: PropTypes.func,
    small: PropTypes.bool
}

export default User;
