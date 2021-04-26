import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import creditIcon from "../credit.png";
import axios from "axios";

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      credits: [],
      newCredit: {
        amount: "",
        date: "",
        description: "",
      },
      error: false,
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formatCredit(creditObj) {
    let newElement = (
      <>
        <div className="flex justify-center items-center col-span-2 m-1 px-2 py-1 bg-green-600 font-medium rounded-md text-white">
          {creditObj.date}
        </div>
        <div className="flex justify-center items-center col-span-1 m-1 px-2 py-1 border-2 border-green-500 font-medium rounded-md text-green-600 bg-green-50">
          ${creditObj.amount}
        </div>
        <div className="flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 border-2 border-green-500 font-medium rounded-md text-green-600 bg-green-50">
          {creditObj.description || <text className="text-gray-500">No description provided.</text>}
        </div>
      </>
    );
    return newElement;
  }

  async componentDidMount() {
    await axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((res) => {
        let credits = res.data.map((credit, index) => {
          return this.formatCredit(credit, index);
        });
        this.setState({ credits: credits});
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ error: true });
      });
  }

  handleAmountChange = (event) => {
    const newObj = {
      date: this.state.newCredit.date,
      amount: parseFloat(event.target.value) || "",
      description: this.state.newCredit.description,
    };
    this.setState({ newCredit: newObj });
  };

  handleDateChange = (event) => {
    const newObj = {
      date: event.target.value,
      amount: this.state.newCredit.amount,
      description: this.state.newCredit.description,
    };
    this.setState({ newCredit: newObj });
  };

  handleDescriptionChange = (event) => {
    const newObj = {
      date: this.state.newCredit.date,
      amount: this.state.newCredit.amount,
      description: event.target.value,
    };
    this.setState({ newCredit: newObj });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newCredits = this.state.credits;
    let newBalance = this.state.accountBalance + this.state.newCredit.amount;
    newCredits.push(
      this.formatCredit(this.state.newCredit)
    );
    this.setState({
      accountBalance: newBalance,
      credits: newCredits,
      newCredit: {
        amount: "",
        date: "",
        description: "",
      },
    });
  };

  render() {
    return (
      <div className="container justify-center text-center">
        <img className="inline-block pb-3 pt-10" src={creditIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">My Credits</h1>

        <AccountBalance accountBalance={this.state.accountBalance} />
        <br />

        <div className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-600 md:text-lg">
          Credit History
        </div>
        {this.state.error ? (
          <div> Something went wrong, please try again. </div>
        ) : (
          <div className="grid grid-cols-12 py-1 border border-transparent font-medium text-green-600 bg-white">
            <div className="flex justify-center items-center col-span-2 m-1 px-2 py-1 font-medium text-white bg-green-600">
              Date
            </div>
            <div className="flex justify-center items-center col-span-1 m-1 px-2 py-1 font-medium text-white bg-green-600">
              Amount
            </div>
            <div className="flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 font-medium text-white bg-green-600">
              Description
            </div>
            {this.state.credits.map((credit) => credit)}
          </div>
        )}

        <div className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-600 md:text-lg my-2">
          Add New Credit
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="container m-3">
            <label className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500">
              Amount
            </label>
            <input
              required
              type="text"
              onChange={this.handleAmountChange}
              value={this.state.newCredit.amount}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"
            />
          </div>
          <div className="container m-3">
            <label className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500">
              Date
            </label>
            <input
              required
              type="date"
              onChange={this.handleDateChange}
              value={this.state.newCredit.date}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"
            />
          </div>
          <div className="grid grid-cols-4 m-3">
            <label className="flex justify-center items-center col-start-2 m-1 px-1 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-500">
              Description
            </label>
            <textarea
              onChange={this.handleDescriptionChange}
              value={this.state.newCredit.description}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-50"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-500"
          />
        </form>

        <Link
          className="w-full flex items-center justify-center border border-transparent text-base font-medium text-white bg-red-400 hover:bg-red-500 md:text-lg my-2"
          to="/pracwebdev-assignment7/debits"
        >
          My Debits
        </Link>
        <Link
          className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2"
          to="/pracwebdev-assignment7/home"
        >
          {" "}
          Return to Home{" "}
        </Link>
      </div>
    );
  }
}

export default Credits;
