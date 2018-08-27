import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
        <div className="comment-list">
            {   
                comments.map(comment => (
                    <div className="comment">
                        <Comment data={comment} />
                        <hr className="comment-separator"/>
                    </div>
                ))
            }
        </div>
)

CommentList.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.object)
}

export default CommentList;
