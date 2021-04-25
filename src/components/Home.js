import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import bankIcon from "../bankofreact.png";

class Home extends Component {
  render() {
    return (
      <div className="container justify-center text-center">
        <img className="inline-block p-3" src={bankIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">Bank of React</h1>
        <h1 className="text-l p-1">
          Brought to you by the Foodies
          <br /> Samantha Ngo, Gabby Gonzalez, Nirmala Kuhl, Kristy Lau
        </h1>

        <AccountBalance accountBalance={this.props.accountBalance} /><br />
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg" to="/pracwebdev-assignment7/userProfile">My Profile</Link>
      </div>
    );
  }
}

export default Home;
