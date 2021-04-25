import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreditDebitBalance from "./CreditDebitBalance";
import creditIcon from "../credit.png";
import axios from "axios";

class Credits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creditBalance: 0.0,
      accountBalance: this.props.accountBalance,
      credits: [],
      newCredit: {
        amount: 0.0,
        date: "",
        description: "",
      },
      displayTable: "",
      error: false,
    };
  }

  async componentDidMount() {
    await axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((res) => {
        console.log("Credit:", res.data);
        const reducer = (accumulator, currentItem) => accumulator + currentItem.amount;
        const creditBalance = res.data.reduce(reducer, 0.00);
        console.log("CREDITBALANCE:", creditBalance)
        this.setState({ credits: res.data, creditBalance: creditBalance});
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ error: true });
      });
  }

  handleInputChange = (event) => {
    console.log("Changing Input...");
    this.setState({ ingredient: event.target.value });
  };

  handleClick = (event) => {};

  render() {
    return (
      <div className="container justify-center text-center">
        <img className="inline-block pb-3 pt-10" src={creditIcon} alt="bank" />
        <br />
        <h1 className="text-5xl p-5 font-bold">My Credits</h1>

        <CreditDebitBalance creditBalance={this.state.creditBalance} debitBalance={0.00} accountBalance={this.state.accountBalance} />
        <br />

        {this.state.error ? (
          <div> Something went wrong, please try again. </div>
        ) : (
          <div>{null}</div>
        )}

        <Link
          className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-red-400 hover:bg-red-500 md:text-lg my-2"
          to="/pracwebdev-assignment7/debits"
        >
          My Debits
        </Link>
        <Link
          className="w-full flex items-center justify-center  border border-transparent text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg my-2"
          to="/pracwebdev-assignment7/"
        >
          {" "}
          Return to Home{" "}
        </Link>
      </div>
    );
  }
}

export default Credits;
