import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
          author: mock.commentAuthor,
          content: content
        });
      } 
    });
  }

  render() {
    return (
      <div className="comments">
        <p className="comments__hide-comments">Hide comments ({mock.hideComments})</p>
        <CommentList comments={this.props.comments}/>
        <div className="comments__add-comment">
          <input className="comments__add-comment-input" placeholder="Add a comment" type="textarea" ref={this.inputRef}/>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  addComment: PropTypes.func
}

export default Comments;
