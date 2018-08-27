import React, { Component } from 'react';
import './Comments.scss';
import mock from '../mock.json';
import CommentList from '../CommentList/CommentList';

class Comments extends Component {

  inputRef = React.createRef()

  componentDidMount() {
    
    this.inputRef.current.addEventListener('keyup', (e) => {
      let content = this.inputRef.current.value;
      if (e.keyCode === 13) {
        e.preventDefault();
        this.props.addComment({
          author: "test test",
          content: content
        });
      } 
    });
    /*$(".input1").on('keyup', function (e) {
      if (e.keyCode == 13) {
          // Do something
      }
  });*/
  }

  render() {
    return (
      <div className="comments">
        <p className="comments__hide-comments">Hide comments ({mock.hideComments})</p>
        <CommentList comments={this.props.comments}/>
        <div className="comments__add-comment">
          <input className="comments__add-comment-input" type="textarea" ref={this.inputRef}/>
        </div>
      </div>
    );
  }
}

export default Comments;
