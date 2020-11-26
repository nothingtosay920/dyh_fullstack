import React, { Component } from 'react';
import Comment from './Comment'
class CommentList extends Component {
    render() {
        return (
            <div>
                评论列表
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>
        )
    }
}

export default CommentList