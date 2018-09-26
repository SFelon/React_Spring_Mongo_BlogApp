import React from "react";

export default class Footer extends React.Component {
    getYear() {
        return new Date().getFullYear();
    }
  
    render() {
    return (
      <footer id="main-footer" className="bg-dark text-white mt-5 p-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="lead text-center">
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
