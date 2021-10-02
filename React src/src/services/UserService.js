import axios from "axios";

const REG_BASE_URL = "http://localhost:8080/Users/Register";
const Login_BASE_URL = "http://localhost:8080/Users/Login";

class UserService {
  createUser(user) {
    console.log("Create User" + JSON.stringify(user));
    return axios.post(REG_BASE_URL, user);
  }

  login(user) {
    console.log("Login User" + JSON.stringify(user));
    return axios.post(Login_BASE_URL, user);
  }

  sendMessage(username, message) {
    console.log(" username is " + username);
    console.log("message is " + JSON.stringify(message));
    return axios.post(
      "http://localhost:8080/messages" + "/" + username,
      message
    );
  }
}

export default new UserService();
