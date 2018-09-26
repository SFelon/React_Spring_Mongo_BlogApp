import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const PostList = props => (
    <div className="card">
      <div className="card-header">
        <h4>Latest Posts</h4>
      </div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {props.posts.map(post => {
            return <Post key={post.id} {...post} />;
          })}
        </tbody>
      </table>
    </div>
);

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(PostList);
