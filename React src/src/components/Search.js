import React, { Component } from "react";
import CarService from "../services/CarService";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Car: [],
      searchKeyword: this.props.match.params.searchKeyword,
    };

    this.searchCar = this.searchCar.bind(this);
  }

  viewCar(carId) {
    this.props.history.push(`/view-car/${carId}`);
  }

  componentDidMount() {
    CarService.searchCar(this.state.searchKeyword).then((res) => {
      this.setState({ Car: res.data });
    });
  }

  changeSearchHandler = (event) => {
    console.log(event.target.value);
    this.setState({ searchKeyword: event.target.value });
  };

  searchCar(searchKeyword) {
    console.log("search Car Method " + searchKeyword);
    this.props.history.push(`/search-cars/${searchKeyword}`);
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
              color: `white`,
              align: `center`,
              opacity: `0.8`,
              width: `80%`,
              borderStyle: `groove`,
              borderRadius: `20px`,
            }}
          >
            <br />
            <h2 className="text-center">Search Car Results</h2>
            <br />

            <nav>
              <form
                className="container"
                style={{
                  width: `50%`,
                  align: `center`,
                  color: "white",
                  opacity: `0.8`,
                  borderStyle: `groove`,
                  borderRadius: `10px`,
                }}
              >
                <br />
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchKeyword}
                  onChange={this.changeSearchHandler}
                />
                <br />
                <button
                  onClick={() => this.searchCar(this.state.searchKeyword)}
                  className="btn btn-info"
                >
                  Search
                </button>
              </form>
            </nav>
            <br />
            <div>
              <table
                className="table table table-bordered"
                style={{ color: "white" }}
              >
                <thead>
                  <tr>
                    <th>Car Id</th>
                    <th>Car Name</th>
                    <th>Car Make</th>
                    <th>Car Model</th>
                    <th>Car Registration</th>
                    <th>Car Price Range</th>
                    <th> Actions</th>
                  </tr>
                </thead>
                <tbody style={{ color: "white" }}>
                  {this.state.Car.map((car) => (
                    <tr key={car.carId}>
                      <td> {car.carId}</td>
                      <td> {car.carName} </td>
                      <td> {car.carMake}</td>
                      <td> {car.carModel}</td>
                      <td> {car.carRegistration}</td>
                      <td> {car.carPricerange}</td>
                      <td>
                        <button
                          style={{ marginLeft: "10px" }}
                          onClick={() => this.viewCar(car.carId)}
                          className="btn btn-info"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
