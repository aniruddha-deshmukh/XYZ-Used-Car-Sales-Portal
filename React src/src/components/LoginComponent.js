import React, { Component } from "react";
import UserService from "../services/UserService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPassword: "",
      error_message: "",
    };
  }

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

  loginUser = (e) => {
    e.preventDefault();
    console.log("this is login method");

    let user = {
      userName: this.state.userName,
      userPassword: this.state.userPassword,
    };

    UserService.login(user).then((res) => {
      console.log(
        "the response from Login API " +
          res.data.length +
          JSON.stringify(res.data)
      );

      if (res.data.length === 0) {
        this.setState({ error_message: "Email and Password do not match" });
      } else {
        this.props.history.push("/Dashboard");
      }
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
        class="d-flex p-5 justify-content-center text-center bg-image"
        style={mystyle}
      >
        <div
          class="d-flex justify-content-center"
          style={{
            opacity: `0.8`,
            height: `85%`,
            marginTop: `2%`,
            width: `25%`,
            borderStyle: `groove`,
            borderRadius: `20px`,
          }}
        >
          <form style={{ align: `center`, width: `65%`, color: "white" }}>
            <div className="form-group">
              {this.state.error_message && (
                <div className="alert alert-danger" role="alert">
                  {this.state.error_message}
                </div>
              )}
            </div>
            <br />
            <h3>Sign In</h3>
            <hr />
            <div className="form-group">
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
            <br />
            <div className="form-group">
              <b>
                <label style={{ padding: `5px` }}>Password:</label>
              </b>
              <input
                type="password"
                name="userPassword"
                className="form-control"
                placeholder="Enter password"
                onChange={this.changeUserPasswordHandler}
              />
            </div>
            <br />
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-primary btn-block"
              onClick={this.loginUser}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
