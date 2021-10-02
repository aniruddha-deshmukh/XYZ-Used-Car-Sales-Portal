import React, { Component } from "react";
import UserService from "../services/UserService";

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      userName: "",
      userPassword: "",
    };
  }
  changeFnameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ fname: event.target.value });
  };

  changeLnameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ lname: event.target.value });
  };

  changeEmailHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  };

  changeUserNameHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  };

  changeUserPasswordHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ userPassword: event.target.value });
  };

  saveUser = (e) => {
    e.preventDefault();
    console.log("Save Method");

    let user = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    UserService.createUser(user).then((res) => {
      console.log("Create Component" + JSON.stringify(res.data));
      this.props.history.push("/Login");
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
            <h3>Sign Up</h3>
            <hr />
            <div>
              <b>
                <label style={{ padding: `5px` }}>First Name:</label>
              </b>
              <input
                type="text"
                name="fname"
                className="form-control"
                placeholder="First Name"
                onChange={this.changeFnameHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Last Name:</label>
              </b>
              <input
                type="text"
                name="lname"
                className="form-control"
                placeholder="Last Name"
                onChange={this.changeLnameHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Username:</label>
              </b>
              <input
                type="text"
                name="userName"
                className="form-control"
                placeholder="Enter Username"
                onChange={this.changeUserNameHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Email Address:</label>
              </b>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email"
                onChange={this.changeEmailHandler}
              />
            </div>

            <div>
              <b>
                <label style={{ padding: `5px` }}>Password:</label>
              </b>
              <input
                type="password"
                name="userPassword"
                className="form-control"
                placeholder="Enter Password"
                onChange={this.changeUserPasswordHandler}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.saveUser}
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              <br />
              Already registered <a href="/Login">Sign in?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterComponent;
