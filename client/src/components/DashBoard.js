import React, {Component} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import ModalRoot from "../ModalRoot";

import '../dist/css/template.css';

import { showModal, hideModal } from "../actions/action_modal";
import { addPost } from "../actions/action_posts";

class DashBoard extends Component {
  constructor(props) {
    super(props);

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);

    this.closeModal = this.closeModal.bind(this);
    this.openAddPostModal = this.openAddPostModal.bind(this);
    this.addNewPost = this.addNewPost.bind(this);

    this.state = {
      postTitle: "",
      postContent:  ""
    };
  }

  onTitleChange(e) {
    const postTitle = e.target.value;
    this.setState( {postTitle} );
  }

  onContentChange(e) {
    const postContent = e.target.value;
    this.setState( {postContent});
  }

  closeModal(event) {
    this.props.hideModal();
  }

  addNewPost(event) {
    this.props.addPost({
      postTitle: this.state.postTitle,
      postContent: this.state.postContent
    });
    this.props.hideModal();
  }

  openAddPostModal(event) {
    this.props.showModal(
      {
        open: true,
        title: "Add Post",
        confirmAction: this.addNewPost,
        closeModal: this.closeModal,
        titleChange: this.onTitleChange,
        contentChange: this.onContentChange
      },
      'addPost'
    );
  }

  render() {
    return (
      <div>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-cog mx-2" /> Dashboard
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" className="py-4 mb-4 bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.openAddPostModal}
                >
                  <i className="fas fa-plus" /> Add Post
                </button>
              </div>
              <div className="col-md-3">
                <a
                  href="#"
                  className="btn btn-success btn-block"
                  data-toggle="modal"
                  data-target="#addCategoryModal"
                >
                  <i className="fas fa-plus" /> Add Category
                </a>
              </div>
              <div className="col-md-3">
                <a
                  href="#"
                  className="btn btn-warning text-white btn-block"
                  data-toggle="modal"
                  data-target="#addUserModal"
                >
                  <i className="fas fa-plus" /> Add User
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="posts">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <PostList />
              </div>
              <div className="col-md-3">
                <div className="card text-center bg-primary text-white mb-3">
                  <div className="card-body">
                    <h3>Posts</h3>
                    <h4 className="display-4">
                      <i className="fas fa-pencil-alt" />{" "}
                      {this.props.postsNumber}
                    </h4>
                    <Link className="btn btn-outline-light btn-sm" to="/posts">
                      View
                    </Link>
                  </div>
                </div>
                <div className="card text-center bg-success text-white mb-3">
                  <div className="card-body">
                    <h3>Category</h3>
                    <h4 className="display-4">
                      <i className="fas fa-folder" /> 4
                    </h4>
                    <a
                      href="categories.html"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>

                <div className="card text-center bg-warning text-white mb-3">
                  <div className="card-body">
                    <h3>Users</h3>
                    <h4 className="display-4">
                      <i className="fas fa-users" /> 4
                    </h4>
                    <a
                      href="users.html"
                      className="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalRoot />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    postsNumber: state.posts.length
  };
};

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }));
  },
  addPost: post => {
    dispatch(addPost(post));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashBoard);
