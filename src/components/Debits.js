import React, { Component } from "react";
import { Link } from "react-router-dom";
import AccountBalance from "./AccountBalance";
import debitIcon from "../debit.png";
import axios from "axios";

class Debits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: [],
      ingredient: "",
      found: false,
      table: "",
    };
  }

  handleInputChange = (event) => {
    console.log("Changing Input...");
    this.setState({ ingredient: event.target.value });
  };

  handleClick = async (event) => {
    event.preventDefault();
    console.log("Running handleSearchClick...");
    let ingredient = this.state.ingredient;
    let linkToAPI =
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + ingredient;

    const response = await axios
      .get(linkToAPI)
      .then((res) => {
        console.log("DATA:", res.data);
        console.log("RES:", res);
        this.setState({ apiData: res.data, found: true });
      })
      .catch((error) => {
        console.log("Error:", error);
        this.setState({ found: false });
      });
  };

  makeTable = () => {
    console.log("Running makeTable...");
    let data = this.state.apiData;
    let foundMatch = this.state.found;
    let table = [];
    if (!foundMatch || !data.drinks) {
      return <div>No results.</div>;
    } else {
      table = data.drinks.map(function (cocktail) {
        console.log("DRINK:", cocktail)
        return (
          <>
            <div className="border-2 border-black grid grid-cols-10 p-1 gap-2">
              <div className="p-1 border-2 col-span-1 row-span-1">
                <img className="transform hover:scale-150" src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              </div>{" "}
              <div className="font-bold p-1 border-2 row-span-1 col-span-9 justify-center items-center flex">
                {cocktail.strDrink}
              </div>
            </div>
            <br />
          </>
        );
      });
    }
    return table;
  };

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

export default Debits;
