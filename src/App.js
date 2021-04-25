import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LogIn from "./components/Login";
import Home from "./components/Home";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import UserProfile from "./components/UserProfile";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: "joe_shmo",
        memberSince: "07/23/96",
      },
    };
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {
    const LogInComponent = () => (
      <LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />
    );
    const HomeComponent = () => (
      <Home
        user={this.state.currentUser.userName}
        accountBalance={this.state.accountBalance}
      />
    );
    const DebitComponent = () => (
      <Debits accountBalance={this.state.accountBalance} />
    );
    const CreditComponent = () => (
      <Credits accountBalance={this.state.accountBalance} />
    );
    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    );

    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/pracwebdev-assignment7/"
              render={LogInComponent}
            />
            <Route
              exact
              path="/pracwebdev-assignment7/home"
              render={(props) => HomeComponent(props)}
            />
            <Route
              exact
              path="/pracwebdev-assignment7/userProfile"
              render={UserProfileComponent}
            />
            <Route
              exact
              path="/pracwebdev-assignment7/debits"
              render={DebitComponent}
            />
            <Route
              exact
              path="/pracwebdev-assignment7/credits"
              render={CreditComponent}
            />
          </Switch>
        </Router>
        <br /> <br />
        <div className="text-center text-black font-semibold">
          {" "}
          ❤️ Brought to you by Team Food: Samantha Ngo, Gabby Gonzalez, Nirmala Kuhl, Kristy Lau ❤️ <br />
          April 2021
        </div>
      </>
    );
  }
}

export default App;
