import React from 'react';
import './CommentList.scss';
import Comment from '../Comment/Comment';

const CommentList = ({ comments }) => (
        <ul className="comment-list">
            {   
                comments.map(comment => (
                    <li className="comment">
                        <Comment data={comment} />
                        <hr className="comment-separator"/>
                    </li>
                ))
            }
        </ul>
)

export default CommentList;
