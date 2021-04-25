import React, { Component } from "react";

class CreditDebitBalance extends Component {
  render() {
    return (
      <>
        <div className="font-bold"> Welcome, {this.props.userName}! </div>
        <div className="inline-flex items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">
          Credit Balance: ${this.props.creditBalance}
        </div>
        <div className="inline-flex items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">
          Debit Balance: ${this.props.debitBalance}
        </div>
        <div className="inline-flex items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">
          Account Balance: ${this.props.accountBalance}
        </div>
      </>
    );
  }
}

export default CreditDebitBalance;
