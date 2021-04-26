import React, { Component } from "react";

class CreditDisplay extends Component {
  render() {
    return (
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
        {this.props.credits}
      </div>
    );
  }
}

export default CreditDisplay;
