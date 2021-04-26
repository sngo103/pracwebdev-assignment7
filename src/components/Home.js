import React, { Component } from "react";
import AccountBalance from "./AccountBalance";
import { Link } from "react-router-dom";
import bankIcon from "../bankofreact.png";

class Home extends Component {
  render() {
    return (
      <div className="justify-center text-center items-center">
        <img className="inline-block p-3" src={bankIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">Bank of React</h1>

        <AccountBalance userName={this.props.user} accountBalance={this.props.accountBalance} /><br />
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-400 hover:bg-red-500 md:text-lg my-2" to="/pracwebdev-assignment7/debits">My Debits</Link>
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-400 hover:bg-green-500 md:text-lg my-2" to="/pracwebdev-assignment7/credits">My Credits</Link>
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2" to="/pracwebdev-assignment7/userProfile">My Profile</Link>
      </div>
    );
  }
}

export default Home;
