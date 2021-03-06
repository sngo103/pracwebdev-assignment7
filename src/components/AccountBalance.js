import React, {Component} from 'react';

class AccountBalance extends Component {
  render() {
    return (
        <>
        <div className="inline-flex items-center justify-center m-3 px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-50">
          
          Current Balance: {this.props.accountBalance < 0 ? (<>-${this.props.accountBalance.toFixed(2) * -1}</>) : <>${this.props.accountBalance.toFixed(2)} </>}
        </div>
        </>
    );
  }
}

export default AccountBalance;