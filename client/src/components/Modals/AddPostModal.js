import React from "react";

const AddPostModal = ({ closeModal, confirmAction, title, titleChange, contentChange }) => {
  
    return (
    <div className="modal-content">
      <div className="modal-header bg-primary text-white">
        <h5 className="modal-title">{title}</h5>
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeModal}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input 
            type="text" 
            className="form-control"
            placeholder="Post Title"
            autoFocus
            onChange={titleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control">
              <option value="">Web Development</option>
              <option value="">Businness</option>
              <option value="">Tech Gadgets</option>
              <option value="">Health</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="image" />
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
            onChange={contentChange}         
            />
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-primary"
          onClick={confirmAction}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AddPostModal;

