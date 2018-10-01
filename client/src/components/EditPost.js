import React, {Component} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removePost, editPost } from '../actions/action_posts';

import EditPostForm from './EditPostForm';

class EditPost extends Component {
  
    onDeleteClick() {
        const id = this.props.post.id;
        this.props.dispatch(removePost({ id }));
        this.props.history.push('/');
    }

    render() {
    const {post} = this.props;
    return (
      <div>
        {/*  HEADER */}
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>{post.postTitle}</h3>
              </div>
            </div>
          </div>
        </header>

        {/* ACTIONS */}
        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Link className="btn btn-light btn-block" to="/">
                  <i className="fas fa-arrow-left" /> Back To Dashboard
                </Link>
              </div>
              <div className="col-md-3">
                <button type="submit" className="btn btn-success btn-block" form="editPostFormId">
                  <i className="fas fa-check" /> Save Changes
                </button>
              </div>
              <div className="col-md-3">
                <button
                  className="btn btn-danger text-white btn-block"
                  onClick={this.onDeleteClick.bind(this)}
                >
                  <i className="fas fa-trash" /> Delete Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <EditPostForm
            post = {this.props.post}
            onSubmitPost={(post) => {
                this.props.dispatch(editPost(this.props.post.id, post));
                this.props.history.push('/');
            }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditPost);
