import React, { Component } from "react";
import CarService from "../services/CarService";

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    this.addCar = this.addCar.bind(this);
    this.searchCar = this.searchCar.bind(this);
  }

  addCar() {
    this.props.history.push(`/PostCar`);
  }

  searchCar() {
    this.props.history.push(`/search`);
  }

  sendmessage = (e) => {
    this.props.history.push(`/sendmessage`);
  };

  render() {
    const mystyle = {
      width: "100%",
      height: "593px",
      align: `center`,
      backgroundImage: `url("https://imgix.bustle.com/uploads/image/2020/11/10/c45fd97d-5fd3-4a98-9a80-3b3608b1367f-the-tesla-lineup-featuring-the-model-s-semi-3-x.jpg?w=1540&h=620&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.384&fp-y=0.5971563981042654&blend=000000&blendAlpha=45&blendMode=normal")`,
    };
    return (
      <div>
        <div
          class="d-flex justify-content-around p-5 text-center bg-image"
          style={mystyle}
        >
          <div
            style={{
              color: `white`,
              align: `center`,
              opacity: `0.8`,
              width: `40%`,
              height: `75%`,
              borderStyle: `groove`,
              borderRadius: `20px`,
            }}
          >
            <br />
            <h2>Welcome To The Dashboard</h2>
            <br />
            <br />
            <br />
            <div class="container" style={{ width: `50%` }}>
              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.addCar}>
                  Post Car
                </button>
              </div>
              <br></br>

              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.sendmessage}>
                  Send Message
                </button>
              </div>
              <br></br>

              <div className="row" style={{ padding: `5px` }}>
                <button className="btn btn-primary" onClick={this.searchCar}>
                  Search Cars
                </button>
              </div>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardComponent;
