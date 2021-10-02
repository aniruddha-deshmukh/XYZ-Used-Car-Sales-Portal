import React, { Component } from "react";
import CarService from "../services/CarService";

class AddCarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carName: '',
      carMake: '',
      carModel: '',
      carPricerange: '',
      carRegistration: '',
    };
  }

  changeCarNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ carName: event.target.value });
  };

  changeCarMakeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ carMake: event.target.value });
  };

  changeCarModelHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ carModel: event.target.value });
  };

  changeCarRegistrationHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ carRegistration: event.target.value });
  };

  changeCarPricerangeHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ carPricerange: event.target.value });
  };

  saveCar = (e) => {
    e.preventDefault();
    console.log("Save Method");

    let car = {
      carName: this.state.carName,
      carMake: this.state.carMake,
      carModel: this.state.carModel,
      carRegistration: this.state.carRegistration,
      carPricerange: this.state.carPricerange,
    };

    CarService.addCar(car).then((res) => {
      console.log("create component" + JSON.stringify(res.data));
      this.props.history.push("/Dashboard");
    });
  };    

  render() {
    const mystyle = {
      width: "100%",
      height: "593px",
      align: `center`,
      backgroundImage: `url("https://imgix.bustle.com/uploads/image/2020/11/10/c45fd97d-5fd3-4a98-9a80-3b3608b1367f-the-tesla-lineup-featuring-the-model-s-semi-3-x.jpg?w=1540&h=620&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.384&fp-y=0.5971563981042654&blend=000000&blendAlpha=45&blendMode=normal")`,
    };
    return (
      <div
        id="intro-example"
        class="d-flex justify-content-center p-6 text-center bg-image"
        style={mystyle}
      >
        <div
          class="d-flex justify-content-center"
          style={{
            color: `white`,
            align: `center`,
            opacity: `0.8`,
            width: `30%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
          }}
        >
          <form style={{ width: `80%`, align: `center`, color: "white" }}>
            <br />
            <h3>Post Car</h3>
            <hr />
            <div>
              <b>
                <label style={{ padding: `5px` }}>Car Name:</label>
              </b>
              <input
                type="text"
                name="carName"
                className="form-control"
                placeholder="Enter Car Name"
                onChange={this.changeCarNameHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Car Make:</label>
              </b>
              <input
                type="text"
                name="carMake"
                className="form-control"
                placeholder="Enter Car Make"
                onChange={this.changeCarMakeHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Car Model:</label>
              </b>
              <input
                type="text"
                name="carModel"
                className="form-control"
                placeholder="Enter Car Model"
                onChange={this.changeCarModelHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Car Registration:</label>
              </b>
              <input
                type="text"
                name="carRegistration"
                className="form-control"
                placeholder="Enter Registeration"
                onChange={this.changeCarRegistrationHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Car Price Range:</label>
              </b>
              <input
                type="text"
                name="carPricerange"
                className="form-control"
                placeholder="Enter Price Range"
                onChange={this.changeCarPricerangeHandler}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.saveCar}
            >
              Save Details
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddCarComponent;
