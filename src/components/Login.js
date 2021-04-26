import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import bankIcon from "../bankofreact.png";

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        userName: "",
        password: "",
      },
      redirect: false,
    };
  }

  handleChange = (e) => {
    const updatedUser = { ...this.state.user };
    const inputField = e.target.name;
    const inputValue = e.target.value;
    updatedUser[inputField] = inputValue;

    this.setState({ user: updatedUser });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.mockLogIn(this.state.user);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: "/pracwebdev-assignment7/home",
        state: { userName: this.state.user }
      }} />;
    }

    return (
      <div className="container justify-center text-center">
        <img className="inline-block p-3" src={bankIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">Bank of React</h1>
        <h1 className="text-xl font-bold">*Sign in with any username and any password.</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="container m-3">
            <label className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50" htmlFor="userName">User Name</label>
            <input
              type="text"
              name="userName"
              onChange={this.handleChange}
              value={this.state.user.userName}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50"
            />
          </div>
          <div className="container m-3">
            <label htmlFor="password" className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">Password</label>
            <input className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50" type="password" name="password" />
          </div>
          <button className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500">Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
