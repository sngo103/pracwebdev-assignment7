import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import debitIcon from "../debit.png";
import axios from "axios";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: this.props.accountBalance,
      debits: [],
      newDebit: {
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

  formatDebit(debitObj) {
    let newElement = (
      <>
        <div className="flex justify-center items-center col-span-2 m-1 px-2 py-1 bg-red-600 font-medium rounded-md text-white">
          {debitObj.date}
        </div>
        <div className="flex justify-center items-center col-span-1 m-1 px-2 py-1 border-2 border-red-500 font-medium rounded-md text-red-600 bg-red-50">
          -${debitObj.amount}
        </div>
        <div className="flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 border-2 border-red-500 font-medium rounded-md text-red-600 bg-red-50">
        {debitObj.description || <text className="text-gray-500">No description provided.</text>}
        </div>
      </>
    );
    return newElement;
  }

  async componentDidMount() {
    await axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((res) => {
        let debits = res.data.map((debit) => {
          return this.formatDebit(debit);
        });
        this.setState({ debits: debits });
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ error: true });
      });
  }

  handleAmountChange = (event) => {
    const newObj = {
      date: this.state.newDebit.date,
      amount: parseFloat(event.target.value) || "",
      description: this.state.newDebit.description,
    };
    this.setState({ newDebit: newObj });
  };

  handleDateChange = (event) => {
    const newObj = {
      date: event.target.value,
      amount: this.state.newDebit.amount,
      description: this.state.newDebit.description,
    };
    this.setState({ newDebit: newObj });
  };

  handleDescriptionChange = (event) => {
    const newObj = {
      date: this.state.newDebit.date,
      amount: this.state.newDebit.amount,
      description: event.target.value,
    };
    this.setState({ newDebit: newObj });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newDebits = this.state.debits;
    let newBalance = this.state.accountBalance - this.state.newDebit.amount;
    newDebits.push(this.formatDebit(this.state.newDebit));
    this.setState({
      accountBalance: newBalance,
      debits: newDebits,
      newDebit: {
        amount: "",
        date: "",
        description: "",
      },
    });
  };

  render() {
    return (
      <div className="justify-center text-center">
        <img className="inline-block pb-3 pt-10" src={debitIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">My Debits</h1>

        <AccountBalance
          accountBalance={this.state.accountBalance}
        />
        <br />

        <div className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-600 md:text-lg">
          Debit History
        </div>
        {this.state.error ? (
          <div> Something went wrong, please try again. </div>
        ) : (
          <div className="grid grid-cols-12 py-1 border border-transparent font-medium text-red-600 bg-white">
            <div className="flex justify-center items-center col-span-2 m-1 px-2 py-1 font-medium text-white bg-red-600">
              Date
            </div>
            <div className="flex justify-center items-center col-span-1 m-1 px-2 py-1 font-medium text-white bg-red-600">
              Amount
            </div>
            <div className="flex justify-center-left items-center-left col-span-9 m-1 px-2 py-1 font-medium text-white bg-red-600">
              Description
            </div>
            {this.state.debits.map((debit) => debit)}
          </div>
        )}

        <div className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-600 md:text-lg my-2">
          Add New Debit
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="m-3">
            <label className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500">
              Amount
            </label>
            <input
              required
              type="text"
              onChange={this.handleAmountChange}
              value={this.state.newDebit.amount}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"
            />
          </div>
          <div className="m-3">
            <label className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500">
              Date
            </label>
            <input
              required
              type="date"
              onChange={this.handleDateChange}
              value={this.state.newDebit.date}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"
            />
          </div>
          <div className="grid grid-cols-4 m-3">
            <label className="flex justify-center items-center col-start-2 m-1 px-1 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-500">
              Description
            </label>
            <textarea
              onChange={this.handleDescriptionChange}
              value={this.state.newDebit.description}
              className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-red-600 bg-red-50"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            className="m-1 px-3 py-1 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-500"
          />
        </form>

        <Link
          className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-green-400 hover:bg-green-500 md:text-lg my-2"
          to="/pracwebdev-assignment7/credits"
        >
          My Credits
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

export default Debits;
