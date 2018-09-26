import React from "react";

export default class EditPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      postTitle: props.post ? props.post.postTitle : "",
      //postCategory: props.post ? props.post.postCategory : '',
      postContent: props.post ? props.post.postContent : "",

      error: ""
    };
  }

  onTitleChange(e) {
    const postTitle = e.target.value;
    this.setState(() => ({ postTitle: postTitle }));
  }

  onCategoryChange(e) {
    const postCategory = e.target.value;
    this.setState(() => ({ postCategory: postCategory }));
  }

  onContentChange(e) {
    const postContent = e.target.value;
    this.setState(() => ({ postContent: postContent }));
  }

  onSubmit(e) {
    e.preventDefault();

    if (!this.state.postTitle || !this.state.postContent) {
      this.setState(() => ({ error: "Please set post title and content!" }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmitPost(
        {
        postTitle: this.state.postTitle,
        postContent: this.state.postContent
        }
      );
    }
  }

  render() {
    return (  
      <section id="details">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header">
                  <h4>Edit Post</h4>
                </div>
                <div className="card-body">
                  {this.state.error && (
                    <p className="error">{this.state.error}</p>
                  )}
                  <form id="editPostFormId" className="add-book-form" 
                  onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Post Title"
                        autoFocus
                        value={this.state.postTitle}
                        onChange={this.onTitleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">Category</label>
                      <select className="form-control">
                        <option value="1">
                          Web Development
                        </option>
                        <option value="1">Businness</option>
                        <option value="2">Tech Gadgets</option>
                        <option value="3">Health</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="image">Upload Image</label>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="image"
                        />
                        <label htmlFor="image" className="custom-file-label">
                          Choose File
                        </label>
                      </div>
                      <small className="form-text text-muted">Max size 3mb</small>
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Body</label>
                      <textarea
                        name="editor1"
                        className="form-control"
                        placeholder="Add the post content here"
                        onChange={this.onContentChange}
                        value={this.state.postContent}
                      > 
                      </textarea>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
