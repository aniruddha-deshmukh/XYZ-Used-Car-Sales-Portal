import React, { Component } from "react";
import UserService from "../services/UserService";

class MessageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "eddywork001@gmail.com",
      text: "",
      success: "",
      error: "",
    };
  }

  changeTextHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  };

  sendMessage = (event) => {
    event.preventDefault();
    let message = { text: this.state.text };
    UserService.sendMessage(this.state.username, message)
      .then((res) => this.setState({ success: "Message Sent successfully" }))
      .catch((err) => {
        this.setState({ error: err.message });
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
        <div>
          <div class="col-xl-9 d-flex justify-content-center">
            <form className="form-inline">
              <div>
                {this.state.success && (
                  <div className="alert alert-success" role="alert">
                    {" "}
                    {this.state.success}
                  </div>
                )}
                {this.state.error && (
                  <div className="alert alert-danger" role="alert">
                    {" "}
                    {this.state.error}
                  </div>
                )}
              </div>

              <div className="row">
                <div class="container">
                  <textarea
                    style={{ width: "500px", height: "250px" }}
                    placeholder="Write Message to Slack Channel"
                    name="text"
                    className="form-control  mt-1"
                    onChange={this.changeTextHandler}
                  ></textarea>
                  <br></br>
                </div>
                <div>
                  <button
                    onClick={this.sendMessage}
                    className="btn btn-info"
                    style={{ marginTop: "10px" }}
                  >
                    Send
                  </button>
                </div>
              </div>
              <br></br>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageComponent;
