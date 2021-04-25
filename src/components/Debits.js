import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import debitIcon from "../debit.png";

class UserProfile extends Component {
  render() {
    return (
      <div className="container justify-center text-center">
        <img className="inline-block p-3" src={debitIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">My Debits</h1>

        <AccountBalance accountBalance={this.props.accountBalance} /><br />

        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-400 hover:bg-green-500 md:text-lg my-2" to="/pracwebdev-assignment7/credits">My Credits</Link>
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2" to="/pracwebdev-assignment7/"> Return to Home </Link>
      </div>
    );
  }
}

export default UserProfile;
