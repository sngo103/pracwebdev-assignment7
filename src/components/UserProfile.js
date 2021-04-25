import React, { Component } from "react";
import { Link } from "react-router-dom";
import profileIcon from "../profile.png";

class UserProfile extends Component {
  render() {
    return (
      <div className="container justify-center text-center">
        <img className="inline-block p-3" src={profileIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">User Profile</h1>

        <div className="items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">Username </div> <div> {this.props.userName}</div>
        <div className="items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">Member Since </div> <div> {this.props.memberSince}</div><br />
        <Link className="w-full flex items-center justify-center  border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg" to="/pracwebdev-assignment7/">Return to Home</Link>
      </div>
    );
  }
}

export default UserProfile;
