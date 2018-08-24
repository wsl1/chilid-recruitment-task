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
                    <p className="user__name">{mock.name} {mock.surname}</p>
                    <p className="user__address">{mock.city}, {mock.country}</p>
                    <div className="user__hearth">h</div>
                </p>
                
                
            </div>
            
        </div>
        <div className="user__bottom">
        
        </div>
        
      </div>
    );
  }
}

export default User;
