import React, { Component } from "react";
import CarService from "../services/CarService";

class ViewCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Car: {},
      carId: this.props.match.params.carId,
    };
  }

  componentDidMount() {
    CarService.viewCar(this.state.carId).then((res) => {
      console.log("response data from backend " + JSON.stringify(res.data));
      this.setState({ Car: res.data });
    });
  }

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
          id="intro-example"
          class="d-flex justify-content-center p-5 text-center bg-image"
          style={mystyle}
        >
          <div
            style={{
              fontSize: `20px`,
              color: `white`,
              align: `center`,
              opacity: `0.8`,
              width: `50%`,
              borderStyle: `groove`,
              borderRadius: `20px`,
            }}
          >
            <br></br>
            <div className="container">
              <h3 className="text-center"> Car Details</h3>
              <hr />
              <div className="card-body">
                <div className="row">
                  <b>
                    <label> Car Id: </label>
                  </b>
                  <div>{this.state.Car.carId}</div>
                </div>
                <div className="row">
                  <b>
                    {" "}
                    <label> Car Name: </label>
                  </b>
                  <div>{this.state.Car.carName}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Car Make:</label>
                  </b>
                  <div>{this.state.Car.carMake}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Car Model:</label>
                  </b>
                  <div>{this.state.Car.carModel}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Car Registration:</label>
                  </b>
                  <div>{this.state.Car.carRegistration}</div>
                </div>
                <div className="row">
                  <b>
                    <label>Car Price Range:</label>
                  </b>
                  <div>{this.state.Car.carPricerange}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCar;
