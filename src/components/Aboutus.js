import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
class Aboutus extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <h1>Welcome to the our App khao Piyo and sojao</h1>
        <p>
          We started our app on 26 december 2022 and we offer some amazing food
          for you. This company is started by Kalpesh mahale with the guidance
          of Akshay Saini
        </p>
        <Outlet />
      </>
    );
  }
}
export default Aboutus;
