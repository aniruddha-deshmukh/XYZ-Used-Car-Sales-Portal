import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeComponent from "./components/HomeComponent";
import AddCarComponent from "./components/AddCarComponent";
import RegisterComponent from "./components/RegisterComponent";
import LoginComponent from "./components/LoginComponent";
import DashboardComponent from "./components/DashboardComponent";
import Search from "./components/Search";
import ViewCar from "./components/ViewCar";
import MessageComponent from "./components/MessageComponent";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <Route path="/" component={HomeComponent} exact />
          <Route path="/Register" component={RegisterComponent} />
          <Route path="/Login" component={LoginComponent} />
          <Route path="/Dashboard" component={DashboardComponent} />
          <Route path="/PostCar" component={AddCarComponent} />
          <Route path="/search" component={Search} />
          <Route path="/search-cars/:searchKeyword" component={Search} />
          <Route path="/view-car/:carId" component={ViewCar} />
          <Route path="/messages/:email" component={MessageComponent}></Route>
          <Route path="/sendmessage" component={MessageComponent}></Route>
        </Switch>

        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}
export default App;
