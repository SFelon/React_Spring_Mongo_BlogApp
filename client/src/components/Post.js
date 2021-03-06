import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Post = (post) => (
    <tr>
        <td>{post.postId}</td>
        <td>{post.postTitle}</td>
        <td> Kategoria </td>
        <td>{new Date(post.createdDate).toISOString().slice(0, 10)}</td>
        <td>
            <Link to={`/posts/${post.id}`}>
                <i className="fas fa-angle-double-right" /> Details
            </Link> 
        </td>
    </tr>
);

export default connect()(Post);
