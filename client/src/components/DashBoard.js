import React from "react";
//import BookList from './BookList';

export default class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <header id="main-header" class="py-2 bg-primary text-white">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h1>
                  <i class="fas fa-cog mx-2" /> Dashboard
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="actions" class="py-4 mb-4 bg-light">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-primary btn-block"
                  data-toggle="modal"
                  data-target="#addPostModal"
                >
                  <i class="fas fa-plus" /> Add Post
                </a>
              </div>
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-success btn-block"
                  data-toggle="modal"
                  data-target="#addCategoryModal"
                >
                  <i class="fas fa-plus" /> Add Category
                </a>
              </div>
              <div class="col-md-3">
                <a
                  href="#"
                  class="btn btn-warning text-white btn-block"
                  data-toggle="modal"
                  data-target="#addUserModal"
                >
                  <i class="fas fa-plus" /> Add User
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="posts">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="card">
                  <div class="card-header">
                    <h4>Latest Posts</h4>
                  </div>
                  <table class="table table-striped">
                    <thead class="thead-dark">
                      <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Post One</td>
                        <td>Web Development</td>
                        <td>May 10 2018</td>
                        <td>
                          <a
                            href="details.html"
                            class="btn btn-secondary btn-sm"
                          >
                            <i class="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Post Two</td>
                        <td>Tech Gadgets</td>
                        <td>May 11 2018</td>
                        <td>
                          <a
                            href="details.html"
                            class="btn btn-secondary btn-sm"
                          >
                            <i class="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Post Three</td>
                        <td>Business</td>
                        <td>May 12 2018</td>
                        <td>
                          <a
                            href="details.html"
                            class="btn btn-secondary btn-sm"
                          >
                            <i class="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Post Four</td>
                        <td>Health</td>
                        <td>May 13 2018</td>
                        <td>
                          <a
                            href="details.html"
                            class="btn btn-secondary btn-sm"
                          >
                            <i class="fas fa-angle-double-right" /> Details
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="col-md-3">
                <div class="card text-center bg-primary text-white mb-3">
                  <div class="card-body">
                    <h3>Posts</h3>
                    <h4 class="display-4">
                      <i class="fas fa-pencil-alt" /> 6
                    </h4>
                    <a href="posts.html" class="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>

                <div class="card text-center bg-success text-white mb-3">
                  <div class="card-body">
                    <h3>Category</h3>
                    <h4 class="display-4">
                      <i class="fas fa-folder" /> 4
                    </h4>
                    <a
                      href="categories.html"
                      class="btn btn-outline-light btn-sm"
                    >
                      View
                    </a>
                  </div>
                </div>

                <div class="card text-center bg-warning text-white mb-3">
                  <div class="card-body">
                    <h3>Users</h3>
                    <h4 class="display-4">
                      <i class="fas fa-users" /> 4
                    </h4>
                    <a href="users.html" class="btn btn-outline-light btn-sm">
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
