import React from "react";

export default class Footer extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }
  
    render() {
    return (
      <footer id="main-footer" class="bg-dark text-white mt-5 p-5">
        <div class="container">
          <div class="row">
            <div class="col">
              <p class="lead text-center">
                Copyright &copy; <span>{this.getYear()} </span>
                Sebastian Felon
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
