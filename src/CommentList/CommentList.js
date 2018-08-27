import React from 'react';
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

export default CommentList;
