import React, { Component } from "react";

class HomeComponent extends Component {
  render() {
    const mystyle = {
      width: "100%",
      height: "593px",
      backgroundImage: `url("https://imgix.bustle.com/uploads/image/2020/11/10/c45fd97d-5fd3-4a98-9a80-3b3608b1367f-the-tesla-lineup-featuring-the-model-s-semi-3-x.jpg?w=1540&h=620&fit=crop&crop=focalpoint&auto=format%2Ccompress&fp-x=0.384&fp-y=0.5971563981042654&blend=000000&blendAlpha=45&blendMode=normal")`,
    };
    return (
      <div class="p-5 text-center bg-image" style={mystyle}>
        <div class="mask" style={{ backgroundcolor: "rgba(0, 0, 0, 1)" }}>
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="text-white">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1 class="mb-3">Welcome To XYZ Cars</h1>
              <br />
              <a
                class="btn btn-outline-light btn-lg m-2"
                href="/Register"
                role="button"
              >
                Register
              </a>
              <a
                class="btn btn-outline-light btn-lg m-2"
                href="/Login"
                role="button"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
